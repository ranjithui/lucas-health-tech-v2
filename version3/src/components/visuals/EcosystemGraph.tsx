import { useMemo, useRef, useState } from 'react'
import { AnimatePresence, motion, useInView } from 'motion/react'
import { ecosystemLinks } from '../../data/ecosystem'
import { useI18n } from '../../i18n/useI18n'
import { usePrefersReducedMotion } from '../../hooks/useMediaQuery'
import { cn } from '../../utils/cn'

const W = 1000
const H = 420

/**
 * Interactive SVG ecosystem: Patients → Providers → Technology → Data → Operations → Outcomes.
 *
 * Follows the page theme: every colour is a `var(--color-*)` token so the graph
 * re-skins itself when the theme flips. Idle links are hairlines, the active
 * path runs brand blue → teal, and unrelated nodes dim through opacity only.
 * Selection is held by id so it survives a language switch.
 */
export function EcosystemGraph() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.35 })
  const reduced = usePrefersReducedMotion()
  const { ui, content } = useI18n()
  const nodes = content.ecosystemNodes
  const [selectedId, setSelectedId] = useState(nodes[2].id)
  const selected = nodes.find((n) => n.id === selectedId) ?? nodes[2]

  const pos = useMemo(() => Object.fromEntries(nodes.map((n) => [n.id, { x: (n.x / 100) * W, y: (n.y / 100) * H }])), [nodes])

  const linked = new Set(ecosystemLinks.filter(([a, b]) => a === selected.id || b === selected.id).flatMap(([a, b]) => [a, b]))

  return (
    <div ref={ref} className="grid gap-8 lg:grid-cols-[1.5fr_1fr] lg:items-center">
      <p className="sr-only">{ui.sections.ecosystem.sr}</p>
      <div className="relative hidden overflow-hidden rounded-2xl border border-paper-300 bg-surface p-4 shadow-soft grid-bg-light sm:block sm:p-6">
        <svg viewBox={`0 0 ${W} ${H}`} className="h-auto w-full" role="group" aria-label={ui.sections.ecosystem.mapAria}>
          <defs>
            <linearGradient id="eco-link" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0" style={{ stopColor: 'var(--color-accent-500)', stopOpacity: 0.95 }} />
              <stop offset="1" style={{ stopColor: 'var(--color-accent-400)', stopOpacity: 0.85 }} />
            </linearGradient>
            <filter id="eco-glow">
              <feGaussianBlur stdDeviation="6" result="b" />
              <feMerge>
                <feMergeNode in="b" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          {ecosystemLinks.map(([a, b], i) => {
            const p1 = pos[a]
            const p2 = pos[b]
            const mx = (p1.x + p2.x) / 2
            const my = (p1.y + p2.y) / 2 - 40
            const d = `M ${p1.x} ${p1.y} Q ${mx} ${my} ${p2.x} ${p2.y}`
            const isActive = a === selected.id || b === selected.id
            return (
              <g key={`${a}-${b}`}>
                <motion.path
                  d={d}
                  fill="none"
                  stroke={isActive ? 'url(#eco-link)' : 'var(--color-paper-300)'}
                  strokeWidth={isActive ? 2.2 : 1.2}
                  strokeLinecap="round"
                  initial={reduced ? { pathLength: 1 } : { pathLength: 0, opacity: 0 }}
                  animate={inView ? { pathLength: 1, opacity: 1 } : {}}
                  transition={{ duration: 1.1, delay: 0.12 * i, ease: [0.16, 1, 0.3, 1] }}
                />
                {isActive && !reduced && (
                  <circle r={4} fill="var(--color-accent-400)" filter="url(#eco-glow)">
                    <animateMotion dur={`${2.4 + i * 0.3}s`} repeatCount="indefinite" path={d} />
                  </circle>
                )}
              </g>
            )
          })}
          {nodes.map((n, i) => {
            const p = pos[n.id]
            const isSel = n.id === selected.id
            const dim = !isSel && !linked.has(n.id)
            return (
              <motion.g
                key={n.id}
                initial={reduced ? {} : { opacity: 0, scale: 0.6 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * i + 0.3, ease: [0.16, 1, 0.3, 1] }}
                style={{ transformOrigin: `${p.x}px ${p.y}px` }}
                className="cursor-pointer outline-none"
                role="button"
                tabIndex={0}
                aria-pressed={isSel}
                aria-label={`${n.label}: ${n.short}`}
                onClick={() => setSelectedId(n.id)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    setSelectedId(n.id)
                  }
                }}
              >
                {isSel && (
                  <circle cx={p.x} cy={p.y} r={30} fill="none" stroke="var(--color-accent-500)" strokeOpacity={0.5}>
                    {!reduced && <animate attributeName="r" values="22;40" dur="1.8s" repeatCount="indefinite" />}
                    {!reduced && <animate attributeName="stroke-opacity" values="0.6;0" dur="1.8s" repeatCount="indefinite" />}
                  </circle>
                )}
                <circle cx={p.x} cy={p.y} r={22} fill={isSel ? 'var(--color-accent-500)' : 'var(--color-surface)'} stroke={isSel ? 'var(--color-accent-400)' : 'var(--color-accent-500)'} strokeWidth={2} opacity={dim ? 0.45 : 1} />
                <text x={p.x} y={p.y + 4} textAnchor="middle" fontSize={11} fontFamily="ui-monospace, monospace" fill={isSel ? '#fff' : 'var(--color-accent-600)'} opacity={dim ? 0.6 : 1}>
                  {String(i + 1).padStart(2, '0')}
                </text>
                <text x={p.x} y={p.y + 44} textAnchor="middle" fontSize={13} fontWeight={600} fontFamily="Manrope, Inter, sans-serif" fill="var(--color-text)" opacity={dim ? 0.5 : 1}>
                  {n.label}
                </text>
              </motion.g>
            )
          })}
        </svg>
      </div>

      <div className="relative min-h-[260px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={selected.id}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-2xl border border-paper-300 bg-surface p-6 shadow-soft sm:p-8"
            aria-live="polite"
          >
            <div className="eyebrow mb-3">{selected.short}</div>
            <h3 className="font-display text-2xl text-text">{selected.label}</h3>
            <p className="mt-3 text-[15px] leading-relaxed text-muted">{selected.description}</p>
            <ul className="mt-5 space-y-2">
              {selected.capabilities.map((c) => (
                <li key={c} className="flex items-start gap-2.5 text-sm text-text/85">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" aria-hidden />
                  {c}
                </li>
              ))}
            </ul>
          </motion.div>
        </AnimatePresence>
        <div className="mt-4 flex flex-wrap gap-2 sm:mt-4" role="tablist" aria-label={ui.sections.ecosystem.nodesAria}>
          {nodes.map((n) => (
            <button
              key={n.id}
              role="tab"
              aria-selected={n.id === selected.id}
              onClick={() => setSelectedId(n.id)}
              className={cn(
                'rounded-full border px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] transition',
                n.id === selected.id ? 'border-accent-500 bg-accent-500/10 text-accent-600' : 'border-paper-300 text-muted hover:border-accent-500/40 hover:text-text',
              )}
            >
              {n.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
