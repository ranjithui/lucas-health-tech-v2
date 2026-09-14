import { forwardRef, type ButtonHTMLAttributes, type AnchorHTMLAttributes, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { cn } from '../../utils/cn'
import { useMagnetic } from '../../hooks/useMagnetic'

type Variant = 'primary' | 'secondary' | 'ghost' | 'inverse' | 'outline'
type Size = 'sm' | 'md' | 'lg'

const base =
  'group relative inline-flex items-center justify-center gap-2 rounded-full font-sans text-[14px] font-medium tracking-[-0.005em] whitespace-nowrap transition-[background-color,color,box-shadow,border-color] duration-300 ease-[cubic-bezier(.16,1,.3,1)] disabled:opacity-50 disabled:pointer-events-none select-none'

/* Primary is navy with white text on the light theme and brand blue on dark
   (the `primary` token flips). Secondary is the brand blue in both. Inverse is
   the white button for navy grounds. Each variant declares its own hover and
   active state so interaction is consistent; hover is a shade, never a glow. */
const variants: Record<Variant, string> = {
  primary: 'bg-primary text-white hover:bg-primary-hover active:bg-primary-active',
  secondary: 'bg-accent-500 text-white hover:bg-accent-hover active:bg-accent-active',
  inverse: 'bg-white text-ink-900 hover:bg-paper-200 active:bg-paper-300 dark:hover:bg-[#e6edf1] dark:active:bg-[#d8e1e6]',
  ghost: 'bg-transparent text-current hover:text-accent-600 active:text-accent-700',
  outline: 'bg-transparent border border-current/25 text-current hover:border-current/60 hover:bg-current/[0.04] active:border-current/80',
}

const sizes: Record<Size, string> = {
  sm: 'h-10 px-5 text-[13.5px]',
  md: 'h-11 px-6',
  lg: 'h-13 px-8 text-[15px] min-h-[52px]',
}

interface CommonProps {
  variant?: Variant
  size?: Size
  icon?: boolean
  magnetic?: boolean
  className?: string
  children: ReactNode
}

type ButtonProps = CommonProps & ButtonHTMLAttributes<HTMLButtonElement> & { to?: undefined; href?: undefined }
type LinkProps = CommonProps & { to: string; href?: undefined } & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>
type AnchorProps = CommonProps & { href: string; to?: undefined } & AnchorHTMLAttributes<HTMLAnchorElement>

export type Props = ButtonProps | LinkProps | AnchorProps

function Inner({ children, icon }: { children: ReactNode; icon?: boolean }) {
  return (
    <>
      <span className="relative z-10">{children}</span>
      {icon && (
        <ArrowRight
          className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
          aria-hidden
        />
      )}
    </>
  )
}

export const Button = forwardRef<HTMLElement, Props>(function Button(props, _ref) {
  const { variant = 'primary', size = 'md', icon, magnetic = true, className, children, ...rest } = props
  const { ref, onMouseMove, onMouseLeave } = useMagnetic<HTMLElement>(0.3)
  const cls = cn(base, variants[variant], sizes[size], magnetic && 'will-change-transform transition-transform', className)
  const magnet = magnetic ? { onMouseMove, onMouseLeave } : {}

  if ('to' in props && props.to) {
    const { to, ...a } = rest as LinkProps
    return (
      <Link to={to} ref={ref as React.Ref<HTMLAnchorElement>} className={cls} {...magnet} {...(a as object)}>
        <Inner icon={icon}>{children}</Inner>
      </Link>
    )
  }
  if ('href' in props && props.href) {
    const { href, ...a } = rest as AnchorProps
    return (
      <a href={href} ref={ref as React.Ref<HTMLAnchorElement>} className={cls} {...magnet} {...(a as object)}>
        <Inner icon={icon}>{children}</Inner>
      </a>
    )
  }
  const b = rest as ButtonProps
  return (
    <button type={b.type ?? 'button'} ref={ref as React.Ref<HTMLButtonElement>} className={cls} {...magnet} {...(b as object)}>
      <Inner icon={icon}>{children}</Inner>
    </button>
  )
})
