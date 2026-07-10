import { motion } from 'framer-motion'
import { Send } from 'lucide-react'
import { Container } from '@/components/layout/Container'
import { fadeUp } from '@/animations'

export function Contact() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className="pt-36 pb-14 text-center">
        <p className="font-body text-xs uppercase tracking-[0.25em] text-gold mb-4">Contact</p>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          className="font-heading text-h1 text-black leading-snug">Contact</motion.h1>
      </div>

      <Container className="py-section">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <h2 className="font-heading text-h2 text-black mb-2">Get in Touch</h2>
              <p className="font-body text-sm text-text/60 mb-8">We would love to hear from you. Whether you have a question about our collections, wish to place a custom order, or would like to schedule a boutique visit.</p>
              <form onSubmit={(e) => { e.preventDefault(); window.open('https://t.me/lidiana_solomon', '_blank') }} className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  {[['firstName', 'First Name'], ['lastName', 'Last Name']].map(([k, label]) => (
                    <div key={k}>
                      <label className="mb-1.5 block font-body text-xs uppercase tracking-[0.15em] text-text/60">{label}</label>
                      <input required
                        className="w-full border border-border bg-transparent px-4 py-3 font-body text-sm text-text placeholder:text-text/30 focus:border-gold focus:outline-none transition-colors" />
                    </div>
                  ))}
                </div>
                {[['email', 'Email', 'email'], ['phone', 'Phone', 'tel']].map(([k, label, t]) => (
                  <div key={k}>
                    <label className="mb-1.5 block font-body text-xs uppercase tracking-[0.15em] text-text/60">{label}</label>
                    <input type={t} required
                      className="w-full border border-border bg-transparent px-4 py-3 font-body text-sm text-text placeholder:text-text/30 focus:border-gold focus:outline-none transition-colors" />
                  </div>
                ))}
                <div>
                  <label className="mb-1.5 block font-body text-xs uppercase tracking-[0.15em] text-text/60">Type of Inquiry</label>
                  <select
                    className="w-full border border-border bg-transparent px-4 py-3 font-body text-sm text-text focus:border-gold focus:outline-none transition-colors">
                    <option>General Inquiry</option>
                    <option>Custom Order</option>
                    <option>Boutique Visit</option>
                    <option>Press</option>
                    <option>Wholesale</option>
                  </select>
                </div>
                <div>
                  <label className="mb-1.5 block font-body text-xs uppercase tracking-[0.15em] text-text/60">Message</label>
                  <textarea required rows={5}
                    className="w-full border border-border bg-transparent px-4 py-3 font-body text-sm text-text placeholder:text-text/30 focus:border-gold focus:outline-none transition-colors resize-none" />
                </div>
                <button type="submit"
                  className="inline-flex items-center gap-2 rounded-sm border border-gold px-8 py-3.5 font-body text-xs uppercase tracking-[0.2em] text-gold transition-all duration-300 hover:bg-gold hover:text-white">
                  <Send size={14} /> Send Message
                </button>
              </form>
            </motion.div>
          </div>
          <div className="lg:col-span-2">
            <div className="sticky top-32 space-y-6">
              {[
                { label: 'Address', body: 'Medhanialem mall 3rd floor' },
                { label: 'Phone', body: '0945445386' },
                { label: 'Telegram', body: '@lidiana_solomon' },
                { label: 'Hours', body: 'Monday — Saturday\n10:00 AM — 7:00 PM' },
              ].map((item) => (
                <motion.div key={item.label} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                  className="border border-border p-6">
                  <h3 className="font-heading text-h4 text-black mb-1">{item.label}</h3>
                  {item.label === 'Telegram' ? (
                    <a href="https://t.me/lidiana_solomon" target="_blank" rel="noopener noreferrer" className="font-body text-sm text-text/60 whitespace-pre-line hover:text-gold transition-colors">{item.body}</a>
                  ) : (
                    <p className="font-body text-sm text-text/60 whitespace-pre-line">{item.body}</p>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </motion.div>
  )
}
