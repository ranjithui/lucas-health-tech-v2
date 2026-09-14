import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'motion/react'
import { ArrowRight } from 'lucide-react'
import { solutions } from '../../data/solutions'
import { Eyebrow, Explore } from '../../components/ui/Primitives'
import { useIsMobile } from '../../hooks/useMediaQuery'
import { fadeUp, stagger, viewportOnce } from '../../animations/variants'
import { cn } from '../../utils/cn'

/**
 * Capability explorer. Names on the left, a dynamic panel on the right.
 * Titles and one-liners only — every description lives on the Solutions page.
 *
 * On the azure brand field, same as the CTA and footer. Nothing here can use an
 * accent blue: against #2876E7 accent-400 measures 1.02:1 and accent-300 1.66:1,
 * so emphasis is carried by pure white against white at 65–80%.
 */
export function Capabilities() {
  const [activeId, setActiveId] = useState(solutions[0].id)
  const mobile = useIsMobile()
  const active = solutions.find((s) => s.id === activeId) ?? solutions[0]

  return (
    <section id="capabilities" className="relative bg-field py-16 text-white md:py-24">
      <div aria-hidden className="absolute inset-0 grid-bg opacity-40" />
      <div className="container-x relative">
        <motion.div variants={stagger(0.1)} initial="hidden" whileInView="show" viewport={viewportOnce} className="max-w-2xl">
          <motion.div variants={fadeUp}>
            <Eyebrow onAccent>What we do</Eyebrow>
          </motion.div>
          <motion.h2 variants={fadeUp} className="display-lg mt-7 text-balance text-white">
            Five capabilities, governed as one operating discipline.
          </motion.h2>
        </motion.div>

        {mobile ? (
          <ul className="mt-14 divide-y divide-white/25 border-y border-white/25">
            {solutions.map((s) => (
              <li key={s.id}>
                <Link to={`/solutions/${s.id}`} className="flex items-start justify-between gap-6 py-7">
                  <span>
                    <span className="font-mono text-[10.5px] tracking-[0.2em] text-white/80">{s.index}</span>
                    <span className="mt-2 block font-display text-[22px] leading-tight text-white">{s.title}</span>
                    <span className="mt-2 block text-[14.5px] leading-[1.55] text-white/90">{s.short}</span>
                  </span>
                  <ArrowRight className="mt-8 h-5 w-5 shrink-0 text-white" aria-hidden />
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <div className="mt-16 grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
            {/* Capability list */}
            <ul className="border-t border-white/25">
              {solutions.map((s) => {
                const on = s.id === activeId
                return (
                  <li key={s.id} className="border-b border-white/25">
                    <Link
                      to={`/solutions/${s.id}`}
                      onMouseEnter={() => setActiveId(s.id)}
                      onFocus={() => setActiveId(s.id)}
                      className="group flex items-center justify-between gap-8 py-6 transition-colors duration-300"
                    >
                      <span className="flex items-baseline gap-6">
                        <span className={cn('font-mono text-[10.5px] tracking-[0.2em] transition-colors duration-300', on ? 'text-white' : 'text-white/70')}>
                          {s.index}
                        </span>
                        <span
                          className={cn(
                            'font-display text-[clamp(1.4rem,2.2vw,1.85rem)] leading-tight transition-all duration-500 ease-[cubic-bezier(.16,1,.3,1)]',
                            on ? 'translate-x-1 text-white' : 'text-white/75',
                          )}
                        >
                          {s.title}
                        </span>
                      </span>
                      <ArrowRight
                        className={cn(
                          'h-4 w-4 shrink-0 transition-all duration-500',
                          on ? 'translate-x-0 text-white opacity-100' : '-translate-x-2 opacity-0',
                        )}
                        aria-hidden
                      />
                    </Link>
                  </li>
                )
              })}
            </ul>

            {/* Dynamic panel */}
            <div className="relative lg:sticky lg:top-32 lg:self-start">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="card-on-accent relative overflow-hidden"
                >
                  <img
                    src={active.image.src}
                    alt={active.image.alt}
                    loading="lazy"
                    decoding="async"
                    width={600}
                    height={338}
                    className="aspect-[16/9] w-full object-cover"
                  />
                  <div aria-hidden className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-accent-500/10 blur-3xl" />
                  <div className="relative p-9">
                    <span className="font-display text-[64px] leading-none text-text/[0.10]">{active.index}</span>
                    <h3 className="-mt-8 font-display text-2xl text-text">{active.fullTitle}</h3>
                    <p className="mt-4 text-[15.5px] leading-[1.6] text-muted">{active.short}</p>

                    <ol className="mt-9 space-y-3">
                      {active.workflow.map((w, i) => (
                        <motion.li
                          key={w.label}
                          initial={{ opacity: 0, x: -8 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.08 + i * 0.06, duration: 0.4 }}
                          className="flex items-center gap-4"
                        >
                          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" aria-hidden />
                          <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">{w.label}</span>
                        </motion.li>
                      ))}
                    </ol>

                    <div className="mt-10 border-t border-paper-300 pt-6">
                      <Explore to={`/solutions/${active.id}`} />
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
