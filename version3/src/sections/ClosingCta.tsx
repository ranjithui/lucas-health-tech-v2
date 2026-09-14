import { motion } from 'motion/react'
import { Button } from '../components/ui/Button'
import { useI18n } from '../i18n/useI18n'
import { fadeUp, stagger, viewportOnce } from '../animations/variants'

/**
 * One heading, one line, one action. No form on the homepage.
 *
 * Sits on the brand azure field, same as the footer. Everything on it is pure
 * white: the dimmed-white scale that works on the navy sections falls to under
 * 3:1 against this mid-tone blue.
 */
export function ClosingCta() {
  const { ui, content } = useI18n()
  const { company, positioning } = content
  return (
    <section className="relative overflow-hidden bg-field pb-16 pt-20 text-white md:pb-20 md:pt-28 dark:border-t dark:border-white/[0.08]">
      <div aria-hidden className="absolute inset-0 grid-bg opacity-50" />
      <div aria-hidden className="absolute inset-0 dark:hidden" style={{ background: 'radial-gradient(60% 60% at 50% 100%, rgba(255, 255, 255, 0.14), transparent 65%)' }} />
      <div aria-hidden className="absolute inset-0 hidden dark:block" style={{ background: 'radial-gradient(60% 60% at 50% 100%, rgba(31, 78, 140, 0.16), transparent 65%)' }} />
      <motion.div variants={stagger(0.1)} initial="hidden" whileInView="show" viewport={viewportOnce} className="container-x relative text-center">
        <motion.h2 variants={fadeUp} className="mx-auto max-w-3xl text-balance font-display text-[clamp(2.2rem,4.8vw,3.8rem)] leading-[1.06] tracking-[-0.025em]">
          {positioning.ctaHeading}
        </motion.h2>
        <motion.p variants={fadeUp} className="mx-auto mt-8 max-w-xl text-pretty text-[17px] leading-[1.65] text-white">
          {positioning.ctaSupporting}
        </motion.p>
        <motion.div variants={fadeUp} className="mt-12">
          <Button to="/contact" size="lg" icon variant="inverse">
            {ui.common.startConversation}
          </Button>
        </motion.div>
        <motion.p variants={fadeUp} className="mt-10 font-mono text-[10.5px] uppercase tracking-[0.2em] text-white/80">
          <a href={company.phoneHref} className="underline-offset-4 transition hover:underline">
            {company.phone}
          </a>
          <span className="mx-3" aria-hidden>
            ·
          </span>
          {company.locationShort}
        </motion.p>
      </motion.div>
    </section>
  )
}
