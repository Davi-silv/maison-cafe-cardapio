import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { cafeInfo } from '../../data/cafe'
import Button from '../ui/Button'

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1501339847302-ac426a4efe4f?auto=format&fit=crop&w=2000&q=80"
          alt="Ambiente acolhedor da Maison Café"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-espresso/88 via-espresso/65 to-espresso/35" />
        <div className="absolute inset-0 grain opacity-40" />
      </div>

      <div className="container-maison relative flex min-h-[92vh] items-end pb-20 pt-28 md:items-center md:pb-24">
        <div className="max-w-xl text-cream">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl italic leading-none sm:text-5xl md:text-6xl"
          >
            {cafeInfo.name}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.22 }}
            className="mt-5 font-display text-2xl font-medium leading-snug text-cream sm:text-3xl"
          >
            Coffee & Experience
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.34 }}
            className="mt-5 max-w-md text-base leading-relaxed text-cream/75"
          >
            {cafeInfo.slogan} Cafés especiais, confeitaria artesanal e uma
            pausa com elegância.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.46 }}
            className="mt-9 flex flex-wrap gap-3"
          >
            <Button to="/cardapio" variant="secondary" size="lg">
              Ver cardápio
              <ArrowRight size={18} strokeWidth={1.75} />
            </Button>
            <Button
              to="/sobre"
              variant="outline"
              size="lg"
              className="border-cream/30 text-cream hover:bg-cream/10"
            >
              Nossa história
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
