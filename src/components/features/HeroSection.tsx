import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ChevronDown } from 'lucide-react'
import { HERO_IMAGES } from '@/data/collections'

export function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${HERO_IMAGES[0]})` }}
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 6, ease: [0.25, 0.1, 0.25, 1] }}
      />
      <div className="absolute inset-0 bg-black/15" />

      <div className="relative flex h-full flex-col items-center justify-center px-8 text-center text-white">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-6 font-body text-xs uppercase tracking-[0.25em] text-white/60"
        >
          Lidiana Habesha
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="font-heading text-hero md:text-[5.5rem] lg:text-[6.5rem] leading-tight mb-6"
        >
          Modern Ethiopian
          <br />
          <span className="italic font-light">Fashion</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="max-w-lg font-body text-sm md:text-base leading-relaxed text-white/70 mb-10"
        >
          Lidiana Habesha creates timeless Ethiopian dresses, blending rich cultural heritage with modern luxury. Each piece is crafted with intention, designed to endure.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-col gap-4 sm:flex-row"
        >
          <Link
            to="/collections"
            className="border border-white/70 px-10 py-3.5 font-body text-xs uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-white hover:text-black"
          >
            Explore Collection
          </Link>
          <Link
            to="/contact"
            className="border border-white/70 px-10 py-3.5 font-body text-xs uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-white hover:text-black"
          >
            Visit Boutique
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        >
          <ChevronDown size={20} className="text-white/50" />
        </motion.div>
      </motion.div>
    </section>
  )
}
