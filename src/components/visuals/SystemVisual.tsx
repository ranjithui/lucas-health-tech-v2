import { useState, type ComponentType } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import {
  Users,
  Stethoscope,
  Settings,
  Cloud,
  Lightbulb,
  Sparkles,
  type LucideProps,
} from 'lucide-react'
import { domains } from '../../data/company'
import { useLowPower } from '../../hooks/useMediaQuery'
import { cn } from '../../utils/cn'
import { LogoLockup, LOCKUP_VIEWBOX, LOCKUP_RATIO } from '../layout/LogoLockup'
import '../../styles/system-visual.css'

/**
 * Hero visual: healthcare flows through our intelligence into transformation.
 *
 *                       HEALTHCARE                ← the field, top
 *                        ╲  │  ╱
 *     CLINICAL ────── ( INTELLIGENCE ) ────── OPERATIONS
 *          ╲            ╱        ╲              ╱
 *           TECHNOLOGY ──────────── INNOVATION   ← the four systems fan out
 *               ╲      ╲        ╱      ╱           and exchange laterally
 *                  TRANSFORMATION                ← everything converges, fires
 *
 * One 5.4s cycle: signals leave Healthcare and light the core; the core
 * distributes to the four systems, which talk to their neighbours and reply;
 * then all four converge into Transformation, which fires. Then a beat of rest.
 *
 * Pure SVG — no canvas, no image payload, no per-frame JS. The continuous
 * motion is CSS (src/styles/system-visual.css) and stops entirely on
 * low-power devices or under reduced motion; the one-shot draw-in on mount is
 * `motion`. Two treatments via `dark`; geometry is shared.
 */

const VB = { w: 680, h: 640 }

/** One story cycle in seconds. Mirrors `--sv-cycle` in system-visual.css. */
const CYCLE = 5.4
/**
 * The CSS keyframes are "windowed": each does its work in the first ~20% of
 * the cycle and then rests. This returns the (negative) animation-delay that
 * puts that window at `pct` percent of the shared cycle.
 */
const at = (pct: number) => `${((pct / 100) * CYCLE - CYCLE).toFixed(3)}s`

type Pt = { x: number; y: number }
const f = (n: number) => +n.toFixed(1)

/** Node centres. The composition fills the viewBox top to bottom. */
const P = {
  healthcare: { x: 340, y: 76 },
  core: { x: 340, y: 262 },
  clinical: { x: 112, y: 262 },
  operations: { x: 568, y: 262 },
  technology: { x: 240, y: 442 },
  innovation: { x: 440, y: 442 },
  transformation: { x: 340, y: 574 },
} satisfies Record<string, Pt>
type NodeId = keyof typeof P

const CORE_R = 78
const ORBIT_R = 96

type Side = 'top' | 'bottom'
type Role = 'field' | 'domain' | 'outcome'
interface Node {
  id: NodeId
  label: string
  tag?: string
  role: Role
  side: Side
  r: number
  Icon: ComponentType<LucideProps>
  /** Cycle % at which a packet lands here; the halo ring pulses then. */
  pulseAt: number
}

const NODES: Node[] = [
  { id: 'healthcare', label: 'Healthcare', tag: 'The field', role: 'field', side: 'top', r: 26, Icon: Users, pulseAt: 0 },
  { id: 'clinical', label: 'Clinical', tag: 'Care delivery', role: 'domain', side: 'top', r: 32, Icon: Stethoscope, pulseAt: 40 },
  { id: 'operations', label: 'Operations', tag: 'Efficiency', role: 'domain', side: 'top', r: 32, Icon: Settings, pulseAt: 40 },
  { id: 'technology', label: 'Technology', tag: 'Integration', role: 'domain', side: 'bottom', r: 32, Icon: Cloud, pulseAt: 44 },
  { id: 'innovation', label: 'Innovation', tag: 'AI · Automation', role: 'domain', side: 'bottom', r: 32, Icon: Lightbulb, pulseAt: 44 },
  { id: 'transformation', label: 'Transformation', role: 'outcome', side: 'bottom', r: 28, Icon: Sparkles, pulseAt: 81 },
]
const DOMAINS = NODES.filter((n) => n.role === 'domain')
const RADIUS = Object.fromEntries(NODES.map((n) => [n.id, n.r])) as Record<NodeId, number>

/**
 * A connection from the rim of circle `a` to the rim of circle `b`. `bend`
 * bows the curve sideways: positive is to the right of the direction of
 * travel (on screen), negative to the left; 0 is a straight line.
 */
const edge = (a: Pt, ra: number, b: Pt, rb: number, bend = 0) => {
  const dx = b.x - a.x
  const dy = b.y - a.y
  const len = Math.hypot(dx, dy)
  const ux = dx / len
  const uy = dy / len
  const nx = -uy
  const ny = ux
  const s = { x: a.x + ux * ra, y: a.y + uy * ra }
  const e = { x: b.x - ux * rb, y: b.y - uy * rb }
  const l = (len - ra - rb) / 3
  const c1 = { x: s.x + ux * l + nx * bend, y: s.y + uy * l + ny * bend }
  const c2 = { x: e.x - ux * l + nx * bend, y: e.y - uy * l + ny * bend }
  return `M ${f(s.x)} ${f(s.y)} C ${f(c1.x)} ${f(c1.y)}, ${f(c2.x)} ${f(c2.y)}, ${f(e.x)} ${f(e.y)}`
}

type PacketClass = 'sv-comet' | 'sv-dot-out' | 'sv-dot-in'
interface Packet {
  cls: PacketClass
  /** Cycle % at which this packet starts travelling. */
  at: number
}
interface Edge {
  id: string
  d: string
  /** Domain ids whose hover/focus should highlight this edge. */
  touches: NodeId[]
  packets: Packet[]
  /** Carries the faint ambient current. */
  flow?: boolean
  /** Mount draw-in delay, seconds. */
  draw: number
}

const { healthcare: HC, core: CO, clinical: CL, operations: OP, technology: TE, innovation: IN, transformation: TR } = P

/**
 * Every connection in story order. Outward dots leave the core on the left
 * pair first, then the lower pair; replies come back a little later; the
 * lateral exchange sits in between; the convergence comets go last.
 */
const EDGES: Edge[] = [
  // Healthcare → Intelligence: three signal lines funnelling into the core.
  { id: 'signal-l', d: `M 322 94 C 306 122, 300 156, 311 190`, touches: [], packets: [{ cls: 'sv-comet', at: 2 }], flow: true, draw: 0.45 },
  { id: 'signal-c', d: `M ${HC.x} ${HC.y + RADIUS.healthcare} L ${CO.x} ${CO.y - CORE_R}`, touches: [], packets: [{ cls: 'sv-comet', at: 0 }], flow: true, draw: 0.4 },
  { id: 'signal-r', d: `M 358 94 C 374 122, 380 156, 369 190`, touches: [], packets: [{ cls: 'sv-comet', at: 4 }], flow: true, draw: 0.5 },

  // Intelligence ↔ the four systems.
  { id: 'core-clinical', d: edge(CO, CORE_R, CL, RADIUS.clinical), touches: ['clinical'], packets: [{ cls: 'sv-dot-out', at: 20 }, { cls: 'sv-dot-in', at: 42 }], flow: true, draw: 0.7 },
  { id: 'core-operations', d: edge(CO, CORE_R, OP, RADIUS.operations), touches: ['operations'], packets: [{ cls: 'sv-dot-out', at: 20 }, { cls: 'sv-dot-in', at: 42 }], flow: true, draw: 0.7 },
  { id: 'core-technology', d: edge(CO, CORE_R, TE, RADIUS.technology, 12), touches: ['technology'], packets: [{ cls: 'sv-dot-out', at: 24 }, { cls: 'sv-dot-in', at: 46 }], flow: true, draw: 0.8 },
  { id: 'core-innovation', d: edge(CO, CORE_R, IN, RADIUS.innovation, -12), touches: ['innovation'], packets: [{ cls: 'sv-dot-out', at: 24 }, { cls: 'sv-dot-in', at: 46 }], flow: true, draw: 0.8 },

  // Neighbouring systems exchange both ways.
  { id: 'clinical-technology', d: edge(CL, RADIUS.clinical, TE, RADIUS.technology, 12), touches: ['clinical', 'technology'], packets: [{ cls: 'sv-dot-out', at: 34 }, { cls: 'sv-dot-in', at: 40 }], flow: true, draw: 1.05 },
  { id: 'operations-innovation', d: edge(OP, RADIUS.operations, IN, RADIUS.innovation, -12), touches: ['operations', 'innovation'], packets: [{ cls: 'sv-dot-out', at: 34 }, { cls: 'sv-dot-in', at: 40 }], flow: true, draw: 1.05 },
  { id: 'technology-innovation', d: `M 270 431 Q ${CO.x} 402 410 431`, touches: ['technology', 'innovation'], packets: [{ cls: 'sv-dot-out', at: 38 }, { cls: 'sv-dot-in', at: 44 }], flow: true, draw: 1.15 },

  // The four systems converge into Transformation. The outer pair sweep
  // around the lower nodes and arrive from the sides; the lower pair meet at the top.
  { id: 'clinical-transformation', d: `M ${CL.x} ${CL.y + RADIUS.clinical} C 100 430, 108 ${TR.y}, ${TR.x - RADIUS.transformation} ${TR.y}`, touches: ['clinical'], packets: [{ cls: 'sv-comet', at: 58 }], draw: 1.3 },
  { id: 'operations-transformation', d: `M ${OP.x} ${OP.y + RADIUS.operations} C 580 430, 572 ${TR.y}, ${TR.x + RADIUS.transformation} ${TR.y}`, touches: ['operations'], packets: [{ cls: 'sv-comet', at: 58 }], draw: 1.3 },
  { id: 'technology-transformation', d: `M 271 450 C 325 458, 340 495, ${TR.x - 2} ${TR.y - RADIUS.transformation}`, touches: ['technology'], packets: [{ cls: 'sv-comet', at: 62 }], draw: 1.4 },
  { id: 'innovation-transformation', d: `M 409 450 C 355 458, 340 495, ${TR.x + 2} ${TR.y - RADIUS.transformation}`, touches: ['innovation'], packets: [{ cls: 'sv-comet', at: 62 }], draw: 1.4 },
]

/** The two grounds. Every colour here is from the brand palette. */
const PALETTE = {
  dark: {
    base: '#1f4e8c',
    flow: '#3b6ea8',
    particle: '#8fb3e0',
    nodeFill: '#152840',
    nodeEdge: 'rgba(143,179,224,0.5)',
    icon: '#8fb3e0',
    coreFrom: '#1a3352',
    coreTo: '#0f1e30',
    coreEdge: 'rgba(143,179,224,0.55)',
    illum: '#1f4e8c',
    illumMax: 0.35,
    orbit: 'rgba(255,255,255,0.12)',
    label: '#f2f5f8',
    sub: '#a3b1c0',
    gold: '#b8975a',
    baseOpacity: 0.7,
    flowOpacity: 0.35,
  },
  light: {
    base: '#1f4e8c',
    flow: '#3b6ea8',
    particle: '#3b6ea8',
    nodeFill: '#FFFFFF',
    nodeEdge: 'rgba(31,78,140,0.55)',
    icon: '#1f4e8c',
    coreFrom: '#FFFFFF',
    coreTo: '#FFFFFF',
    coreEdge: 'rgba(31,78,140,0.45)',
    illum: '#3b6ea8',
    illumMax: 0.18,
    orbit: 'rgba(10,26,47,0.14)',
    label: '#0f1e30',
    sub: '#5c6b7a',
    gold: '#b8975a',
    baseOpacity: 0.55,
    flowOpacity: 0.3,
  },
} as const

const spring = { type: 'spring', stiffness: 160, damping: 22 } as const
const DRAW_EASE = [0.16, 1, 0.3, 1] as const
/** Moving elements fade in only after the scene has drawn itself. */
const MOTION_IN = { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { delay: 1.7 } } as const

export function SystemVisual({ dark = true, className = 'max-w-[520px]' }: { dark?: boolean; className?: string }) {
  const [active, setActive] = useState<string | null>(null)
  const still = useLowPower()
  const T = dark ? PALETTE.dark : PALETTE.light
  const current = domains.find((d) => d.id === active)
  const origin = { transformBox: 'fill-box', transformOrigin: '50% 50%' } as const
  const coreOrigin = { transformOrigin: `${CO.x}px ${CO.y}px` } as const

  return (
    <div className={cn('relative mx-auto w-full', className)}>
      <div className="relative aspect-[680/640] w-full">
        <svg
          viewBox={`0 0 ${VB.w} ${VB.h}`}
          className="sv-scene absolute inset-0 h-full w-full overflow-visible"
          role="img"
          aria-label="Healthcare signals flow into the Lucas Health Tech intelligence core, are coordinated across clinical, operations, technology and innovation, and converge into transformation."
        >
          <defs>
            {/* The core's inner illumination — a soft wash, never a glow. */}
            <radialGradient id="sv-illum">
              <stop offset="0%" stopColor={T.illum} stopOpacity={T.illumMax} />
              <stop offset="45%" stopColor={T.illum} stopOpacity={T.illumMax * 0.4} />
              <stop offset="100%" stopColor={T.illum} stopOpacity="0" />
            </radialGradient>
            <radialGradient id="sv-core" cx="50%" cy="38%" r="70%">
              <stop offset="0%" stopColor={T.coreFrom} />
              <stop offset="100%" stopColor={T.coreTo} />
            </radialGradient>
            {/* Transformation's gold ground — the only gold in the scene. */}
            <radialGradient id="sv-gold">
              <stop offset="0%" stopColor={T.gold} stopOpacity={dark ? 0.28 : 0.2} />
              <stop offset="60%" stopColor={T.gold} stopOpacity={dark ? 0.08 : 0.05} />
              <stop offset="100%" stopColor={T.gold} stopOpacity="0" />
            </radialGradient>
            {/* Comets get the softest of halos: a 2.5px blur under the stroke. */}
            <filter id="sv-glow" x="-40%" y="-40%" width="180%" height="180%">
              <feGaussianBlur stdDeviation="2.5" result="b" />
              <feMerge>
                <feMergeNode in="b" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* ── Ambient: the illumination behind the core, its orbit hairlines ── */}
          <circle
            cx={CO.x}
            cy={CO.y}
            r={150}
            fill="url(#sv-illum)"
            className={cn(!still && 'sv-core-lit')}
            style={{ animationDelay: at(18), opacity: still ? 0.6 : undefined }}
          />
          <circle cx={CO.x} cy={CO.y} r={ORBIT_R + 24} fill="none" stroke={T.orbit} strokeWidth="1" />
          <g className={cn(!still && 'sv-spin')} style={coreOrigin}>
            <circle cx={CO.x} cy={CO.y} r={ORBIT_R} fill="none" stroke={T.orbit} strokeWidth="1" strokeDasharray="3 8" />
            {[40, 200].map((deg) => (
              <circle
                key={deg}
                cx={f(CO.x + ORBIT_R * Math.cos((deg * Math.PI) / 180))}
                cy={f(CO.y + ORBIT_R * Math.sin((deg * Math.PI) / 180))}
                r="2"
                fill={T.particle}
                opacity="0.7"
              />
            ))}
          </g>

          {/* ── Connections: base line, ambient current, windowed packets ── */}
          <g fill="none" strokeLinecap="round">
            {EDGES.map((e) => {
              const on = active !== null && e.touches.includes(active as NodeId)
              const dim = active !== null && !on
              return (
                <g key={e.id} style={{ opacity: dim ? 0.35 : 1, transition: 'opacity 400ms' }}>
                  <motion.path
                    d={e.d}
                    stroke={T.base}
                    strokeOpacity={on ? 1 : T.baseOpacity}
                    strokeWidth={on ? 2.2 : 1.4}
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 0.9, delay: e.draw, ease: DRAW_EASE }}
                  />
                  {!still && e.flow && (
                    <motion.path d={e.d} stroke={T.flow} strokeWidth="1" strokeOpacity={on ? 0.7 : T.flowOpacity} className="sv-flow" {...MOTION_IN} />
                  )}
                  {!still &&
                    e.packets.map((p) => {
                      const comet = p.cls === 'sv-comet'
                      return (
                        <motion.path
                          key={`${p.cls}-${p.at}`}
                          d={e.d}
                          pathLength={400}
                          stroke={T.particle}
                          strokeWidth={comet ? (on ? 3 : 2.2) : on ? 4 : 3.2}
                          filter={comet ? 'url(#sv-glow)' : undefined}
                          className={p.cls}
                          style={{ animationDelay: at(p.at) }}
                          {...MOTION_IN}
                        />
                      )
                    })}
                </g>
              )
            })}
          </g>

          {/* ── The core — Intelligence ─────────────────────────────────── */}
          <motion.g initial={{ scale: 0.7, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ ...spring, delay: 0.2 }} style={origin}>
            <circle cx={CO.x} cy={CO.y} r={CORE_R} fill="url(#sv-core)" stroke={T.coreEdge} strokeWidth="1.5" />
            {/* The system is us: the full lockup on the core's own ground */}
            <svg x={CO.x - 58} y={CO.y - 38} width={116} height={116 * LOCKUP_RATIO} viewBox={LOCKUP_VIEWBOX} overflow="visible" aria-hidden>
              <LogoLockup word={dark ? '#FFFFFF' : '#14202e'} rule="#2374e0" />
            </svg>
            <text
              x={CO.x}
              y={CO.y + 36}
              textAnchor="middle"
              fill={T.label}
              className="font-mono [font-size:14px] sm:[font-size:9.5px]"
              style={{ letterSpacing: '0.2em', fontWeight: 500 }}
            >
              INTELLIGENCE
            </text>
            <text x={CO.x} y={CO.y + ORBIT_R + 18} textAnchor="middle" fill={T.sub} className="hidden font-mono sm:block" style={{ fontSize: 7.5, letterSpacing: '0.18em' }}>
              OUR SYSTEM
            </text>
          </motion.g>

          {/* ── Nodes: the field, the four systems, the outcome ──────────── */}
          {NODES.map((n, i) => {
            const { x, y } = P[n.id]
            const on = active === n.id
            const dim = active !== null && !on && n.role === 'domain'
            const outcome = n.role === 'outcome'
            const ly = n.side === 'top' ? y - n.r - 24 : y + n.r + 24
            const nodeOrigin = { transformOrigin: `${x}px ${y}px` } as const
            return (
              <motion.g
                key={n.id}
                initial={{ scale: 0.6, opacity: 0 }}
                animate={{ scale: 1, opacity: dim ? 0.45 : 1 }}
                transition={{ ...spring, delay: 0.3 + i * 0.16 }}
                style={origin}
              >
                {outcome && (
                  /* The gold ground that rises under Transformation as it fires */
                  <circle
                    cx={x}
                    cy={y}
                    r={n.r + 26}
                    fill="url(#sv-gold)"
                    className={cn(!still && 'sv-fire-halo')}
                    style={{ animationDelay: at(n.pulseAt), opacity: still ? 0.5 : undefined }}
                  />
                )}
                {/* Halo ring — lights up as a packet lands (gold for the outcome) */}
                <circle
                  cx={x}
                  cy={y}
                  r={n.r + 9}
                  fill="none"
                  stroke={outcome ? T.gold : T.nodeEdge}
                  strokeWidth={on ? 1.6 : outcome ? 1.2 : 1}
                  className={cn(!still && !on && (outcome ? 'sv-fire' : 'sv-pulse'))}
                  style={{
                    ...nodeOrigin,
                    animationDelay: at(n.pulseAt),
                    opacity: on ? 0.9 : still ? (outcome ? 0.45 : 0.5) : undefined,
                  }}
                />
                <circle cx={x} cy={y} r={n.r} fill={T.nodeFill} stroke={on ? T.flow : T.nodeEdge} strokeWidth={on ? 2 : 1.25} />
                <n.Icon x={x - 11} y={y - 11} width={22} height={22} color={outcome ? T.gold : T.icon} strokeWidth={1.75} aria-hidden />
                <text x={x} y={ly} textAnchor="middle" fill={T.label} className="font-mono [font-size:19px] sm:[font-size:12.5px]" style={{ letterSpacing: '0.2em', fontWeight: 500 }}>
                  {n.label.toUpperCase()}
                </text>
                {n.tag && (
                  <text x={x} y={ly + 16} textAnchor="middle" fill={T.sub} className="hidden font-mono sm:block" style={{ fontSize: 8, letterSpacing: '0.14em' }}>
                    {n.tag.toUpperCase()}
                  </text>
                )}
              </motion.g>
            )
          })}
        </svg>

        {/* Accessible hit areas over the four system nodes */}
        {DOMAINS.map((n) => {
          const d = domains.find((x) => x.id === n.id)!
          const { x, y } = P[n.id]
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
              style={{ left: `${(x / VB.w) * 100}%`, top: `${(y / VB.h) * 100}%` }}
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
