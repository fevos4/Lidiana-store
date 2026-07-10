import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { pageTransition } from '@/animations'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export function RootLayout() {
  const location = useLocation()

  return (
    <div className="min-h-screen bg-white text-text">
      <ScrollToTop />
      <Header />
      <main>
        <AnimatePresence mode="wait">
          <motion.div key={location.pathname} variants={pageTransition} initial="hidden" animate="visible" exit="exit">
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  )
}
