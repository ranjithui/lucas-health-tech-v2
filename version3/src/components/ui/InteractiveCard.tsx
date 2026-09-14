import { useCallback, useRef, type ReactNode } from 'react'
import { motion, useMotionValue, useSpring, useTransform, type HTMLMotionProps, type Variants } from 'motion/react'
import { easeOutExpo } from '../../animations/variants'
import { usePrefersReducedMotion, useIsMobile } from '../../hooks/useMediaQuery'
import { cn } from '../../utils/cn'

type Tag = 'div' | 'li' | 'article'

/**
 * Each homepage section owns one signature, so the page reads as a sequence of
 * distinct moments rather than one repeated card trick.
 *
 *   tilt      — slides in from the left; tilts toward the cursor with a
 *               cursor-following light and a gold hairline.      (Positioning)
 *   sweep     — blurs and scales into focus; on hover shifts right while a
 *               diagonal sheen sweeps across the surface.        (Who we serve)
 *   parallax  — wipes up from its bottom edge; the photo inside pans against
 *               the cursor while the card holds still.           (Capabilities)
 *   glow      — scales up from small; on hover the figure lifts on a spring
 *               above a warm brass glow and the gold rule draws. (Proof)
 */
export type CardVariant = 'tilt' | 'sweep' | 'parallax' | 'glow'

const ENTER: Record<CardVariant, Variants> = {
  tilt: {
    hidden: { opacity: 0, x: -32, rotateY: -6 },
    show: { opacity: 1, x: 0, rotateY: 0, transition: { duration: 0.8, ease: easeOutExpo } },
  },
  sweep: {
    hidden: { opacity: 0, scale: 0.94, filter: 'blur(12px)' },
    show: { opacity: 1, scale: 1, filter: 'blur(0px)', transition: { duration: 0.9, ease: easeOutExpo } },
  },
  parallax: {
    hidden: { opacity: 0, clipPath: 'inset(100% 0 0 0 round 1.25rem)' },
    show: { opacity: 1, clipPath: 'inset(0% 0 0 0 round 1.25rem)', transition: { duration: 0.9, ease: easeOutExpo } },
  },
  glow: {
    hidden: { opacity: 0, scale: 0.82, y: 16 },
    show: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', stiffness: 220, damping: 20 } },
  },
}

interface Props extends Omit<HTMLMotionProps<'div'>, 'children'> {
  as?: Tag
  variant?: CardVariant
  children: ReactNode
  className?: string
  /** Max tilt in degrees; only the `tilt` signature uses it. */
  tilt?: number
}

export function InteractiveCard({ as = 'div', variant = 'tilt', children, className, tilt = 4, style, ...rest }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const reduced = usePrefersReducedMotion()
  const mobile = useIsMobile()
  const pointer = !reduced && !mobile

  // -0.5..0.5 across the card, sprung so movement eases rather than snaps.
  const px = useMotionValue(0)
  const py = useMotionValue(0)
  const sx = useSpring(px, { stiffness: 220, damping: 26, mass: 0.4 })
  const sy = useSpring(py, { stiffness: 220, damping: 26, mass: 0.4 })
  const rotateX = useTransform(sy, [-0.5, 0.5], [tilt, -tilt])
  const rotateY = useTransform(sx, [-0.5, 0.5], [-tilt, tilt])

  const onPointerMove = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (!pointer || !ref.current) return
      const r = ref.current.getBoundingClientRect()
      const x = (e.clientX - r.left) / r.width
      const y = (e.clientY - r.top) / r.height
      px.set(x - 0.5)
      py.set(y - 0.5)
      const el = ref.current
      el.style.setProperty('--mx', `${(x * 100).toFixed(1)}%`)
      el.style.setProperty('--my', `${(y * 100).toFixed(1)}%`)
      el.style.setProperty('--px', (x - 0.5).toFixed(3))
      el.style.setProperty('--py', (y - 0.5).toFixed(3))
    },
    [pointer, px, py],
  )

  const onPointerLeave = useCallback(() => {
    px.set(0)
    py.set(0)
    const el = ref.current
    if (el) {
      el.style.setProperty('--px', '0')
      el.style.setProperty('--py', '0')
    }
  }, [px, py])

  const hover = reduced
    ? undefined
    : variant === 'tilt'
      ? { y: -4 }
      : variant === 'sweep'
        ? { x: 6 }
        : variant === 'glow'
          ? { y: -8 }
          : { y: -2 }

  const Comp = motion[as] as typeof motion.div

  return (
    <Comp
      ref={ref}
      variants={ENTER[variant]}
      whileHover={hover}
      whileTap={reduced ? undefined : { scale: 0.99 }}
      transition={{ type: 'spring', stiffness: 300, damping: 24 }}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      style={{
        ...(pointer && variant === 'tilt' ? { rotateX, rotateY, transformPerspective: 1100 } : {}),
        ...style,
      }}
      className={cn('icard group/card', `icard-${variant}`, className)}
      {...rest}
    >
      {variant === 'tilt' && (
        <>
          <span aria-hidden className="icard-spot" />
          <span aria-hidden className="icard-line" />
        </>
      )}
      {variant === 'sweep' && <span aria-hidden className="icard-sheen" />}
      {variant === 'parallax' && <span aria-hidden className="icard-ring" />}
      {variant === 'glow' && <span aria-hidden className="icard-halo" />}
      <div className="icard-body">{children}</div>
    </Comp>
  )
}
