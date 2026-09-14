import { Link } from 'react-router-dom'
import { LinkedInIcon as Linkedin } from '../ui/LinkedInIcon'
import { Logo } from './Logo'
import { useI18n } from '../../i18n/context'

/**
 * Wayfinding only — the CTA is its own section above it.
 *
 * On the brand azure field. Links are pure white (4.34:1, the most this ground
 * allows) and hover is an underline rather than a brightness change, since
 * there is no brighter white to go to. The tiny mono labels sit at white/80.
 */
export function Footer() {
  const { ui, content, t } = useI18n()
  const { company, solutions, industries } = content

  const columns = [
    { heading: ui.footer.solutions, links: solutions.map((s) => ({ label: s.title, to: `/solutions/${s.id}` })) },
    { heading: ui.footer.industries, links: industries.map((i) => ({ label: i.title, to: `/industries/${i.id}` })) },
    {
      heading: ui.footer.company,
      links: [
        { label: ui.nav.about, to: '/about' },
        { label: ui.nav.caseStudies, to: '/case-studies' },
        { label: ui.nav.insights, to: '/insights' },
        { label: ui.nav.contact, to: '/contact' },
      ],
    },
  ]

  return (
    <footer className="border-t border-white/20 bg-field text-white">
      <div className="container-x">
        <div className="grid gap-14 border-b border-white/30 pb-16 pt-16 md:grid-cols-[1.3fr_repeat(3,1fr)] md:gap-10">
          <div>
            <Logo onAccent className="h-14" />
            <p className="mt-6 max-w-xs text-[14.5px] leading-[1.6] text-white">{ui.footer.tagline}</p>
            <a
              href={company.linkedin}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 font-mono text-[10.5px] uppercase tracking-[0.18em] text-white underline-offset-4 transition hover:underline"
            >
              <Linkedin className="h-3.5 w-3.5" aria-hidden /> {ui.footer.linkedin}
            </a>
          </div>

          {columns.map((col) => (
            <nav key={col.heading} aria-label={col.heading}>
              <h2 className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-white/80">{col.heading}</h2>
              <ul className="mt-5 space-y-3">
                {col.links.map((l) => (
                  <li key={l.to}>
                    <Link to={l.to} className="text-[14.5px] text-white underline-offset-4 transition hover:underline">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="grid gap-6 border-b border-white/30 py-10 text-[14px] text-white sm:grid-cols-3">
          <div>
            <span className="block font-mono text-[10.5px] uppercase tracking-[0.2em] text-white/80">{ui.footer.phone}</span>
            <a href={company.phoneHref} className="mt-2 block underline-offset-4 transition hover:underline">
              {company.phone}
            </a>
          </div>
          <div>
            <span className="block font-mono text-[10.5px] uppercase tracking-[0.2em] text-white/80">{ui.footer.location}</span>
            <a href={company.mapsHref} target="_blank" rel="noreferrer" className="group mt-2 flex items-center gap-3 underline-offset-4 transition hover:underline">
              {/* Mini map, pinned on Concord. Opens the full map in Google Maps. */}
              <img
                src="/images/map-concord-mini.webp"
                alt=""
                loading="lazy"
                decoding="async"
                width={120}
                height={80}
                className="h-14 w-[84px] shrink-0 rounded-lg border border-white/40 object-cover shadow-soft transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-[1.04]"
              />
              <span>{company.location}</span>
            </a>
          </div>
          <div>
            <span className="block font-mono text-[10.5px] uppercase tracking-[0.2em] text-white/80">{ui.footer.hours}</span>
            <span className="mt-2 block">{company.hours}</span>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-4 py-8 text-[12.5px] text-white/80 sm:flex-row sm:items-center">
          <p>{t(ui.footer.rights, { year: new Date().getFullYear(), name: company.name })}</p>
          <div className="flex gap-8">
            <Link to="/privacy-policy" className="underline-offset-4 transition hover:underline">
              {ui.footer.privacy}
            </Link>
            <Link to="/terms" className="underline-offset-4 transition hover:underline">
              {ui.footer.terms}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
