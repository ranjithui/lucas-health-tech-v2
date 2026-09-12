import { useEffect } from 'react'
import { useLocation, useOutlet } from 'react-router-dom'
import { AnimatePresence, motion } from 'motion/react'
import { Header } from '../components/layout/Header'
import { Footer } from '../components/layout/Footer'
import { ScrollProgress } from '../components/layout/ScrollProgress'
import { usePrefersReducedMotion } from '../hooks/useMediaQuery'

/** Routes that open on a dark hero, so the header can start transparent. */
const darkHeroRoutes = ['/', '/solutions', '/industries', '/about', '/insights', '/case-studies', '/contact']

export function RootLayout() {
  const { pathname, hash } = useLocation()
  const outlet = useOutlet()
  const reduced = usePrefersReducedMotion()
  const overHero = darkHeroRoutes.includes(pathname) || pathname.startsWith('/insights/') || pathname.startsWith('/solutions/') || pathname.startsWith('/industries/') || pathname.startsWith('/case-studies/')

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1))
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 80)
        return
      }
    }
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
  }, [pathname, hash])

  return (
    <>
      <ScrollProgress />
      <Header overHero={overHero} />
      <main id="main">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={pathname}
            initial={reduced ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduced ? undefined : { opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
          >
            {outlet}
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </>
  )
}
