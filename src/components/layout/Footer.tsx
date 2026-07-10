import { Link } from 'react-router-dom'
import { Container } from '@/components/layout/Container'

export function Footer() {
  return (
    <footer className="bg-black">
      <Container className="py-14 md:py-24">
        <div className="text-center mb-14">
          <Link to="/" className="inline-block">
            <img src="/assets/logo.jpg" alt="Lidiana Habesha" className="h-12 md:h-14 w-auto mx-auto" />
          </Link>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-16 md:gap-32 text-center">
          <div>
            <h4 className="font-body text-xs uppercase tracking-[0.2em] text-white/40 mb-4">Navigation</h4>
            <ul className="space-y-2">
              {[
                { label: 'Home', path: '/' },
                { label: 'About', path: '/about' },
                { label: 'Gallery', path: '/gallery' },
              ].map((l) => (
                <li key={l.path}>
                  <Link to={l.path} className="font-body text-xs text-white/50 hover:text-gold transition-colors duration-300">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-body text-xs uppercase tracking-[0.2em] text-white/40 mb-4">Collections</h4>
            <ul className="space-y-2">
              {[
                { label: 'Bridal', path: '/collections/bridal' },
                { label: 'Traditional', path: '/collections/traditional' },
                { label: 'Evening Wear', path: '/collections/evening-wear' },
                { label: 'Accessories', path: '/collections/accessories' },
              ].map((l) => (
                <li key={l.path}>
                  <Link to={l.path} className="font-body text-xs text-white/50 hover:text-gold transition-colors duration-300">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-body text-xs uppercase tracking-[0.2em] text-white/40 mb-4">Social</h4>
            <ul className="space-y-2">
              {['Instagram', 'TikTok', 'Pinterest'].map((s) => (
                <li key={s}>
                  <a href="#" className="font-body text-xs text-white/50 hover:text-gold transition-colors duration-300">{s}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mx-auto my-16 h-px w-full max-w-4xl bg-gold/40" />
        <p className="text-center font-body text-xs text-white/20 leading-relaxed">
          © 2026 Lidiana Habesha
        </p>
      </Container>
    </footer>
  )
}
