import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const TESTIMONIALS = [
  {
    quote: 'Lidiana Habesha transformed my vision for my wedding day into something beyond what I could have imagined. The hand-embroidered details on my kemise were breathtaking — a true work of art.',
    name: 'Selam A.',
    photo: '/assets/r1.jpg',
    role: 'Bride, Addis Ababa',
    stars: 5,
  },
  {
    quote: 'The craftsmanship is unmatched. Every piece I own from Lidiana Habesha draws compliments wherever I go. It is Ethiopian heritage reimagined with a sophistication that transcends borders.',
    name: 'Meron T.',
    photo: '/assets/r2.jpg',
    role: 'Fashion Editor, London',
    stars: 5,
  },
  {
    quote: 'Wearing Lidiana Habesha feels like carrying a piece of my culture with me. The fabrics, the cuts, the details — they honour tradition while embracing the modern woman. Truly exceptional.',
    name: 'Hanna K.',
    photo: '/assets/r3.jpg',
    role: 'Designer, New York',
    stars: 5,
  },
  {
    quote: 'I commissioned a custom evening gown for the Ethiopian Film Awards. The team listened to every detail and delivered a masterpiece. Unparalleled service and artistry.',
    name: 'Yordanos B.',
    photo: '/assets/r4.jpg',
    role: 'Actress, Los Angeles',
    stars: 5,
  },
]

export function TestimonialCarousel() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)

  const next = useCallback(() => {
    setDirection(1)
    setCurrent((c) => (c + 1) % TESTIMONIALS.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [next])

  const goTo = (i: number) => {
    setDirection(i > current ? 1 : -1)
    setCurrent(i)
  }

  const t = TESTIMONIALS[current]

  return (
    <div className="relative mx-auto max-w-3xl">
      <div className="relative min-h-[320px] md:min-h-[280px]">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={current}
            custom={direction}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="absolute inset-0 flex flex-col items-center"
          >
            <span className="font-heading text-[8rem] md:text-[10rem] leading-none text-gold/10 select-none mb-[-2rem]">
              "
            </span>
            <p className="font-body text-base md:text-lg text-text/80 leading-relaxed max-w-2xl px-4 mb-8">
              {t.quote}
            </p>
            <div className="flex items-center gap-4 mb-4">
              <div className="h-14 w-14 rounded-full bg-cover bg-center border border-gold/20"
                style={{ backgroundImage: 'url(' + t.photo + ')' }} />
              <div className="text-left">
                <p className="font-heading text-h4 text-black">{t.name}</p>
                <p className="font-body text-xs text-text/50 uppercase tracking-[0.1em]">{t.role}</p>
              </div>
            </div>
            <div className="flex items-center gap-1 mb-10">
              {Array.from({ length: t.stars }).map((_, i) => (
                <svg key={i} viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5 text-gold">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-16 flex items-center justify-center gap-3">
        {TESTIMONIALS.map((_, i) => (
          <button key={i} onClick={() => goTo(i)}
            className={'h-1.5 transition-all duration-500 rounded-full ' + (i === current ? 'w-8 bg-gold' : 'w-1.5 bg-gold/20 hover:bg-gold/40')} />
        ))}
      </div>
    </div>
  )
}
