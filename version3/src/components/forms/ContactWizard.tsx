import { useId, useState, type FormEvent } from 'react'
import { motion } from 'motion/react'
import { ArrowLeft, ArrowRight, Check, Stethoscope, Handshake, MessagesSquare, Briefcase, MoreHorizontal, Loader2 } from 'lucide-react'
import { Button } from '../ui/Button'
import { cn } from '../../utils/cn'
import { useI18n } from '../../i18n/useI18n'

const INTENT_IDS = ['solution', 'partnership', 'consultation', 'business', 'other'] as const
type Intent = (typeof INTENT_IDS)[number]
const ICONS: Record<Intent, typeof Stethoscope> = {
  solution: Stethoscope,
  partnership: Handshake,
  consultation: MessagesSquare,
  business: Briefcase,
  other: MoreHorizontal,
}

interface FormState {
  name: string
  company: string
  email: string
  phone: string
  requirement: string
  consent: boolean
}

const initial: FormState = { name: '', company: '', email: '', phone: '', requirement: '', consent: false }

type Errors = Partial<Record<keyof FormState, string>>

function validate(f: FormState, msg: Record<'name' | 'email' | 'phone' | 'requirement' | 'consent', string>) {
  const e: Errors = {}
  if (f.name.trim().length < 2) e.name = msg.name
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)) e.email = msg.email
  if (f.phone && !/^[+\d\s().-]{7,}$/.test(f.phone)) e.phone = msg.phone
  if (f.requirement.trim().length < 10) e.requirement = msg.requirement
  if (!f.consent) e.consent = msg.consent
  return e
}

export function ContactWizard({ initialIntent }: { initialIntent?: Intent | null }) {
  const { ui, content, t, locale } = useI18n()
  const f = ui.form
  const { company } = content
  const [step, setStep] = useState<0 | 1 | 2>(initialIntent ? 1 : 0)
  const [intent, setIntent] = useState<Intent | null>(initialIntent ?? null)
  const [form, setForm] = useState<FormState>(initial)
  const [errors, setErrors] = useState<Errors>({})
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const uid = useId()

  const set = (k: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const v = e.target.type === 'checkbox' ? (e.target as HTMLInputElement).checked : e.target.value
    setForm((s) => ({ ...s, [k]: v }))
    if (errors[k]) setErrors((er) => ({ ...er, [k]: undefined }))
  }

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault()
    const errs = validate(form, f.errors)
    setErrors(errs)
    if (Object.keys(errs).length) {
      const first = Object.keys(errs)[0]
      document.getElementById(`${uid}-${first}`)?.focus()
      return
    }
    setSubmitting(true)
    setSubmitError(null)
    const payload = { intent, ...form, language: locale, source: 'lucashealthtech.com', submittedAt: new Date().toISOString() }
    const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT as string | undefined
    try {
      if (endpoint) {
        const res = await fetch(endpoint, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) })
        if (!res.ok) throw new Error(`Request failed (${res.status})`)
      } else {
        // No endpoint configured yet: keep the experience working locally.
        await new Promise((r) => setTimeout(r, 700))
        if (import.meta.env.DEV) console.info('[ContactWizard] VITE_CONTACT_ENDPOINT not set. Payload:', payload)
      }
      setStep(2)
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : f.submitError)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="rounded-2xl border border-paper-300 bg-surface p-6 shadow-lift sm:p-10">
      {/* Progress */}
      <ol className="mb-8 flex items-center gap-2" aria-label={f.progress}>
        {f.steps.map((l, i) => (
          <li key={l} className="flex flex-1 items-center gap-2">
            <span
              className={cn(
                'grid h-7 w-7 shrink-0 place-items-center rounded-full font-mono text-[11px] transition-colors',
                i < step ? 'bg-accent-500 text-white' : i === step ? 'bg-ink-900 text-white dark:bg-text dark:text-ink-950' : 'bg-paper-200 text-muted',
              )}
              aria-current={i === step ? 'step' : undefined}
            >
              {i < step ? <Check className="h-3.5 w-3.5" /> : i + 1}
            </span>
            <span className={cn('hidden text-xs font-medium sm:block', i === step ? 'text-text' : 'text-muted')}>{l}</span>
            {i < f.steps.length - 1 && <span className="ml-auto h-px flex-1 bg-paper-300" aria-hidden />}
          </li>
        ))}
      </ol>

      <div>
        {step === 0 && (
          <motion.div key="s0" initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}>
            <h2 className="display-md text-text">{f.steps[0]}</h2>
            <p className="mt-2 text-muted">{f.intentsBody}</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2" role="radiogroup" aria-label={f.enquiryType}>
              {INTENT_IDS.map((id) => {
                const Icon = ICONS[id]
                const { label, hint } = f.intents[id]
                const on = intent === id
                return (
                  <button
                    key={id}
                    type="button"
                    role="radio"
                    aria-checked={on}
                    onClick={() => {
                      setIntent(id)
                      setStep(1)
                    }}
                    className={cn(
                      'group flex items-start gap-4 rounded-2xl border p-4 text-left transition-all duration-300',
                      on ? 'border-accent-500 bg-accent-500/10 shadow-glow' : 'border-paper-300 hover:border-ink-900/30 hover:-translate-y-0.5 hover:shadow-soft',
                    )}
                  >
                    <span className={cn('grid h-10 w-10 shrink-0 place-items-center rounded-xl transition', on ? 'bg-accent-500 text-white' : 'bg-paper-100 text-accent-700 group-hover:bg-accent-500/15')}>
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <span>
                      <span className="block font-display font-semibold text-text">{label}</span>
                      <span className="mt-0.5 block text-[13px] leading-snug text-muted">{hint}</span>
                    </span>
                  </button>
                )
              })}
            </div>
          </motion.div>
        )}

        {step === 1 && (
          <motion.form key="s1" onSubmit={onSubmit} noValidate initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}>
            <div className="flex items-center justify-between gap-4">
              <div>
                <h2 className="display-md text-text">{f.steps[1]}</h2>
                <p className="mt-2 text-muted">
                  {intent ? (
                    <>
                      {f.selected} <strong className="text-text">{f.intents[intent].label}</strong>.
                    </>
                  ) : (
                    f.fewDetails
                  )}
                </p>
              </div>
              <button type="button" onClick={() => setStep(0)} className="inline-flex shrink-0 items-center gap-1.5 text-sm text-muted hover:text-text">
                <ArrowLeft className="h-4 w-4" aria-hidden /> {f.change}
              </button>
            </div>

            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <Field id={`${uid}-name`} label={f.name} required error={errors.name}>
                <input id={`${uid}-name`} name="name" autoComplete="name" value={form.name} onChange={set('name')} className={inputCls(!!errors.name)} aria-invalid={!!errors.name} aria-describedby={errors.name ? `${uid}-name-err` : undefined} />
              </Field>
              <Field id={`${uid}-company`} label={f.company}>
                <input id={`${uid}-company`} name="company" autoComplete="organization" value={form.company} onChange={set('company')} className={inputCls(false)} />
              </Field>
              <Field id={`${uid}-email`} label={f.email} required error={errors.email}>
                <input id={`${uid}-email`} name="email" type="email" autoComplete="email" inputMode="email" value={form.email} onChange={set('email')} className={inputCls(!!errors.email)} aria-invalid={!!errors.email} aria-describedby={errors.email ? `${uid}-email-err` : undefined} />
              </Field>
              <Field id={`${uid}-phone`} label={f.phone} error={errors.phone}>
                <input id={`${uid}-phone`} name="phone" type="tel" autoComplete="tel" inputMode="tel" value={form.phone} onChange={set('phone')} className={inputCls(!!errors.phone)} aria-invalid={!!errors.phone} aria-describedby={errors.phone ? `${uid}-phone-err` : undefined} />
              </Field>
              <div className="sm:col-span-2">
                <Field id={`${uid}-requirement`} label={f.requirement} required error={errors.requirement} hint={f.requirementHint}>
                  <textarea id={`${uid}-requirement`} name="requirement" rows={4} value={form.requirement} onChange={set('requirement')} className={cn(inputCls(!!errors.requirement), 'h-auto py-3')} aria-invalid={!!errors.requirement} aria-describedby={errors.requirement ? `${uid}-requirement-err` : `${uid}-requirement-hint`} />
                </Field>
              </div>
              <div className="sm:col-span-2">
                <label className="flex items-start gap-3 text-sm text-muted">
                  <input id={`${uid}-consent`} type="checkbox" checked={form.consent} onChange={set('consent')} className="mt-1 h-4 w-4 accent-accent-500" aria-invalid={!!errors.consent} aria-describedby={errors.consent ? `${uid}-consent-err` : undefined} />
                  <span>
                    {f.consent}{' '}
                    <a href="/privacy-policy" className="text-accent-700 underline underline-offset-2">
                      {f.privacyPolicy}
                    </a>
                    {f.consentTail}
                  </span>
                </label>
                {errors.consent && (
                  <p id={`${uid}-consent-err`} className="mt-1.5 text-xs text-red-600">
                    {errors.consent}
                  </p>
                )}
              </div>
            </div>

            {submitError && (
              <p role="alert" className="mt-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                {submitError} {t(f.alsoCall, { phone: company.phone })}
              </p>
            )}

            <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs text-muted">{t(f.responseTime, { hours: company.hours })}</p>
              <Button type="submit" size="lg" disabled={submitting} magnetic={false}>
                {submitting ? <Loader2 className="h-4 w-4 animate-spin" aria-hidden /> : null}
                {submitting ? f.sending : f.send}
                {!submitting && <ArrowRight className="h-4 w-4" aria-hidden />}
              </Button>
            </div>
          </motion.form>
        )}

        {step === 2 && (
          <motion.div key="s2" initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }} className="py-8 text-center" role="status">
            <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 260, damping: 18, delay: 0.1 }} className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-accent-500 text-white shadow-glow">
              <Check className="h-7 w-7" aria-hidden />
            </motion.span>
            <h2 className="display-md mt-6 text-text">{f.thanks}</h2>
            <p className="mx-auto mt-3 max-w-md text-muted">{t(f.received, { name: form.name ? `, ${form.name.split(' ')[0]}` : '', hours: company.hours })}</p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button to="/solutions" variant="secondary" icon>
                {f.exploreSolutions}
              </Button>
              <Button to="/insights" variant="outline">
                {f.readInsights}
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
}

function inputCls(err: boolean) {
  return cn(
    'h-12 w-full rounded-xl border bg-paper-50 px-4 text-[15px] text-text outline-none transition placeholder:text-muted/60 focus:border-accent-500 focus:bg-surface focus:ring-4 focus:ring-accent-500/15',
    err ? 'border-red-400' : 'border-paper-300',
  )
}

function Field({ id, label, required, error, hint, children }: { id: string; label: string; required?: boolean; error?: string; hint?: string; children: React.ReactNode }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-text">
        {label}
        {required && <span className="text-accent-700"> *</span>}
      </label>
      {children}
      {hint && !error && (
        <p id={`${id}-hint`} className="mt-1.5 text-xs text-muted">
          {hint}
        </p>
      )}
      {error && (
        <p id={`${id}-err`} className="mt-1.5 text-xs text-red-600" role="alert">
          {error}
        </p>
      )}
    </div>
  )
}
