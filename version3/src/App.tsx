import { lazy, Suspense } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { MotionConfig } from 'motion/react'
import { RootLayout } from './layouts/RootLayout'
import { useI18n } from './i18n/useI18n'
import Home from './pages/Home'

const Solutions = lazy(() => import('./pages/Solutions'))
const SolutionDetail = lazy(() => import('./pages/SolutionDetail'))
const Industries = lazy(() => import('./pages/Industries'))
const IndustryDetail = lazy(() => import('./pages/IndustryDetail'))
const CaseStudies = lazy(() => import('./pages/CaseStudies'))
const CaseStudyDetail = lazy(() => import('./pages/CaseStudyDetail'))
const About = lazy(() => import('./pages/About'))
const Insights = lazy(() => import('./pages/Insights'))
const InsightArticle = lazy(() => import('./pages/InsightArticle'))
const Contact = lazy(() => import('./pages/Contact'))
const NotFound = lazy(() => import('./pages/NotFound'))
const PrivacyPolicy = lazy(() => import('./pages/Legal').then((m) => ({ default: m.PrivacyPolicy })))
const Terms = lazy(() => import('./pages/Legal').then((m) => ({ default: m.Terms })))

function PageFallback() {
  const { ui } = useI18n()
  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-paper-100" role="status" aria-label={ui.common.loading}>
      <span className="h-6 w-6 animate-spin rounded-full border border-accent-500 border-t-transparent" />
    </div>
  )
}

/** Wraps a lazy route in its own suspense boundary. */
const page = (node: React.ReactNode) => <Suspense fallback={<PageFallback />}>{node}</Suspense>

export default function App() {
  return (
    <BrowserRouter>
      <MotionConfig reducedMotion="user">
          <Routes>
            <Route element={<RootLayout />}>
              <Route index element={<Home />} />

              <Route path="solutions" element={page(<Solutions />)} />
              <Route path="solutions/:id" element={page(<SolutionDetail />)} />

              <Route path="industries" element={page(<Industries />)} />
              <Route path="industries/:id" element={page(<IndustryDetail />)} />

              <Route path="case-studies" element={page(<CaseStudies />)} />
              <Route path="case-studies/:id" element={page(<CaseStudyDetail />)} />

              <Route path="about" element={page(<About />)} />
              <Route path="insights" element={page(<Insights />)} />
              <Route path="insights/:slug" element={page(<InsightArticle />)} />
              <Route path="contact" element={page(<Contact />)} />
              <Route path="privacy-policy" element={page(<PrivacyPolicy />)} />
              <Route path="terms" element={page(<Terms />)} />

              {/* Legacy URLs from earlier versions of the website */}
              <Route path="home" element={<Navigate to="/" replace />} />
              <Route path="contact-us-4831" element={<Navigate to="/contact" replace />} />
              <Route path="privacy-policy-8873" element={<Navigate to="/privacy-policy" replace />} />
              <Route path="terms-conditions-7829" element={<Navigate to="/terms" replace />} />
              <Route path="IntelligentAutomation" element={<Navigate to="/solutions/ai-automation" replace />} />
              <Route path="digital_innovation" element={<Navigate to="/solutions/digital-innovation" replace />} />

              <Route path="*" element={page(<NotFound />)} />
            </Route>
          </Routes>
      </MotionConfig>
    </BrowserRouter>
  )
}
