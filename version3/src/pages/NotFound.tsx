import { Seo } from '../components/seo/Seo'
import { Button } from '../components/ui/Button'
import { useTheme } from '../hooks/useTheme'
import { cn } from '../utils/cn'

export default function NotFound() {
  const dark = useTheme().theme === 'dark'
  return (
    <>
      <Seo title="Page not found" noIndex />
      <section
        className={cn(
          'flex min-h-[80vh] items-center pt-20',
          dark ? 'bg-ink-900 text-white grid-bg' : 'bg-mist-100 text-text grid-bg-light',
        )}
      >
        <div className="container-x text-center">
          <span className={dark ? 'eyebrow-dark' : 'eyebrow'}>404</span>
          <h1 className="display-lg mt-4">This page isn’t part of the ecosystem.</h1>
          <p className={cn('mx-auto mt-4 max-w-md', dark ? 'text-muted-dark' : 'text-muted')}>The page you requested does not exist or has moved.</p>
          <div className="mt-8 flex justify-center gap-3">
            <Button to="/" icon variant={dark ? 'inverse' : 'primary'}>
              Back to home
            </Button>
            <Button to="/contact" variant="outline" className={dark ? 'text-white' : 'text-text'}>
              Contact
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
