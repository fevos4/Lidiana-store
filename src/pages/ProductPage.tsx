import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Container } from '@/components/layout/Container'
import { FEATURED_PRODUCTS } from '@/data/products'

export function ProductPage() {
  const { slug } = useParams()
  const product = FEATURED_PRODUCTS.find((p) => p.slug === slug)

  if (!product) {
    return (
      <Container className="pt-40 pb-20 text-center">
        <h1 className="font-heading text-h1 text-black mb-4">Product Not Found</h1>
        <Link to="/" className="rounded-sm font-body text-xs uppercase tracking-[0.25em] text-gold hover:text-gold/80 transition-colors">Return Home</Link>
      </Container>
    )
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <section className="relative h-[80vh] min-h-[500px] bg-cover bg-center flex items-end"
        style={{ backgroundImage: 'url(' + product.image + ')' }}>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <Container className="relative pb-14">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <p className="font-body text-xs uppercase tracking-[0.25em] text-gold mb-2">{product.collection}</p>
            <h1 className="font-heading text-hero text-white mb-4">{product.name}</h1>
            <Link to="/collections"
              className="inline-flex rounded-sm border border-white/60 px-8 py-3 font-body text-xs uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-white hover:text-black">
              View Collection
            </Link>
          </motion.div>
        </Container>
      </section>
      <Container className="py-section text-center">
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          className="font-body text-sm text-text/60 max-w-2xl mx-auto leading-relaxed">
          Each Lidiana Habesha piece is a celebration of Ethiopian craftsmanship — hand-finished by master artisans using techniques passed down through generations.
        </motion.p>
      </Container>
    </motion.div>
  )
}
