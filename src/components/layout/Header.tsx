import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { cn } from '@/utils/cn'

const NAV_ITEMS = [
  { label: 'Home', path: '/' },
  { label: 'Collections', path: '/collections' },
  { label: 'About', path: '/about' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Contact', path: '/contact' },
]

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMobileOpen(false) }, [location.pathname])

  return (
    <>
      <header className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        scrolled ? 'bg-white/98 backdrop-blur-sm' : 'bg-transparent'
      )}>
        <div className="mx-auto flex h-24 max-w-[1360px] items-center justify-between px-8 md:px-12 lg:px-16">
          <Link to="/" className="block shrink-0">
            <img src="/assets/logo.jpg" alt="Lidiana Habesha"
              className="h-8 md:h-10 w-auto" />
          </Link>

          <nav className="hidden items-center gap-10 md:flex">
            {NAV_ITEMS.map((item) => (
              <NavLink key={item.path} to={item.path}
                className={({ isActive }) => cn(
                  'font-body text-xs uppercase tracking-[0.18em] transition-colors duration-300',
                  isActive ? 'text-gold' : 'text-text/80 hover:text-gold'
                )}>
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden items-center md:flex">
            <Link to="/contact"
              className="rounded-sm border border-gold px-6 py-2.5 font-body text-xs uppercase tracking-[0.18em] text-gold transition-all duration-300 hover:bg-gold hover:text-white">
              Book Appointment
            </Link>
          </div>

          <button onClick={() => setMobileOpen(true)} className="md:hidden text-black">
            <Menu size={22} />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex flex-col items-center justify-center bg-white">
            <button onClick={() => setMobileOpen(false)} className="absolute top-8 right-8 text-black"><X size={24} /></button>
            <nav className="flex flex-col items-center gap-8">
              {NAV_ITEMS.map((item) => (
                <Link key={item.path} to={item.path}
                  className="font-heading text-h2 text-black hover:text-gold transition-colors">
                  {item.label}
                </Link>
              ))}
              <Link to="/contact"
                className="mt-4 rounded-sm border border-gold px-8 py-3 font-body text-xs uppercase tracking-[0.18em] text-gold hover:bg-gold hover:text-white transition-all">
                Book Appointment
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
