import { useState, useEffect, useCallback, useRef } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { COLLECTIONS } from '@/data/collections'

export function CollectionsCarousel() {
  const [active, setActive] = useState(0)
  const touchStart = useRef(0)
  const touchDelta = useRef(0)

  const next = useCallback(() => {
    setActive((a) => (a + 1) % COLLECTIONS.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(next, 4500)
    return () => clearInterval(timer)
  }, [next])

  const goTo = (i: number) => {
    setActive(i)
  }

  const onTouchStart = (e: React.TouchEvent) => {
    touchStart.current = e.touches[0].clientX
    touchDelta.current = 0
  }

  const onTouchMove = (e: React.TouchEvent) => {
    touchDelta.current = e.touches[0].clientX - touchStart.current
  }

  const onTouchEnd = () => {
    if (Math.abs(touchDelta.current) > 50) {
      if (touchDelta.current < 0) {
        setActive((a) => (a + 1) % COLLECTIONS.length)
      } else {
        setActive((a) => (a - 1 + COLLECTIONS.length) % COLLECTIONS.length)
      }
    }
    touchDelta.current = 0
  }

  const col = COLLECTIONS[active]

  return (
    <div>
      <div
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <Link to={'/collections/' + col.slug} className="group block">
              <div className="relative overflow-hidden mb-5">
                <div className="aspect-[3/4] bg-cover bg-center transition-all duration-700 ease-out group-hover:scale-[1.06]"
                  style={{ backgroundImage: 'url(' + col.image + ')' }} />
              </div>
              <div className="relative">
                <h3 className="font-heading text-h3 text-black group-hover:text-gold transition-colors duration-300">{col.name}</h3>
                <p className="mt-1 font-body text-xs uppercase tracking-[0.15em] text-text/50">{col.subtitle}</p>
                <span className="mt-3 block h-px w-0 bg-gold transition-all duration-500 group-hover:w-full" />
                <p className="mt-3 font-body text-xs uppercase tracking-[0.15em] text-gold">See More →</p>
              </div>
            </Link>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-8 flex items-center justify-center gap-2">
        {COLLECTIONS.map((_, i) => (
          <button key={i} onClick={() => goTo(i)}
            className={'h-1.5 rounded-full transition-all duration-500 ' + (i === active ? 'w-8 bg-gold' : 'w-1.5 bg-gold/20')} />
        ))}
      </div>
    </div>
  )
}
