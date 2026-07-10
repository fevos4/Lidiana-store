import { motion } from 'framer-motion'
import { Container } from '@/components/layout/Container'
import { fadeUp } from '@/animations'

export function About() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className="pt-36 pb-14 text-center">
        <p className="font-body text-xs uppercase tracking-[0.25em] text-gold mb-4">Heritage</p>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          className="font-heading text-h1 text-black leading-snug">Our Story</motion.h1>
      </div>

      <Container className="py-section">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-20">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="font-heading text-h2 text-black leading-snug mb-6">Born in Ethiopia,<br />Crafted for the World</h2>
            <p className="font-body text-sm leading-relaxed text-text/70 mb-4">
              Lidiana Habesha was founded to share the extraordinary craftsmanship of Ethiopian artisans with a global audience. Our name pays homage to the Habesha people — an ancient culture known for its rich textile traditions, vibrant ceremonies, and deep sense of community.
            </p>
            <p className="font-body text-sm leading-relaxed text-text/70 mb-4">
              Every piece in our collection begins with a relationship — with the weavers, embroiderers, and artisans who have mastered their craft over decades. We work directly with cooperatives across Ethiopia, from the highlands of Tigray to the markets of Addis Ababa, ensuring fair wages and preserving traditional techniques.
            </p>
            <p className="font-body text-sm leading-relaxed text-text/70">
              Our designs bridge the gap between tradition and modernity, creating pieces that honor Ethiopian heritage while feeling utterly contemporary. We believe that fashion can be a force for cultural preservation and economic empowerment.
            </p>
          </motion.div>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="aspect-[4/5] bg-cover bg-center"
            style={{ backgroundImage: 'url(/assets/b3.jpg)' }} />
        </div>
      </Container>

      <section className="py-section bg-cream">
        <Container>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <p className="font-body text-xs uppercase tracking-[0.25em] text-gold mb-4 text-center">Craftsmanship</p>
            <h2 className="font-heading text-h2 text-black leading-snug mb-12 text-center">The Artisan Process</h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {[
                { title: 'Hand Weaving', body: 'Our textiles are woven on traditional hand-looms by master weavers in the Ethiopian highlands, a process that can take weeks for a single piece.', image: '/assets/col5.jpg' },
                { title: 'Natural Dyes', body: 'We use plant-based dyes derived from indigenous Ethiopian plants, creating rich, nuanced colors that deepen with age.', image: '/assets/col6.jpg' },
                { title: 'Embroidery', body: 'Intricate cross-stitch and filigree work is done entirely by hand, with each artisan bringing their unique style to every piece.', image: '/assets/b4.jpg' },
              ].map((item) => (
                <div key={item.title} className="text-center">
                  <div className="aspect-square bg-cover bg-center mb-6" style={{ backgroundImage: 'url(' + item.image + ')' }} />
                  <h3 className="font-heading text-h3 text-black mb-3">{item.title}</h3>
                  <p className="font-body text-sm text-text/60 leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </Container>
      </section>

      <Container className="py-section">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mx-auto max-w-xl text-center">
          <p className="font-body text-xs uppercase tracking-[0.25em] text-gold mb-4">Values</p>
          <h2 className="font-heading text-h2 text-black leading-snug mb-8">What We Stand For</h2>
          <div className="space-y-8 text-left">
            {[
              { title: 'Cultural Preservation', body: 'We are committed to preserving and celebrating Ethiopian textile traditions, ensuring they thrive for future generations.' },
              { title: 'Ethical Production', body: 'Every piece is made in fair-wage conditions. We partner with artisan cooperatives and invest in their communities.' },
              { title: 'Sustainable Practice', body: 'From natural dyes to zero-waste pattern cutting, sustainability is woven into every decision we make.' },
              { title: 'Timeless Design', body: 'We create pieces that transcend trends — garments meant to be worn, loved, and passed down.' },
            ].map((v) => (
              <div key={v.title}>
                <h3 className="font-heading text-h4 text-black mb-1">{v.title}</h3>
                <p className="font-body text-sm text-text/60 leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </Container>
    </motion.div>
  )
}
