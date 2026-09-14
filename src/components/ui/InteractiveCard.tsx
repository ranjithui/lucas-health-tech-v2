import { useCallback, useRef, type ReactNode } from 'react'
import { motion, useMotionValue, useSpring, useTransform, type HTMLMotionProps } from 'motion/react'
import { fadeUp } from '../../animations/variants'
import { usePrefersReducedMotion, useIsMobile } from '../../hooks/useMediaQuery'
import { cn } from '../../utils/cn'

type Tag = 'div' | 'li' | 'article'

interface Props extends Omit<HTMLMotionProps<'div'>, 'children'> {
  as?: Tag
  children: ReactNode
  className?: string
  /** Max tilt in degrees as the pointer crosses the card. 0 disables the tilt. */
  tilt?: number
  /** Cursor-following highlight on the card surface. */
  spotlight?: boolean
  /** Thin gold line that draws across the top edge on hover. */
  line?: boolean
  /** Lift on hover, in px. */
  lift?: number
}

/**
 * The one interactive surface used for every card on the homepage.
 *
 * On pointer devices the card lifts, tilts a few degrees toward the cursor,
 * carries a soft cursor-following highlight, and draws a gold hairline across
 * its top edge. Touch devices get the lift only; reduced motion gets the
 * colour changes only. Enters with the shared `fadeUp` variant so it drops
 * straight into any staggered parent.
 *
 * Composition note: the tilt lives on the outer element and the highlight on an
 * inner layer, so children never have to know about either.
 */
export function InteractiveCard({
  as = 'div',
  children,
  className,
  tilt = 4,
  spotlight = true,
  line = true,
  lift = 4,
  style,
  ...rest
}: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const reduced = usePrefersReducedMotion()
  const mobile = useIsMobile()
  const pointer = !reduced && !mobile

  // -0.5..0.5 across the card, sprung so the tilt eases rather than snaps.
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
      ref.current.style.setProperty('--mx', `${(x * 100).toFixed(1)}%`)
      ref.current.style.setProperty('--my', `${(y * 100).toFixed(1)}%`)
    },
    [pointer, px, py],
  )

  const onPointerLeave = useCallback(() => {
    px.set(0)
    py.set(0)
  }, [px, py])

  const Comp = motion[as] as typeof motion.div

  return (
    <Comp
      ref={ref}
      variants={fadeUp}
      whileHover={reduced ? undefined : { y: -lift }}
      whileTap={reduced ? undefined : { scale: 0.995 }}
      transition={{ type: 'spring', stiffness: 300, damping: 24 }}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      style={{
        ...(pointer && tilt ? { rotateX, rotateY, transformPerspective: 1100 } : {}),
        ...style,
      }}
      className={cn('icard group/card', className)}
      {...rest}
    >
      {spotlight && <span aria-hidden className="icard-spot" />}
      {line && <span aria-hidden className="icard-line" />}
      <div className="icard-body">{children}</div>
    </Comp>
  )
}
