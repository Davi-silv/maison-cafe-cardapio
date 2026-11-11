import { motion } from 'framer-motion'
import { cafeInfo } from '../data/cafe'
import Button from '../components/ui/Button'
import SectionHeading from '../components/ui/SectionHeading'

export default function About() {
  return (
    <div className="pb-16 pt-10">
      <div className="container-maison">
        <SectionHeading
          eyebrow="Sobre nós"
          title={cafeInfo.name}
          description={cafeInfo.description}
        />

        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="overflow-hidden rounded-[1.75rem] shadow-[var(--shadow-lift)]"
          >
            <img
              src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80"
              alt="Interior da Maison Café"
              className="aspect-[4/5] w-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="font-display text-3xl leading-snug text-espresso">
              {cafeInfo.slogan}
            </p>
            <p className="mt-6 text-base leading-relaxed text-espresso/70">
              {cafeInfo.about}
            </p>

            <div className="mt-8 space-y-4 rounded-2xl border border-espresso/8 bg-white/70 p-6">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-caramel">
                Horários
              </p>
              {cafeInfo.hours.map((slot) => (
                <div
                  key={slot.day}
                  className="flex items-center justify-between gap-4 border-b border-espresso/5 pb-3 text-sm last:border-0 last:pb-0"
                >
                  <span className="text-espresso/70">{slot.day}</span>
                  <span className="font-medium text-espresso">{slot.time}</span>
                </div>
              ))}
            </div>

            <p className="mt-6 text-sm text-espresso/60">{cafeInfo.address}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button to="/cardapio" variant="secondary">
                Ver cardápio
              </Button>
              <Button
                href={`https://wa.me/${cafeInfo.whatsapp}`}
                variant="outline"
                target="_blank"
                rel="noreferrer"
              >
                Falar conosco
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
