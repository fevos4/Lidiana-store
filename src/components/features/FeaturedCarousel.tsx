import { useState, useEffect, useCallback, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FEATURED_PRODUCTS } from '@/data/products'

export function FeaturedCarousel() {
  const [active, setActive] = useState(0)
  const [flippedId, setFlippedId] = useState<string | null>(null)
  const touchStart = useRef(0)
  const touchDelta = useRef(0)
  const [dragging, setDragging] = useState(false)

  const next = useCallback(() => {
    setFlippedId(null)
    setActive((a) => (a + 1) % FEATURED_PRODUCTS.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(next, 4500)
    return () => clearInterval(timer)
  }, [next])

  const goTo = (i: number) => {
    setFlippedId(null)
    setActive(i)
  }

  const onTouchStart = (e: React.TouchEvent) => {
    touchStart.current = e.touches[0].clientX
    touchDelta.current = 0
    setDragging(true)
  }

  const onTouchMove = (e: React.TouchEvent) => {
    touchDelta.current = e.touches[0].clientX - touchStart.current
  }

  const onTouchEnd = () => {
    setDragging(false)
    if (Math.abs(touchDelta.current) > 50) {
      setFlippedId(null)
      if (touchDelta.current < 0) {
        setActive((a) => (a + 1) % FEATURED_PRODUCTS.length)
      } else {
        setActive((a) => (a - 1 + FEATURED_PRODUCTS.length) % FEATURED_PRODUCTS.length)
      }
    }
    touchDelta.current = 0
  }

  const product = FEATURED_PRODUCTS[active]
  const isFlipped = flippedId === product.id

  return (
    <div>
      <div
        className="cursor-pointer [perspective:1000px] overflow-hidden"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        onClick={() => {
          if (!dragging || Math.abs(touchDelta.current) < 10) {
            setFlippedId(isFlipped ? null : product.id)
          }
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className={'relative aspect-[3/4] [transform-style:preserve-3d] transition-transform duration-[1.2s] ease-out ' + (isFlipped ? '[transform:rotateY(180deg)]' : '')}>
              <div className="absolute inset-0 [backface-visibility:hidden] overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: 'url(' + product.image + ')' }} />
                <div className="absolute bottom-0 left-0 right-0 bg-black/60">
                  <p className="font-body text-xs uppercase tracking-[0.2em] text-gold text-center py-3">Tap to flip</p>
                </div>
              </div>
              <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] bg-black flex flex-col items-center justify-center p-8 text-center">
                <h3 className="font-heading text-h3 text-gold mb-2">{product.name}</h3>
                <p className="font-body text-xs uppercase tracking-[0.15em] text-white/50 mb-4">{product.collection}</p>
                <div className="w-8 h-px bg-gold/60 mb-4" />
                <p className="font-body text-sm text-white/60 leading-relaxed">{product.description}</p>
              </div>
            </div>
            <h3 className="font-heading text-h3 text-black mt-5">{product.name}</h3>
            <p className="mt-0.5 font-body text-xs uppercase tracking-[0.15em] text-text/50">{product.collection}</p>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-8 flex items-center justify-center gap-2">
        {FEATURED_PRODUCTS.map((_, i) => (
          <button key={i} onClick={() => goTo(i)}
            className={'h-1.5 rounded-full transition-all duration-500 ' + (i === active ? 'w-8 bg-gold' : 'w-1.5 bg-gold/20')} />
        ))}
      </div>
    </div>
  )
}
