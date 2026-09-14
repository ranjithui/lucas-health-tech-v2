import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import { Pause, Play, ChevronDown } from 'lucide-react'
import { Button } from '../../components/ui/Button'
import { stagger, wordReveal, fadeUp } from '../../animations/variants'
import { usePrefersReducedMotion, useLowPower, useIsMobile } from '../../hooks/useMediaQuery'
import { useI18n } from '../../i18n/context'
import { cn } from '../../utils/cn'

/**
 * Version 3 hero: full-bleed local video behind the executive statement.
 *
 * The clip (a clinician working on a tablet) lives in /public/video and is
 * served from the site itself — no third-party player, no tracking. Two
 * encodes: 540p for desktop, 360p for phones and save-data connections.
 * Under reduced motion or on low-power devices the video never starts and the
 * poster gradient carries the section instead.
 *
 * The ground is always navy, in both themes — video reads best under a dark
 * wash — so the header knows to start with light type on this route.
 */
const SOURCES = {
  desktop: '/video/hero-doctor-tablet-540.mp4',
  mobile: '/video/hero-doctor-tablet-360.mp4',
} as const

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const video = useRef<HTMLVideoElement>(null)
  const reduced = usePrefersReducedMotion()
  const lowPower = useLowPower()
  const mobile = useIsMobile()
  const { ui, content } = useI18n()
  const [playing, setPlaying] = useState(false)
  const [ready, setReady] = useState(false)

  const autoplay = !reduced && !lowPower
  const headline = content.positioning.headline.split(' ')

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : 80])
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0])
  const videoScale = useTransform(scrollYProgress, [0, 1], [1, reduced ? 1 : 1.08])

  useEffect(() => {
    const el = video.current
    if (!el) return
    const onPlay = () => setPlaying(true)
    const onPause = () => setPlaying(false)
    el.addEventListener('play', onPlay)
    el.addEventListener('pause', onPause)
    if (autoplay) el.play().catch(() => setPlaying(false))
    return () => {
      el.removeEventListener('play', onPlay)
      el.removeEventListener('pause', onPause)
    }
  }, [autoplay])

  const toggle = () => {
    const el = video.current
    if (!el) return
    if (el.paused) el.play().catch(() => {})
    else el.pause()
  }

  return (
    <section ref={ref} id="hero" className="relative isolate overflow-hidden bg-ink-950 text-white">
      {/* ── Video ground ─────────────────────────────────────────────── */}
      <motion.div aria-hidden className="absolute inset-0" style={{ scale: videoScale }}>
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(60% 70% at 70% 40%, rgba(31, 78, 140, 0.45), transparent 70%), linear-gradient(160deg, #0f1e30 0%, #0a1420 60%, #06101b 100%)',
          }}
        />
        <video
          ref={video}
          muted
          loop
          playsInline
          preload={autoplay ? 'auto' : 'metadata'}
          onLoadedData={() => setReady(true)}
          aria-label={ui.hero.videoLabel}
          className={cn('absolute inset-0 h-full w-full object-cover transition-opacity duration-[1200ms] ease-out', ready && (playing || !autoplay) ? 'opacity-100' : 'opacity-0')}
          src={mobile ? SOURCES.mobile : SOURCES.desktop}
        />
      </motion.div>

      {/* Navy wash so white type holds 4.5:1 over any frame; heavier on the text side. */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(90deg, rgba(10, 20, 32, 0.92) 0%, rgba(10, 20, 32, 0.78) 42%, rgba(10, 20, 32, 0.45) 100%)',
        }}
      />
      <div aria-hidden className="absolute inset-0 grid-bg opacity-40" />
      <div aria-hidden className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-paper-100 to-transparent" />

      {/* ── Copy ─────────────────────────────────────────────────────── */}
      <div className="container-x relative flex min-h-[88svh] flex-col justify-center pb-24 pt-32 md:min-h-[92svh] md:pb-28 md:pt-36">
        <motion.div style={{ y, opacity }} className="relative z-10 max-w-3xl">
          <motion.div variants={stagger(0.05, 0.08)} initial="hidden" animate="show">
            <motion.div variants={fadeUp} className="mb-8 font-mono text-[10.5px] uppercase tracking-[0.24em] text-accent-300">
              {ui.hero.eyebrow}
            </motion.div>

            <h1 className="display-xl text-balance text-white">
              {headline.map((w, i) => (
                <motion.span key={`${w}-${i}`} variants={wordReveal} className="inline-block whitespace-pre" style={{ transformOrigin: 'bottom' }}>
                  {w === content.positioning.accentWord ? <em className="not-italic text-accent-300">{w}</em> : w}{' '}
                </motion.span>
              ))}
            </h1>

            <motion.p variants={fadeUp} className="mt-8 max-w-xl text-[17px] leading-[1.65] text-muted-dark md:text-[19px]">
              {content.positioning.supporting}
            </motion.p>

            <motion.div variants={fadeUp} className="mt-11 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button to="/solutions" size="lg" icon variant="inverse">
                {ui.common.exploreCapabilities}
              </Button>
              <Button to="/contact" size="lg" variant="outline" className="text-white">
                {ui.common.startConversation}
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* ── Chrome: play/pause and scroll cue ─────────────────────── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute inset-x-6 bottom-8 z-10 flex items-center justify-between sm:inset-x-8 lg:inset-x-12"
        >
          <button
            type="button"
            onClick={toggle}
            aria-pressed={playing}
            aria-label={playing ? ui.hero.pause : ui.hero.play}
            className="inline-flex h-10 items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.06] px-4 font-mono text-[10.5px] uppercase tracking-[0.2em] text-white/80 backdrop-blur-md transition-colors hover:border-white/30 hover:text-white"
          >
            {playing ? <Pause className="h-3.5 w-3.5" aria-hidden /> : <Play className="h-3.5 w-3.5" aria-hidden />}
            <span className="hidden sm:inline">{playing ? ui.hero.pauseShort : ui.hero.playShort}</span>
          </button>

          <a href="#positioning" className="group inline-flex items-center gap-2 font-mono text-[10.5px] uppercase tracking-[0.2em] text-white/60 transition-colors hover:text-white">
            {ui.hero.scroll}
            <ChevronDown className={cn('h-4 w-4', !reduced && 'animate-drift')} aria-hidden />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
