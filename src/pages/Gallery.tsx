import { motion } from 'framer-motion'
import { Container } from '@/components/layout/Container'
import { GALLERY } from '@/data/collections'

export function Gallery() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className="pt-36 pb-14 text-center">
        <p className="font-body text-xs uppercase tracking-[0.25em] text-gold mb-4">Moments</p>
        <h1 className="font-heading text-h1 text-black leading-snug">Gallery</h1>
      </div>
      <Container className="pb-section">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {GALLERY.map((img, i) => (
            <motion.div key={img.src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.6 }}
              className={'overflow-hidden group ' + (i === 0 ? 'lg:col-span-2 lg:row-span-2' : '')}>
              <div className={'bg-cover bg-center transition-all duration-700 group-hover:scale-[1.03] ' + (i === 0 ? 'aspect-[4/5] lg:aspect-auto lg:h-full min-h-[400px]' : 'aspect-[4/5]')}
                style={{ backgroundImage: 'url(' + img.src + ')' }} />
              {img.caption && (
                <p className="mt-3 font-body text-xs text-text/50 tracking-[0.1em]">{img.caption}</p>
              )}
            </motion.div>
          ))}
        </div>
      </Container>
    </motion.div>
  )
}
