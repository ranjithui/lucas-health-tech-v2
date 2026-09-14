import { lazy, Suspense } from 'react'
import { Seo } from '../components/seo/Seo'
import { Hero } from '../sections/home/Hero'
import { Positioning } from '../sections/home/Positioning'
import { Capabilities } from '../sections/home/Capabilities'
import { Proof } from '../sections/home/Proof'
import { company } from '../data/company'
import { useI18n } from '../i18n/useI18n'

/** Below the fold and non-critical to the first impression — loaded on demand. */
const WhoWeServe = lazy(() => import('../sections/home/WhoWeServe').then((m) => ({ default: m.WhoWeServe })))
const Trust = lazy(() => import('../sections/home/Trust').then((m) => ({ default: m.Trust })))
const ClosingCta = lazy(() => import('../sections/ClosingCta').then((m) => ({ default: m.ClosingCta })))

const Skeleton = () => <div className="min-h-[50vh] bg-paper-100" aria-hidden />

/**
 * Homepage = hook. Seven sections, nothing more:
 * Hero (video) → Positioning (+ system flow) → Capabilities → Proof → Who we serve → CTA → Trust.
 * The executive reference closes the page, directly above the footer.
 * Every detail lives one click away.
 */
export default function Home() {
  const { content } = useI18n()
  return (
    <>
      <Seo
        description={content.positioning.supporting}
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: company.name,
          url: `${company.url}/`,
          description: content.positioning.supporting,
        }}
      />
      <Hero />
      <Positioning />
      <Capabilities />
      <Proof />
      <Suspense fallback={<Skeleton />}>
        <WhoWeServe />
      </Suspense>
      <Suspense fallback={<Skeleton />}>
        <ClosingCta />
      </Suspense>
      <Suspense fallback={<Skeleton />}>
        <Trust />
      </Suspense>
    </>
  )
}
