import { Link } from 'react-router-dom'
import { cn } from '../../utils/cn'
import { LogoLockup, LOCKUP_VIEWBOX } from './LogoLockup'

/**
 * Official Lucas Health Tech lockup: the green cross mark over the wordmark and
 * the INNOVATE rule. Inlined from src/image/lucus_logo.svg rather than loaded as
 * an <img> so the wordmark can reverse to white on the navy grounds — the source
 * file paints it black, which disappears against ink-900/950.
 *
 * The mark green and the INNOVATE blue are the logo's own colors and are left
 * exactly as drawn in both themes; only the wordmark responds to its ground —
 * forced white when `light`, otherwise following --color-text, which already
 * flips with the light/dark theme.
 *
 * `onAccent` is for the azure field in the footer: the logo's own INNOVATE blue
 * (#2374e0) is within a hair of that background and disappears completely, so
 * the whole lockup reverses to white there.
 */
export function Logo({ light, onAccent, className }: { light?: boolean; onAccent?: boolean; className?: string }) {
  const word = onAccent || light ? '#ffffff' : 'var(--color-text)'
  const rule = onAccent ? '#ffffff' : '#2374e0'
  return (
    <Link to="/" className="inline-flex items-center" aria-label="Lucas Health Tech home">
      <svg
        viewBox={LOCKUP_VIEWBOX}
        className={cn(className ?? 'h-10', 'w-auto shrink-0')}
        role="img"
        aria-hidden
      >
        <LogoLockup word={word} rule={rule} />
      </svg>
    </Link>
  )
}
