import { lazy, Suspense } from 'react'
import { Seo } from '../components/seo/Seo'
import { Hero } from '../sections/home/Hero'
import { Positioning } from '../sections/home/Positioning'
import { Capabilities } from '../sections/home/Capabilities'
import { Proof } from '../sections/home/Proof'
import { company, positioningV2 } from '../data/company'

/** Below the fold and non-critical to the first impression — loaded on demand. */
const WhoWeServe = lazy(() => import('../sections/home/WhoWeServe').then((m) => ({ default: m.WhoWeServe })))
const Trust = lazy(() => import('../sections/home/Trust').then((m) => ({ default: m.Trust })))
const ClosingCta = lazy(() => import('../sections/ClosingCta').then((m) => ({ default: m.ClosingCta })))

const Skeleton = () => <div className="min-h-[50vh] bg-paper-100" aria-hidden />

/**
 * Homepage = hook. Seven sections, nothing more:
 * Hero → Positioning → Capabilities → Proof → Who we serve → CTA → Trust.
 * The executive reference closes the page, directly above the footer.
 * Every detail lives one click away.
 */
export default function Home() {
  return (
    <>
      <Seo
        description={positioningV2.supporting}
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: company.name,
          url: `${company.url}/`,
          description: positioningV2.supporting,
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
