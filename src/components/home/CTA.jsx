import { motion } from 'framer-motion'
import { cafeInfo } from '../../data/cafe'
import Button from '../ui/Button'

export default function CTA() {
  return (
    <section className="container-maison pb-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
        className="relative overflow-hidden rounded-[2rem] bg-espresso px-8 py-14 text-center text-cream md:px-16"
      >
        <div className="absolute inset-0 opacity-30">
          <img
            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1600&q=80"
            alt=""
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-espresso/80" />
        </div>

        <div className="relative mx-auto max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-sand">
            Reserve seu momento
          </p>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl">
            Visite a Maison Café ou faça seu pedido pelo cardápio digital
          </h2>
          <p className="mt-4 text-cream/70">{cafeInfo.address}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button to="/cardapio" variant="secondary" size="lg">
              Explorar cardápio
            </Button>
            <Button
              href={`https://wa.me/${cafeInfo.whatsapp}`}
              variant="outline"
              size="lg"
              className="border-cream/30 text-cream hover:bg-cream/10"
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp
            </Button>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
