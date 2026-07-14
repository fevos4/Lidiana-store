import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ChevronDown } from 'lucide-react'
import { Container } from '@/components/layout/Container'
import { fadeUp } from '@/animations'
import { COLLECTIONS } from '@/data/collections'
import { FEATURED_PRODUCTS } from '@/data/products'
import { FeaturedCarousel } from '@/components/features/FeaturedCarousel'
import { CollectionsCarousel } from '@/components/features/CollectionsCarousel'
import { TestimonialCarousel } from '@/components/features/TestimonialCarousel'

export function Home() {
  const [flippedId, setFlippedId] = useState<string | null>(null)

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <section className="relative h-screen w-full overflow-hidden bg-white">
        <motion.div
          className="absolute inset-0 bg-cover bg-center blur-[2px]"
          style={{ backgroundImage: 'url(/assets/hero2.png)' }}
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 6, ease: [0.25, 0.1, 0.25, 1] }}
        />
        <div className="absolute inset-0 bg-white/30" />
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-white to-transparent pointer-events-none" />
        <div className="relative flex h-full flex-col items-center justify-center px-5 text-center md:px-8">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="mb-4 font-body text-xs uppercase tracking-[0.25em] text-gold md:mb-6"
          >Lidiana Habesha</motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="font-heading text-[2.5rem] leading-[1.05] mb-5 text-black md:text-hero md:text-[5.5rem] lg:text-[6.5rem] md:leading-tight md:mb-6"
            style={{ textShadow: '0 4px 20px rgba(0,0,0,0.15)' }}
          >
            Modern Ethiopian<br /><span className="font-light italic">Fashion</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="max-w-sm font-body text-sm leading-relaxed text-text/60 mb-8 md:max-w-lg md:text-base md:mb-10"
          >
            Lidiana Habesha creates timeless Ethiopian dresses, blending rich cultural heritage with modern luxury. Each piece is crafted with intention, designed to endure.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex flex-row items-center"
          >
            <Link to="/collections"
              className="rounded-sm border border-gold px-8 py-3 font-body text-xs uppercase tracking-[0.2em] text-gold transition-all duration-300 hover:bg-gold hover:text-white md:px-10 md:py-3.5">
              Explore Collection
            </Link>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}>
            <ChevronDown size={20} className="text-black/20" />
          </motion.div>
        </motion.div>
      </section>

      <section className="py-section">
        <Container>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} className="mb-16 text-center">
            <p className="font-body text-xs uppercase tracking-[0.25em] text-gold mb-4">The Edit</p>
            <h2 className="font-heading text-h1 md:text-[2.75rem] text-black leading-snug">Featured Dresses</h2>
            <p className="mt-4 font-body text-sm text-text/50 max-w-md mx-auto">Six exceptional pieces chosen for their craftsmanship and narrative.</p>
          </motion.div>
          <div className="md:hidden">
            <FeaturedCarousel />
          </div>
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-10">
            {FEATURED_PRODUCTS.map((product, i) => {
              const isFlipped = flippedId === product.id
              return (
              <motion.div key={product.id}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ delay: i * 0.08, duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
                className="group cursor-pointer [perspective:1000px]"
                onClick={() => setFlippedId(isFlipped ? null : product.id)}>
                <div className={'relative aspect-[3/4] [transform-style:preserve-3d] transition-transform duration-[1.2s] ease-out ' + (isFlipped ? '[transform:rotateY(180deg)]' : '')}>
                  <div className="absolute inset-0 [backface-visibility:hidden] overflow-hidden">
                    <div className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: 'url(' + product.image + ')' }} />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    <div className="absolute bottom-0 left-0 right-0 bg-black/60 translate-y-full transition-transform duration-500 group-hover:translate-y-0">
                      <p className="font-body text-xs uppercase tracking-[0.2em] text-gold text-center py-3">Click to view</p>
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
              )
            })}
          </div>
        </Container>
      </section>

      <Container className="py-section">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} className="mb-16 text-center">
          <p className="font-body text-xs uppercase tracking-[0.25em] text-gold mb-4">Collections</p>
          <h2 className="font-heading text-h1 md:text-[2.75rem] text-black leading-snug">Our Collections</h2>
          <p className="mt-4 font-body text-sm text-text/50 max-w-md mx-auto">Designed for every unforgettable moment.</p>
        </motion.div>
        <div className="md:hidden">
          <CollectionsCarousel />
        </div>
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-12">
          {COLLECTIONS.map((col, i) => (
            <motion.div key={col.id}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: i * 0.1, duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}>
              <Link to={'/collections/' + col.slug} className="group block">
                <div className="relative overflow-hidden mb-5">
                  <div className="aspect-[3/4] bg-cover bg-center transition-all duration-700 ease-out group-hover:scale-[1.06]"
                    style={{ backgroundImage: 'url(' + col.image + ')' }} />
                </div>
                <div className="relative">
                  <h3 className="font-heading text-h3 text-black group-hover:text-gold transition-colors duration-300">{col.name}</h3>
                  <p className="mt-1 font-body text-xs uppercase tracking-[0.15em] text-text/50">{col.subtitle}</p>
                  <span className="mt-3 block h-px w-0 bg-gold transition-all duration-500 group-hover:w-full" />
                  <p className="mt-3 font-body text-xs uppercase tracking-[0.15em] text-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300">See More →</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>

      <section className="py-[60px_0_30px] md:py-section" style={{ backgroundColor: '#0a0a0a' }}>
        <Container>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} className="mb-8 text-center md:mb-16">
            <p className="font-body text-[11px] uppercase tracking-[2px] text-gold mb-4">The Lidiana Experience</p>
            <h2 className="font-heading text-[30px] md:text-h1 lg:text-[2.75rem] leading-[1.15] md:leading-snug text-white">Defined by Excellence</h2>
          </motion.div>
          <div className="md:grid md:grid-cols-4 md:gap-0">
            {[
              { title: 'Premium Quality', icon: 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z', desc: 'Uncompromising standards in every stitch, fabric, and finish.' },
              { title: 'Handcrafted', icon: 'M16 2l4 4-4 4M6 22l-4-4 4-4M8 2l-6 6 6 6M16 22l6-6-6-6', desc: 'Time-honoured techniques passed through generations of artisans.' },
              { title: 'Custom Designs', icon: 'M12 20h9M16.5 3.5l-9 9M7 21l-4-4', desc: 'Bespoke creations tailored to your unique vision and silhouette.', featured: true },
              { title: 'Worldwide Inspiration', icon: 'M22 12c0 5.52-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2m0 20c2.76 0 5-4.48 5-10S14.76 2 12 2m0 20c-2.76 0-5-4.48-5-10S9.24 2 12 2m-10 0h20M2 12h20', desc: 'Drawing from Ethiopian heritage with a global modernist lens.' },
            ].map((item, i) => (
              <motion.div key={item.title}
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ delay: i * 0.12, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                className={
                  'group relative flex items-start gap-4 py-[18px] ' +
                  (i < 3 ? 'border-b border-[#262219] md:border-b-0 ' : '') +
                  (item.featured
                    ? 'bg-[#141210] border-l-2 border-l-gold -mx-5 px-5 md:-mx-8 md:px-8 md:bg-[#141210] md:border-l-2 md:border-l-gold md:block md:text-center '
                    : 'md:block md:px-8 md:text-center ') +
                  (i < 3 ? 'md:border-r md:border-gold/20 ' : '') +
                  'md:py-12 md:py-16'
                }>
                <div className="mt-0.5 flex h-[22px] w-[22px] shrink-0 items-center justify-center transition-transform duration-500 group-hover:scale-110 md:mx-auto md:mb-5 md:h-10 md:w-10">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="h-[22px] w-[22px] text-gold md:h-9 md:w-9 transition-colors duration-300">
                    <path d={item.icon} />
                  </svg>
                </div>
                <div className="flex-1 md:text-center">
                  <h3 className="font-heading text-[17px] md:text-h3 text-white mb-1 md:mb-2.5 transition-colors duration-300 group-hover:text-gold">{item.title}</h3>
                  <p className="font-body text-[13px] md:text-xs leading-[1.5] md:leading-relaxed text-[#8f8c84] max-w-[220px] md:mx-auto">
                    {item.desc}
                  </p>
                  <div className="mt-4 h-px w-0 bg-gold transition-all duration-500 group-hover:w-12 md:mx-auto md:mt-6" />
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white overflow-hidden mt-10 md:mt-0">
        <div className="md:py-section">
          <div className="md:grid md:grid-cols-2 md:gap-20 md:items-center">
            <div className="relative max-h-[220px] overflow-hidden md:max-h-none md:order-none">
              <img src="/assets/lidiana.jpg" alt="Lidiana Habesha" className="w-full object-cover h-[calc(220px+40px)] -mt-10 md:h-full md:mt-0 object-center" />
            </div>
            <motion.div
              initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              className="px-[22px] py-[28px_0_26px] md:px-0 md:py-0">
              <p className="font-body text-[11px] uppercase tracking-[2px] text-gold mb-3 md:text-xs md:tracking-[0.25em] md:mb-4">Our Story</p>
              <h2 className="font-heading text-[26px] leading-[1.2] text-black mb-5 md:text-h1 md:leading-snug md:mb-6">
                The Story Behind<br className="hidden md:block" />Lidiana Habesha
              </h2>
              <p className="font-body text-sm leading-[1.6] md:leading-relaxed mb-5" style={{ color: '#5a6270' }}>
                Lidiana Habesha was born from a deep reverence for Ethiopian heritage — a desire to honour the artistry of generations past while forging a future where tradition and contemporary fashion exist in harmony.
              </p>
              <p className="font-body text-sm italic leading-[1.55] md:leading-relaxed mb-6 md:mb-8 border-l-2 border-gold pl-[14px] md:pl-5" style={{ color: '#3a4250' }}>
                "We do not simply make clothes. We weave stories, preserve legacies, and dress the modern woman in the soul of Ethiopia."
              </p>
              <div className="mb-6 h-px w-16 bg-gold md:mb-8" />
              <ul className="space-y-[12px] md:space-y-2.5">
                {['Luxury Craftsmanship', 'Premium Fabrics', 'Handmade Details', 'Modern Ethiopian Identity'].map((item) => (
                  <li key={item} className="font-body text-sm text-text/70 flex items-center gap-3">
                    <span className="h-px w-4 bg-gold/60" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/about"
                className="mt-8 block w-full rounded-sm border border-gold bg-gold px-8 py-[15px] font-body text-[15px] uppercase text-center tracking-[1.5px] text-white transition-all duration-300 hover:bg-gold/90 md:inline-flex md:w-auto md:py-3 md:text-xs md:tracking-[0.2em] md:text-gold md:bg-transparent hover:md:bg-gold hover:md:text-white">
                Discover Our Story
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-section bg-[#F7F5F2] text-center overflow-hidden">
        <Container>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} className="mb-16">
            <p className="font-body text-xs uppercase tracking-[0.25em] text-gold mb-4">Testimonials</p>
            <h2 className="font-heading text-h1 md:text-[2.75rem] text-black leading-snug">Client Reflections</h2>
          </motion.div>
          <TestimonialCarousel />
        </Container>
      </section>

      <section className="py-section bg-white overflow-hidden">
        <Container>
          <div className="grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 1.04 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
              className="aspect-[4/5] bg-cover bg-center"
              style={{ backgroundImage: 'url(/assets/b1.jpg)' }}
            />
            <motion.div
              initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}>
              <p className="font-body text-xs uppercase tracking-[0.25em] text-gold mb-4">Visit Our Boutique</p>
              <h2 className="font-heading text-h1 text-black leading-snug mb-6">
                Step Into<br />Lidiana Habesha
              </h2>
              <p className="font-body text-sm leading-relaxed text-text/70 mb-8">
                Nestled in the heart of Addis Ababa, our boutique is more than a store — it is an invitation into the world of Lidiana Habesha. From the moment you step through the doors, you are surrounded by the textures, scents, and stories that define Ethiopian luxury.
              </p>
              <div className="space-y-5 mb-8">
                {[
                  { title: 'The Store Experience', body: 'Explore our collections in an intimate setting where every detail — from the hand-loomed textiles to the curated playlist — has been considered.' },
                  { title: 'Private Consultation', body: 'Book a one-on-one session with our stylists to discover pieces that resonate with your personal aesthetic.' },
                  { title: 'Luxury Fitting', body: 'Experience the artistry of custom tailoring in our private fitting rooms, designed for comfort and discretion.' },
                ].map((item) => (
                  <div key={item.title} className="border-l border-gold/30 pl-5">
                    <h3 className="font-heading text-h4 text-black mb-1">{item.title}</h3>
                    <p className="font-body text-sm text-text/60 leading-relaxed">{item.body}</p>
                  </div>
                ))}
              </div>
              <Link to="/contact"
                className="inline-flex rounded-sm border border-gold px-8 py-3 font-body text-xs uppercase tracking-[0.2em] text-gold transition-all duration-300 hover:bg-gold hover:text-white">
                Book an Appointment
              </Link>
            </motion.div>
          </div>
        </Container>
      </section>
      <section className="py-section bg-[#F7F5F2] overflow-hidden">
        <Container>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} className="mb-16 text-center">
            <p className="font-body text-xs uppercase tracking-[0.25em] text-gold mb-4">Social</p>
            <h2 className="font-heading text-h1 md:text-[2.75rem] text-black leading-snug">Follow Our Journey</h2>
          </motion.div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
            {[
              { platform: 'instagram', image: '/assets/s1.jpg' },
              { platform: 'tiktok', image: '/assets/s2.jpg' },
              { platform: 'instagram', image: '/assets/s3.jpg' },
              { platform: 'tiktok', image: '/assets/s4.jpg' },
            ].map((item, i) => (
              <motion.a key={item.image} href="#" target="_blank" rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ delay: i * 0.1, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                className="group relative aspect-square overflow-hidden bg-cover bg-center"
                style={{ backgroundImage: 'url(' + item.image + ')' }}>
                <div className="absolute inset-0 bg-black/0 transition-all duration-500 group-hover:bg-black/30" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-all duration-500 group-hover:opacity-100">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border border-gold bg-gold/10 backdrop-blur-sm transition-transform duration-500 group-hover:scale-110">
                    {item.platform === 'instagram' ? (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="h-6 w-6 text-gold">
                        <rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="5" /><circle cx="17.5" cy="6.5" r="1.5" />
                      </svg>
                    ) : (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="h-6 w-6 text-gold">
                        <path d="M9 12l4-4.5M9 12l-4-4.5M9 12l0 10M15 12l-4-4.5M15 12l4-4.5M15 12l0 10" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </div>
                </div>
                <div className="absolute bottom-3 left-3 opacity-0 transition-all duration-500 group-hover:opacity-100">
                  <span className="font-body text-xs uppercase tracking-[0.15em] text-white/80 bg-black/30 backdrop-blur-sm px-2.5 py-1 rounded-sm">{item.platform}</span>
                </div>
              </motion.a>
            ))}
          </div>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }}
            className="mt-12 text-center">
            <a href="https://www.tiktok.com/@lidiana_habesha?is_from_webapp=1&sender_device=pc" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-sm border border-gold px-8 py-3 font-body text-xs uppercase tracking-[0.2em] text-gold transition-all duration-300 hover:bg-gold hover:text-white">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="h-4 w-4">
                <path d="M9 12l4-4.5M9 12l-4-4.5M9 12l0 10M15 12l-4-4.5M15 12l4-4.5M15 12l0 10" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              View More on TikTok
            </a>
          </motion.div>
        </Container>
      </section>

      <section className="py-section bg-[#FAFAF8] overflow-hidden">
        <Container>
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-5">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="lg:col-span-2">
              <p className="font-body text-xs uppercase tracking-[0.25em] text-gold mb-4">Contact</p>
              <h2 className="font-heading text-h1 text-black leading-snug mb-10">Get in Touch</h2>
              <div className="space-y-8">
                {[
                  { label: 'Address', value: 'Medhanialem mall 3rd floor 📍', icon: 'M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z' },
                  { label: 'Phone', value: '0945445386', icon: 'M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z' },
                  { label: 'Telegram', value: 'https://t.me/lidiana_solomon', icon: 'M21.5 2.5l-20 7.5 5.5 2.5 2.5 7 5-4 7 5z' },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center border border-gold/20 bg-white">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="h-4 w-4 text-gold">
                        <path d={item.icon} />
                      </svg>
                    </div>
                    <div>
                      <p className="font-body text-xs uppercase tracking-[0.15em] text-text/50 mb-0.5">{item.label}</p>
                      {item.label === 'Telegram' ? (
                        <a href={item.value} target="_blank" rel="noopener noreferrer" className="font-body text-sm text-text whitespace-pre-line hover:text-gold transition-colors">{item.value}</a>
                      ) : (
                        <p className="font-body text-sm text-text whitespace-pre-line">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-10 pt-10 border-t border-border">
                <p className="font-body text-xs uppercase tracking-[0.15em] text-text/50 mb-4">Follow Us</p>
                <div className="flex items-center gap-4">
                  {['instagram', 'tiktok'].map((platform) => (
                    <a key={platform} href="#" target="_blank" rel="noopener noreferrer"
                      className="flex h-10 w-10 items-center justify-center border border-border bg-white transition-all duration-300 hover:border-gold hover:bg-gold hover:text-white">
                      {platform === 'instagram' ? (
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="h-4 w-4">
                          <rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="5" /><circle cx="17.5" cy="6.5" r="1.5" />
                        </svg>
                      ) : (
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="h-4 w-4">
                          <path d="M9 12l4-4.5M9 12l-4-4.5M9 12l0 10M15 12l-4-4.5M15 12l4-4.5M15 12l0 10" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="lg:col-span-3">
              <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block font-body text-xs uppercase tracking-[0.15em] text-text/50">First Name</label>
                    <input required
                      className="w-full border border-border bg-white px-4 py-3.5 font-body text-sm text-text placeholder:text-text/30 transition-colors duration-300 focus:border-gold focus:outline-none" />
                  </div>
                  <div>
                    <label className="mb-1.5 block font-body text-xs uppercase tracking-[0.15em] text-text/50">Last Name</label>
                    <input required
                      className="w-full border border-border bg-white px-4 py-3.5 font-body text-sm text-text placeholder:text-text/30 transition-colors duration-300 focus:border-gold focus:outline-none" />
                  </div>
                </div>
                <div>
                  <label className="mb-1.5 block font-body text-xs uppercase tracking-[0.15em] text-text/50">Email</label>
                  <input type="email" required
                    className="w-full border border-border bg-white px-4 py-3.5 font-body text-sm text-text placeholder:text-text/30 transition-colors duration-300 focus:border-gold focus:outline-none" />
                </div>
                <div>
                  <label className="mb-1.5 block font-body text-xs uppercase tracking-[0.15em] text-text/50">Message</label>
                  <textarea required rows={4}
                    className="w-full border border-border bg-white px-4 py-3.5 font-body text-sm text-text placeholder:text-text/30 transition-colors duration-300 focus:border-gold focus:outline-none resize-none" />
                </div>
                <button type="submit"
                  className="w-full rounded-sm border border-gold bg-gold px-8 py-4 font-body text-xs uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-gold-hover">
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </Container>
      </section>
    </motion.div>
  )
}
