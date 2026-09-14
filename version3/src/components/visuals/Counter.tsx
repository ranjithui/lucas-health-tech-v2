import { useCountUp } from '../../hooks/useCountUp'
import { useI18n } from '../../i18n/useI18n'
import { cn } from '../../utils/cn'

interface CounterProps {
  value: number
  suffix?: string
  prefix?: string
  decimals?: number
  className?: string
}

/** Count-up figure. Grouping and decimal separators follow the active language. */
export function Counter({ value, suffix = '', prefix = '', decimals = 0, className }: CounterProps) {
  const { ref, value: v } = useCountUp(value, 1600, decimals)
  const { dateLocale } = useI18n()
  const format = (n: number) => n.toLocaleString(dateLocale, { minimumFractionDigits: decimals, maximumFractionDigits: decimals })
  return (
    <span ref={ref as React.Ref<HTMLSpanElement>} className={cn('tabular-nums', className)} aria-label={`${prefix}${format(value)}${suffix}`}>
      {prefix}
      {format(v)}
      {suffix}
    </span>
  )
}
