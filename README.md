# Lucas Health Tech — Version 2

A clean, elegant, executive-level HealthTech website. Version 2 keeps the Version 1
stack and its verified content, and changes the *shape* of the site: the homepage
becomes a hook, and everything detailed moves to dedicated pages.

Version 1 stays untouched in the parent folder. This folder is a complete,
standalone project.

---

## Run it

```bash
cd version-2
npm install
npm run dev        # http://localhost:5173
```

```bash
npm run build      # type-check + production build into dist/
npm run preview    # serve the production build
npm run lint
```

Node 20+ recommended. The project is Vite 8 + React 19 + React Router 7 +
Tailwind CSS 4 + Motion. No other runtime dependencies.

---

## What changed from Version 1

### 1. The homepage is a hook, not a brochure

Version 1 had ten homepage sections. Version 2 has seven, and every one of them
answers a single question a senior decision-maker asks in the first ten seconds:

| Section | Answers |
| --- | --- |
| Hero | Who is LHT, and why should I keep reading? |
| Positioning | What do they actually understand? |
| Capabilities | What do they do? (titles + one line each) |
| Proof | Have they done it? (three verified numbers) |
| Who we serve | Is this built for someone like me? |
| Trust | Would a peer vouch for them? (one reference) |
| Closing CTA | What do I do next? |

No section on the homepage carries more than one line of description. The
Story rail, the ecosystem graph, the automation pipeline, the full metric set,
the engagement write-ups and the eight executive references all moved to inner
pages.

### 2. Information architecture

```
/
├── /solutions                     five capabilities
│   ├── /solutions/clinical-systems
│   ├── /solutions/executive-operations
│   ├── /solutions/ai-automation
│   ├── /solutions/digital-innovation
│   └── /solutions/practice-optimization
├── /industries                    four decision-maker groups + verified sectors
│   ├── /industries/health-systems
│   ├── /industries/healthcare-organizations
│   ├── /industries/technology-partners
│   └── /industries/investors
├── /case-studies                  the three published engagements
│   ├── /case-studies/lorimdt
│   ├── /case-studies/trillium
│   └── /case-studies/eli-lilly
├── /about                         founder, differentiators, impact, references
├── /insights                      articles + article pages
├── /contact                       the only form on the site
├── /privacy-policy  ·  /terms
```

Version 1 deep links still resolve: `/solutions#ai-automation-strategy` style
ids are matched through `legacyId` in `src/data/solutions.ts`, and the old
`/IntelligentAutomation` and `/digital_innovation` URLs redirect.

### 3. Design system

| | Version 1 | Version 2 |
| --- | --- | --- |
| Display type | Manrope, bold, tight | Newsreader, 400 weight, editorial |
| Interface type | Inter | Inter Tight |
| Primary | `#0a0e14` blue-black | `#0a1113` desaturated petrol |
| Ground | `#f6f7f5` cool white | `#f7f5f1` warm off-white |
| Accent | `#19c6a5` bright mint **and** `#f2b441` gold | `#1e9e86` muted jade — one accent only |
| Second accent | gold | none; gold became a warm stone neutral used for surfaces |
| Surfaces | floating cards with lift shadows | hairline rules and 1px grid seams |

Token *names* (`ink-*`, `paper-*`, `accent-*`) are unchanged, so every shared
component re-skinned without being rewritten.

### 4. Interactions

Smooth scrolling, word-level hero reveal, scroll-linked header (84px → 64px,
blur + hairline border), the capability explorer, the hero system visual, count-up
numbers, magnetic CTAs, and a cross-fade page transition. Everything is disabled
under `prefers-reduced-motion`, and the hero visual drops its animation on
low-power devices via `useLowPower()`.

### 5. Performance

- Hero visual is pure SVG — no canvas loop, no WebGL, no image payload. The old
  `NetworkCanvas` (335 lines of per-frame Canvas 2D work) is gone.
- Routes are lazy; the homepage's last three sections are lazy too.
- Vendor chunks split for react / router / motion.
- Three Google font families, `display=swap`, preconnected.
- Production JS for the homepage is ~50 kB app code on top of the shared vendor
  chunks; the whole CSS bundle gzips to ~11 kB.

### 6. Mobile

Redesigned rather than stacked. The bottom tab bar and the floating assistant
widget from Version 1 are gone — both competed with the single CTA. Mobile now
gets a full-screen menu with large type, a stacked hero, and a capability list
that links straight to the solution pages instead of running the desktop
hover explorer.

---

## Content integrity

Every figure, reference, engagement and credential in this build comes from the
Version 1 data files, which were sourced from the published site. Nothing was
invented for Version 2. Specifically:

- The three homepage numbers (20+, 200+, 2.1M+) are the published ones.
- The single homepage testimonial is a real published reference.
- No client logos are displayed, because none were supplied.
- `Practice Optimization` is a fifth capability introduced in Version 2. Its
  copy is drawn entirely from the published Digital Innovation page, the RPA
  benefit list, and the physician-practice segment — no new claims.
- The `Investors` segment describes the perspective LHT can offer, grounded in
  the founder's actual roles. It does not claim prior investor clients.

---

## Project layout

```
src/
├── sections/home/      the seven homepage sections, and nothing else
├── sections/           sections shared by inner pages
├── pages/              one file per route
├── components/
│   ├── layout/         header, footer, logo, scroll progress
│   ├── ui/             button, card, primitives
│   ├── visuals/        SystemVisual (hero), ecosystem graph, pipeline, counter
│   ├── forms/          contact wizard
│   └── seo/            per-route metadata + JSON-LD
├── data/               all copy lives here, not in components
├── hooks/  animations/  utils/  styles/
```

Copy is deliberately kept in `src/data/`. To change what the homepage says,
edit `positioningV2` in `src/data/company.ts` and the `short` field on each
solution and industry — not the components.
