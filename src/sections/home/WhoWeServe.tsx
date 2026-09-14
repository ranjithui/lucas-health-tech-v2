import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { ArrowRight } from 'lucide-react'
import { industries } from '../../data/industries'
import { Eyebrow } from '../../components/ui/Primitives'
import { InteractiveCard } from '../../components/ui/InteractiveCard'
import { fadeUp, stagger, viewportOnce } from '../../animations/variants'

/** Four decision-maker groups. One line each — depth lives on Industries. */
export function WhoWeServe() {
  return (
    <section className="bg-mist-100 py-20 md:py-28">
      <div className="container-x">
        <motion.div variants={stagger(0.1)} initial="hidden" whileInView="show" viewport={viewportOnce} className="max-w-2xl">
          <motion.div variants={fadeUp}>
            <Eyebrow>Who we serve</Eyebrow>
          </motion.div>
          <motion.h2 variants={fadeUp} className="display-lg mt-7 text-balance">
            Built for healthcare decision-makers.
          </motion.h2>
        </motion.div>

        <motion.ul
          variants={stagger(0.08, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 grid gap-5 sm:grid-cols-2"
        >
          {industries.map((ind) => (
            <InteractiveCard key={ind.id} as="li" className="panel">
              <Link to={`/industries/${ind.id}`} className="flex h-full flex-col justify-between gap-10 px-7 py-10 sm:px-9 sm:py-12">
                <div>
                  <h3 className="font-display text-[24px] leading-tight text-text transition-colors duration-300 group-hover/card:text-accent-700">
                    {ind.title}
                  </h3>
                  <p className="mt-3 max-w-sm text-[15px] leading-[1.6] text-muted">{ind.short}</p>
                </div>
                <span className="inline-flex items-center gap-2 font-mono text-[10.5px] uppercase tracking-[0.18em] text-accent-600">
                  Explore
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/card:translate-x-1.5" aria-hidden />
                </span>
              </Link>
            </InteractiveCard>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}
