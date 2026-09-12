import { useState, type ComponentType } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import {
  Users,
  Stethoscope,
  Settings,
  Cloud,
  Lightbulb,
  type LucideProps,
} from 'lucide-react'
import { domains } from '../../data/company'
import { useLowPower } from '../../hooks/useMediaQuery'
import { cn } from '../../utils/cn'
import { LogoLockup, LOCKUP_VIEWBOX, LOCKUP_RATIO } from '../layout/LogoLockup'

/**
 * Hero visual: healthcare is the field, drawn as a field.
 *
 *                  HEALTHCARE  (top of the ring)
 *          ╭───────────┴───────────╮
 *     CLINICAL                   OPERATIONS      ← the four domains sit ON
 *          │     (  LUCAS LOGO  )     │           the ring, inside the field
 *     TECHNOLOGY                 INNOVATION
 *          ╰───────────────────────╯
 *
 * The ring IS the field. One 3.6s cycle in two stages: energy leaves
 * Healthcare and travels the ring both ways, lighting each domain as it
 * passes; then the domains converge into the system, which fires.
 *
 * Pure SVG — no canvas, no WebGL, no image payload. Continuous motion is CSS
 * and stops on low-power devices or under reduced motion; the one-shot draw-in
 * on mount is `motion`. Two treatments via `dark`; geometry is shared.
 */

/** The composition spans y≈40–600; the viewBox starts at y0 so it fills its column. */
const VB = { w: 680, h: 570, y0: 30 }
const HUB = { x: 340, y: 318, r: 82 }
const RING = { rx: 215, ry: 215 }
const NODE_R = 34

const onRing = (deg: number) => {
  const t = (deg * Math.PI) / 180
  return { x: +(HUB.x + RING.rx * Math.cos(t)).toFixed(1), y: +(HUB.y + RING.ry * Math.sin(t)).toFixed(1) }
}

type Side = 'top' | 'bottom' | 'left' | 'right'
type Role = 'field' | 'domain'
interface Node {
  id: string
  label: string
  tag: string
  role: Role
  deg: number
  side: Side
  Icon: ComponentType<LucideProps>
  /** Lower domains are reached later in the ring's travel. */
  late?: boolean
}

const NODES: Node[] = [
  { id: 'healthcare', label: 'Healthcare', tag: 'The field', role: 'field', deg: -90, side: 'top', Icon: Users },
  { id: 'clinical', label: 'Clinical', tag: 'Care delivery', role: 'domain', deg: -150, side: 'left', Icon: Stethoscope },
  { id: 'operations', label: 'Operations', tag: 'Efficiency', role: 'domain', deg: -30, side: 'right', Icon: Settings },
  { id: 'technology', label: 'Technology', tag: 'Integration', role: 'domain', deg: 150, side: 'left', Icon: Cloud, late: true },
  { id: 'innovation', label: 'Innovation', tag: 'AI · Automation', role: 'domain', deg: 30, side: 'right', Icon: Lightbulb, late: true },
]
const POS = Object.fromEntries(NODES.map((n) => [n.id, onRing(n.deg)])) as Record<string, { x: number; y: number }>
const DOMAINS = NODES.filter((n) => n.role === 'domain')

/** Cubic that bows toward the vertical axis, so the domain streams converge like tendrils. */
const converge = (a: { x: number; y: number }, b: { x: number; y: number }) => {
  const my = (a.y + b.y) / 2
  return `M ${a.x} ${a.y} C ${a.x} ${my}, ${b.x} ${my}, ${b.x} ${b.y}`
}
/** Elliptical arc along the ring from the top to `to`, going left (sweep 0) or right (sweep 1). */
const alongRing = (to: { x: number; y: number }, sweep: 0 | 1) =>
  `M ${POS.healthcare.x} ${POS.healthcare.y} A ${RING.rx} ${RING.ry} 0 0 ${sweep} ${to.x} ${to.y}`

interface Edge {
  id: string
  d: string
  stage: 1 | 2
  touches: string[]
  /** Stage-1 arcs ride the ring, which is already drawn — no base line of their own. */
  bare?: boolean
}

const EDGES: Edge[] = [
  { id: 'field-left', d: alongRing(POS.technology, 0), stage: 1, touches: ['healthcare', 'clinical', 'technology'], bare: true },
  { id: 'field-right', d: alongRing(POS.innovation, 1), stage: 1, touches: ['healthcare', 'operations', 'innovation'], bare: true },
  ...DOMAINS.map<Edge>((d) => ({ id: `${d.id}-hub`, d: converge(POS[d.id], HUB), stage: 2, touches: [d.id] })),
]

const PALETTE = {
  dark: {
    halo: '#0038ff',
    orbit: 'rgba(255,255,255,0.13)',
    particle: '#8fd6ff',
    ring: 'rgba(143,214,255,0.55)',
    stream: '#5b84ff',
    flow: '#bfe4ff',
    pulse: '#ffffff',
    hubFill: '#0c1340',
    hubCore: '#1a2a6e',
    hubEdge: 'rgba(143,214,255,0.55)',
    hubGlow: 'rgba(80,140,255,0.6)',
    nodeFill: '#0f1747',
    nodeEdge: 'rgba(143,214,255,0.5)',
    icon: '#c3e6ff',
    label: '#ffffff',
    sub: 'rgba(255,255,255,0.6)',
    baseOpacity: 0.85,
    flowOpacity: 0.65,
  },
  light: {
    halo: '#2876e7',
    orbit: 'rgba(0,3,33,0.12)',
    particle: '#2876e7',
    ring: 'rgba(40,118,231,0.5)',
    stream: '#2876e7',
    flow: '#2876e7',
    pulse: '#0038ff',
    hubFill: '#ffffff',
    hubCore: '#ffffff',
    hubEdge: 'rgba(40,118,231,0.45)',
    hubGlow: 'rgba(40,118,231,0.4)',
    nodeFill: '#ffffff',
    nodeEdge: 'rgba(40,118,231,0.45)',
    icon: '#2876e7',
    label: '#000321',
    sub: '#565a7c',
    baseOpacity: 0.75,
    flowOpacity: 0.45,
  },
} as const

const spring = { type: 'spring', stiffness: 160, damping: 22 } as const
const ARRIVE: Record<Role, string> = { field: 'sv-field-emit', domain: 'sv-node-arrive' }

export function SystemVisual({ dark = true, className = 'max-w-[520px]' }: { dark?: boolean; className?: string }) {
  const [active, setActive] = useState<string | null>(null)
  const still = useLowPower()
  const T = dark ? PALETTE.dark : PALETTE.light
  const current = domains.find((d) => d.id === active)
  const origin = { transformBox: 'fill-box', transformOrigin: '50% 50%' } as const
  const hubOrigin = { transformOrigin: `${HUB.x}px ${HUB.y}px` } as const

  return (
    <div className={cn('relative mx-auto w-full', className)}>
      <div className="relative aspect-[680/570] w-full">
        <svg
          viewBox={`0 ${VB.y0} ${VB.w} ${VB.h}`}
          className="absolute inset-0 h-full w-full overflow-visible"
          role="img"
          aria-label="Healthcare, the field, surrounds four domains — clinical, operations, technology and innovation — which converge into the Lucas Health Tech system."
        >
          <defs>
            <radialGradient id="sv-halo">
              <stop offset="0%" stopColor={T.halo} stopOpacity={dark ? 0.32 : 0.16} />
              <stop offset="55%" stopColor={T.halo} stopOpacity={dark ? 0.08 : 0.04} />
              <stop offset="100%" stopColor={T.halo} stopOpacity="0" />
            </radialGradient>
            <radialGradient id="sv-hub" cx="50%" cy="38%" r="70%">
              <stop offset="0%" stopColor={T.hubCore} />
              <stop offset="100%" stopColor={T.hubFill} />
            </radialGradient>
            <filter id="sv-glow" x="-40%" y="-40%" width="180%" height="180%">
              <feGaussianBlur stdDeviation="3.5" result="b" />
              <feMerge>
                <feMergeNode in="b" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <filter id="sv-soft" x="-60%" y="-60%" width="220%" height="220%">
              <feGaussianBlur stdDeviation="10" />
            </filter>
          </defs>

          {/* ── Ambient: halo, an outer dashed orbit outside the field, an inner one inside it ── */}
          <circle cx={HUB.x} cy={HUB.y} r="250" fill="url(#sv-halo)" />
          <g className={cn(!still && 'sv-spin')} style={hubOrigin}>
            <ellipse cx={HUB.x} cy={HUB.y} rx={RING.rx + 34} ry={RING.ry + 28} fill="none" stroke={T.orbit} strokeWidth="1" strokeDasharray="2 9" />
            {[15, 130, 250].map((deg) => (
              <circle key={deg} cx={HUB.x + (RING.rx + 34) * Math.cos((deg * Math.PI) / 180)} cy={HUB.y + (RING.ry + 28) * Math.sin((deg * Math.PI) / 180)} r="3" fill={T.particle} opacity="0.85" />
            ))}
          </g>
          <g className={cn(!still && 'sv-spin-rev')} style={hubOrigin}>
            <ellipse cx={HUB.x} cy={HUB.y} rx="164" ry="128" fill="none" stroke={T.orbit} strokeWidth="1" />
            {[70, 200, 320].map((deg) => (
              <circle key={deg} cx={HUB.x + 164 * Math.cos((deg * Math.PI) / 180)} cy={HUB.y + 128 * Math.sin((deg * Math.PI) / 180)} r="2.2" fill={T.particle} opacity="0.7" />
            ))}
          </g>

          {/* ── The field: the ring itself, with a current always circulating it ── */}
          <motion.ellipse
            cx={HUB.x}
            cy={HUB.y}
            rx={RING.rx}
            ry={RING.ry}
            fill="none"
            stroke={T.ring}
            strokeWidth="1.5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.4, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          />
          {!still && (
            <motion.ellipse
              cx={HUB.x}
              cy={HUB.y}
              rx={RING.rx}
              ry={RING.ry}
              pathLength={400}
              fill="none"
              stroke={T.flow}
              strokeWidth="1.1"
              strokeOpacity={T.flowOpacity}
              className="sv-flow"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6 }}
            />
          )}

          {/* ── Streams, drawn in stage order ────────────────────────────── */}
          <g fill="none" strokeLinecap="round">
            {EDGES.map((e, i) => {
              const on = active !== null && e.touches.includes(active)
              const dim = active !== null && !on
              return (
                <g key={e.id} style={{ opacity: dim ? 0.3 : 1, transition: 'opacity 400ms' }}>
                  {!e.bare && (
                    <motion.path
                      d={e.d}
                      stroke={T.stream}
                      strokeOpacity={on ? 1 : T.baseOpacity}
                      strokeWidth={on ? 2.6 : 1.7}
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 1 }}
                      transition={{ duration: 0.9, delay: 0.5 + (e.stage - 1) * 0.5 + (i % 4) * 0.06, ease: [0.16, 1, 0.3, 1] }}
                    />
                  )}
                  {!still && (
                    <>
                      {!e.bare && (
                        <motion.path
                          d={e.d}
                          pathLength={400}
                          stroke={T.flow}
                          strokeWidth="1.1"
                          strokeOpacity={on ? 0.95 : T.flowOpacity}
                          className="sv-flow"
                          style={{ animationDelay: `${-i * 0.31}s` }}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 1.6 }}
                        />
                      )}
                      {/* Staged packet */}
                      <motion.path
                        d={e.d}
                        pathLength={400}
                        stroke={T.pulse}
                        strokeWidth={on ? 3.4 : 2.4}
                        filter="url(#sv-glow)"
                        className={`sv-s${e.stage}`}
                        style={{ animationDelay: `${-(i % 4) * 0.05}s` }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.8 }}
                      />
                    </>
                  )}
                </g>
              )
            })}
          </g>

          {/* ── Hub — our system ─────────────────────────────────────────── */}
          <motion.g initial={{ scale: 0.7, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ ...spring, delay: 0.15 }} style={origin}>
            <circle
              cx={HUB.x}
              cy={HUB.y}
              r={HUB.r + 26}
              fill={T.hubGlow}
              filter="url(#sv-soft)"
              className={cn(!still && 'sv-hub-fire')}
              style={{ ...hubOrigin, opacity: still ? 0.6 : undefined }}
            />
            <g className={cn(!still && 'sv-spin')} style={{ ...hubOrigin, animationDuration: '30s' }}>
              <circle cx={HUB.x} cy={HUB.y} r={HUB.r + 16} fill="none" stroke={T.hubEdge} strokeWidth="1" strokeDasharray="3 7" />
            </g>
            <circle cx={HUB.x} cy={HUB.y} r={HUB.r} fill="url(#sv-hub)" stroke={T.hubEdge} strokeWidth="1.5" />
            {/* The system is us: the full lockup, on the hub's own ground */}
            <svg x={HUB.x - 60} y={HUB.y - 34} width={120} height={120 * LOCKUP_RATIO} viewBox={LOCKUP_VIEWBOX} overflow="visible" aria-hidden>
              <LogoLockup word={dark ? '#ffffff' : '#000321'} rule="#2374e0" />
            </svg>
            <text x={HUB.x} y={HUB.y + 38} textAnchor="middle" fill={T.sub} className="hidden font-mono sm:block" style={{ fontSize: 7.5, letterSpacing: '0.18em' }}>
              OUR SYSTEM
            </text>
          </motion.g>

          {/* ── Nodes, sitting on the ring ───────────────────────────────── */}
          {NODES.map((n, i) => {
            const { x, y } = POS[n.id]
            const on = active === n.id
            const dim = active !== null && !on && n.role === 'domain'
            const lx = n.side === 'left' ? x - NODE_R - 16 : n.side === 'right' ? x + NODE_R + 16 : x
            const ly = n.side === 'top' ? y - NODE_R - 26 : n.side === 'bottom' ? y + NODE_R + 30 : y - 2
            const anchor = n.side === 'left' ? 'end' : n.side === 'right' ? 'start' : 'middle'
            return (
              <motion.g
                key={n.id}
                initial={{ scale: 0.6, opacity: 0 }}
                animate={{ scale: 1, opacity: dim ? 0.45 : 1 }}
                transition={{ ...spring, delay: 0.4 + i * 0.09 }}
                style={origin}
              >
                <g className={cn(!still && 'sv-float')} style={{ animationDelay: `${-i * 1.1}s`, animationDuration: `${6.5 + (i % 3)}s` }}>
                  {/* Arrival ring — lights up when the packet reaches this node */}
                  <circle
                    cx={x}
                    cy={y}
                    r={NODE_R + 10}
                    fill="none"
                    stroke={T.nodeEdge}
                    strokeWidth={on ? 1.6 : 1}
                    className={cn(!still && !on && ARRIVE[n.role])}
                    style={{
                      transformOrigin: `${x}px ${y}px`,
                      opacity: on || still ? 0.9 : undefined,
                      /* Upper domains are passed first on the ring; the flash comes earlier. */
                      animationDelay: n.role === 'domain' && !n.late ? '-0.62s' : undefined,
                    }}
                  />
                  <circle cx={x} cy={y} r={NODE_R} fill={T.nodeFill} stroke={T.nodeEdge} strokeWidth={on ? 2 : 1.25} filter={on ? 'url(#sv-glow)' : undefined} />
                  <n.Icon x={x - 11} y={y - 11} width={22} height={22} color={T.icon} strokeWidth={1.75} aria-hidden />
                </g>
                <text x={lx} y={ly} textAnchor={anchor} fill={T.label} className="font-mono [font-size:19px] sm:[font-size:12.5px]" style={{ letterSpacing: '0.2em', fontWeight: 500 }}>
                  {n.label.toUpperCase()}
                </text>
                <text x={lx} y={ly + 16} textAnchor={anchor} fill={T.sub} className="hidden font-mono sm:block" style={{ fontSize: 8, letterSpacing: '0.14em' }}>
                  {n.tag.toUpperCase()}
                </text>
              </motion.g>
            )
          })}
        </svg>

        {/* Accessible hit areas over the four domain nodes */}
        {DOMAINS.map((n) => {
          const d = domains.find((x) => x.id === n.id)!
          const { x, y } = POS[n.id]
          return (
            <button
              key={n.id}
              type="button"
              onMouseEnter={() => setActive(n.id)}
              onMouseLeave={() => setActive(null)}
              onFocus={() => setActive(n.id)}
              onBlur={() => setActive(null)}
              onClick={() => setActive((a) => (a === n.id ? null : n.id))}
              aria-label={`${d.label}: ${d.detail}`}
              className="absolute h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full"
              style={{ left: `${(x / VB.w) * 100}%`, top: `${((y - VB.y0) / VB.h) * 100}%` }}
            />
          )
        })}
      </div>

      {/* Caption — one line, replaced on hover */}
      <div className="mt-2 min-h-[52px] px-2 text-center sm:min-h-[44px]">
        <AnimatePresence mode="wait">
          <motion.p
            key={current?.id ?? 'default'}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.25 }}
            className={cn('text-[13.5px] leading-relaxed', dark ? 'text-muted-dark' : 'text-muted')}
          >
            {current ? current.detail : 'Healthcare is the field. Four domains converge in our system.'}
          </motion.p>
        </AnimatePresence>
      </div>
    </div>
  )
}
