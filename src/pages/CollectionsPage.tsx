import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Container } from '@/components/layout/Container'
import { fadeUp } from '@/animations'
import { COLLECTIONS } from '@/data/collections'

export function CollectionsPage() {
  const { slug } = useParams()

  if (slug) {
    const col = COLLECTIONS.find((c) => c.slug === slug)
    if (!col) {
      return (
        <Container className="pt-40 pb-20 text-center">
          <h1 className="font-heading text-h1 text-black mb-4">Collection Not Found</h1>
          <Link to="/collections" className="font-body text-xs uppercase tracking-[0.25em] text-gold hover:text-gold/80 transition-colors">Back to Collections</Link>
        </Container>
      )
    }
    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <section className="relative h-[70vh] min-h-[450px] bg-cover bg-center flex items-end"
          style={{ backgroundImage: 'url(' + col.image + ')' }}>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <Container className="relative pb-14">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              <p className="font-body text-xs uppercase tracking-[0.25em] text-gold mb-2">{col.year}</p>
              <h1 className="font-heading text-h1 text-white mb-3">{col.name}</h1>
              <p className="font-body text-sm text-white/70 max-w-xl">{col.description}</p>
            </motion.div>
          </Container>
        </section>
        <Container className="py-section text-center">
          <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="font-body text-sm text-text/60 max-w-2xl mx-auto leading-relaxed">
            {col.description}
          </motion.p>
        </Container>
      </motion.div>
    )
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className="pt-36 pb-14 text-center">
        <p className="font-body text-xs uppercase tracking-[0.25em] text-gold mb-4">Collections</p>
        <h1 className="font-heading text-h1 text-black leading-snug">Our Collections</h1>
      </div>
      <Container className="pb-section">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {COLLECTIONS.map((col, i) => (
            <motion.div key={col.id}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: i * 0.08, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}>
              <Link to={'/collections/' + col.slug} className="group block">
                <div className="relative overflow-hidden mb-6">
                  <div className="aspect-[3/4] bg-cover bg-center transition-all duration-700 group-hover:scale-[1.04]"
                    style={{ backgroundImage: 'url(' + col.image + ')' }} />
                </div>
                <p className="font-body text-xs uppercase tracking-[0.25em] text-gold mb-1">{col.year}</p>
                <h3 className="font-heading text-h3 text-black group-hover:text-gold transition-colors duration-300 mb-1">{col.name}</h3>
                <p className="font-body text-xs uppercase tracking-[0.15em] text-text/50">{col.subtitle}</p>
                <p className="mt-3 font-body text-xs uppercase tracking-[0.15em] text-gold">See More →</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </motion.div>
  )
}
