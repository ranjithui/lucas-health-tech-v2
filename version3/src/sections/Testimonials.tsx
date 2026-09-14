import { useState } from 'react'
import { motion } from 'motion/react'
import { Section, Eyebrow } from '../components/ui/Primitives'
import { testimonials, type Testimonial } from '../data/testimonials'
import { fadeUp, stagger, viewportOnce } from '../animations/variants'

/** Initials for the monogram shown when a reference has no headshot on file. */
function initials(name: string) {
  return name
    .replace(/,.*$/, '')
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase()
}

/** Circular headshot that degrades to an initials monogram if the file is missing. */
function Avatar({ person }: { person: Testimonial }) {
  const [failed, setFailed] = useState(false)
  const showPhoto = Boolean(person.photo) && !failed

  return (
    <div className="size-11 shrink-0 overflow-hidden rounded-full border border-paper-300 bg-paper-200">
      {showPhoto ? (
        <img
          src={person.photo}
          alt=""
          loading="lazy"
          decoding="async"
          width={44}
          height={44}
          onError={() => setFailed(true)}
          className="size-full object-cover object-top"
        />
      ) : (
        <span className="flex size-full items-center justify-center font-mono text-[11px] tracking-[0.08em] text-muted">
          {initials(person.name)}
        </span>
      )}
    </div>
  )
}

/** Executive references, set as quiet editorial columns rather than cards. */
export function Testimonials({ limit = 8 }: { limit?: number }) {
  const items = testimonials.slice(0, limit)
  return (
    <Section id="references">
      <div className="container-x">
        <Eyebrow>Executive references</Eyebrow>
        <h2 className="display-lg mt-7 max-w-2xl text-balance">What leaders in healthcare say.</h2>

        <motion.ul
          variants={stagger(0.07)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 grid gap-x-16 gap-y-12 md:grid-cols-2"
        >
          {items.map((t) => (
            <motion.li key={t.id} variants={fadeUp}>
              <figure className="border-t border-paper-300 pt-7">
                {t.headline && <div className="mb-3 font-mono text-[10.5px] uppercase tracking-[0.18em] text-accent-600">{t.headline}</div>}
                <blockquote className="font-display text-[19px] leading-[1.5] text-text">{t.quote}</blockquote>
                <figcaption className="mt-6 flex items-center gap-3.5">
                  <Avatar person={t} />
                  <div>
                    <div className="text-[14.5px] font-medium text-text">{t.name}</div>
                    <div className="mt-1 text-[13px] leading-relaxed text-muted">{t.title}</div>
                  </div>
                </figcaption>
              </figure>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </Section>
  )
}
