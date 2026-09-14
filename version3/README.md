# Lucas Health Tech — Version 3

Version 3 keeps the Version 2 stack, information architecture, design system and
verified content, and adds three things:

1. **A local video hero.** The homepage opens on a full-bleed clip of a clinician
   working on a tablet, served from this project (`public/video/`), under a navy
   wash so the executive statement stays readable in both themes.
2. **The animated system flow beside the positioning copy.** The ring-and-hub
   visual that was the Version 2 hero hook now sits to the right of the
   Positioning statement, where the four domains it animates are explained.
3. **Four languages.** English (default), Spanish, French and German, switchable
   from the header. Every interface string and every piece of editorial copy is
   translated; ids, routes, numbers, technology names and images are shared.

Version 2 stays untouched in the parent folder. This folder is a complete,
standalone project.

---

## Run it

```bash
cd version3
npm install
npm run dev        # http://localhost:5173
```

```bash
npm run build      # type-check + production build into dist/
npm run preview    # serve the production build
npm run lint
```

Node 20+ recommended. Vite 8 + React 19 + React Router 7 + Tailwind CSS 4 +
Motion. No i18n library — the language layer is ~200 lines of typed React.

---

## The hero video

| | |
| --- | --- |
| Source | Pixabay video 22704 by RoyBuri, "Doctor, Tablet, Computer, Online" |
| Licence | Pixabay Content License — free for commercial use, no attribution required |
| Files | `public/video/hero-doctor-tablet-540.mp4` (960×540, 11 MB, desktop) · `public/video/hero-doctor-tablet-360.mp4` (640×360, 4.7 MB, phones) · `public/video/hero-poster.jpg` (a frame from the clip, 66 KB) |

The clip is muted, looped and `playsInline`. It never autoplays under
`prefers-reduced-motion` or on low-power devices (`useLowPower()`); the poster
frame carries the section instead, and the play button still works. The
`<video>` element fades in only once the first frame has decoded, so there is
no black flash. A play/pause control sits bottom-left for anyone who finds the
motion distracting.

To swap the clip, replace the three files and keep the names, or change
`SOURCES` and `POSTER` in `src/sections/home/Hero.tsx`.

---

## Languages

```
src/i18n/
├── config.ts            locales, detection (stored choice → browser → English), fmt()
├── store.ts             the React context and the English fallback
├── context.tsx          LanguageProvider
├── useI18n.ts           useI18n(), useUi(), useContent()
├── localize.ts          merges a ContentPack over the English data files
├── locales/
│   ├── en.ts            interface strings — the source of truth (UiDict = typeof en)
│   ├── es.ts  fr.ts  de.ts
│   └── index.ts         lazy loaders; non-English bundles are code-split
└── content/
    ├── types.ts         ContentPack — the translatable slice of src/data
    └── es.ts  fr.ts  de.ts
```

**How it works.** English copy stays where it was, in `src/data/*.ts`, so the
verified source is unchanged. Each other language ships a `ContentPack` keyed by
the same ids and slugs. At runtime `localize()` merges the pack over the English
base; anything a pack does not mention falls back to English instead of
disappearing. Components never import data directly any more — they call
`useI18n()` and read `content.solutions`, `ui.nav.solutions`, and so on.

**Type safety.** Every non-English dictionary is declared `: UiDict`, so a
missing or misspelled key fails `npm run build`. Content packs are typed against
`ContentPack` the same way.

**Loading.** English is in the main bundle. Choosing another language fetches
two small chunks (interface + content, ~16 kB gzipped together), caches them
for the session, and swaps in one render. Until they arrive the page keeps
showing English rather than blank labels.

**Persistence and detection.** The choice is stored under `lht-lang` in
`localStorage`. A first-time visitor gets the first of their browser languages
we support, else English. `<html lang>` and `og:locale` follow the active
language. URLs do not change with language — every language lives at the same
address — so deep links keep working and the sitemap is unchanged.

**What is not translated, deliberately.** People's names, client names,
technology names (FHIR, HL7, Epic…), the article tags, phone, address, and the
routes. Insight categories are stable English keys in the URL
(`?category=Case%20Studies`) with translated labels.

**Adding a language.** Add the code to `LOCALES` and `LOCALE_META` in
`config.ts`, create `locales/xx.ts` and `content/xx.ts`, and register the
loader in `locales/index.ts`. The compiler will list every string you owe.

---

## What changed from Version 2 — file by file

| File | Change |
| --- | --- |
| `src/sections/home/Hero.tsx` | Rewritten: local video ground, navy wash, play/pause, scroll cue. Single column; the system visual moved out. |
| `src/sections/home/Positioning.tsx` | Two columns: statement + domain cards left, `SystemVisual` right (sticky on desktop). |
| `src/components/layout/Header.tsx` | `LanguageSwitcher` beside the theme toggle; `LanguagePills` in the mobile menu; light type over the video on `/` in both themes. |
| `src/components/ui/LanguageSwitcher.tsx` | New. Globe + code trigger, listbox menu, arrow-key navigation, Escape to close. |
| `src/i18n/**` | New. See above. |
| `src/main.tsx` | Wraps the app in `LanguageProvider`. |
| `src/components/visuals/Counter.tsx`, `src/utils/format.ts` | Number and date formatting follow the active language. |
| `src/components/seo/Seo.tsx` | Titles/descriptions from the active language; adds `og:locale`. |
| Every page and section | Reads copy from `useI18n()` instead of importing `src/data` directly. |
| `public/video/` | New. Two encodes of the hero clip. |

The design tokens, the interaction signatures on cards, the routes, the legacy
redirects and the contact wizard's behaviour are all unchanged. The wizard now
also sends `language` in its payload so replies can be written in the reader's
language.

---

## Content integrity

Nothing new was claimed. The translations render the Version 2 copy, which was
sourced from the published site, into Spanish, French and German. Legal pages
are translated as a courtesy; the English text remains the governing version
and the `Legal.tsx` comment says so.
