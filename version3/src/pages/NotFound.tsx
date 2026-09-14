import { Seo } from '../components/seo/Seo'
import { Button } from '../components/ui/Button'
import { useTheme } from '../hooks/useTheme'
import { useI18n } from '../i18n/useI18n'
import { cn } from '../utils/cn'

export default function NotFound() {
  const dark = useTheme().theme === 'dark'
  const { ui } = useI18n()
  const p = ui.pages.notFound
  return (
    <>
      <Seo title={p.seoTitle} noIndex />
      <section className={cn('flex min-h-[80vh] items-center pt-20', dark ? 'bg-ink-900 text-white grid-bg' : 'bg-mist-100 text-text grid-bg-light')}>
        <div className="container-x text-center">
          <span className={dark ? 'eyebrow-dark' : 'eyebrow'}>404</span>
          <h1 className="display-lg mt-4">{p.title}</h1>
          <p className={cn('mx-auto mt-4 max-w-md', dark ? 'text-muted-dark' : 'text-muted')}>{p.body}</p>
          <div className="mt-8 flex justify-center gap-3">
            <Button to="/" icon variant={dark ? 'inverse' : 'primary'}>
              {p.home}
            </Button>
            <Button to="/contact" variant="outline" className={dark ? 'text-white' : 'text-text'}>
              {p.contact}
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
