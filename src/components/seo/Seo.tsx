import { useLocation } from 'react-router-dom'
import { company, positioningV2 } from '../../data/company'

interface SeoProps {
  title?: string
  description?: string
  type?: 'website' | 'article'
  image?: string
  jsonLd?: Record<string, unknown> | Record<string, unknown>[]
  noIndex?: boolean
}

/**
 * React 19 hoists <title>, <meta> and <link> into <head> automatically.
 * This component sets per-route metadata, Open Graph, canonical, and JSON-LD.
 */
export function Seo({ title, description, type = 'website', image, jsonLd, noIndex }: SeoProps) {
  const { pathname } = useLocation()
  const fullTitle = title ? `${title} | ${company.name}` : `${company.name} | ${positioningV2.headline.replace(/\.$/, '')}`
  const desc = description ?? positioningV2.supporting
  const canonical = `${company.url}${pathname === '/' ? '/' : pathname.replace(/\/$/, '')}`
  const img = image ?? `${company.url}/og-image.png`

  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <link rel="canonical" href={canonical} />
      {noIndex && <meta name="robots" content="noindex,nofollow" />}
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={company.name} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={img} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image" content={img} />
      {jsonLd && <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>}
    </>
  )
}
