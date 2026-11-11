import { motion } from 'framer-motion'
import { Clock3, Coffee, Sparkles } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'

const pillars = [
  {
    icon: Coffee,
    title: 'Origens selecionadas',
    text: 'Grãos especiais com rastreabilidade e torra alinhada ao perfil da xícara.',
  },
  {
    icon: Sparkles,
    title: 'Preparação artesanal',
    text: 'Cada bebida e sobremesa é finalizada sob demanda, com técnica e cuidado.',
  },
  {
    icon: Clock3,
    title: 'Ritmo sem pressa',
    text: 'Um ambiente pensado para permanência — conforto, luz suave e atendimento atento.',
  },
]

export default function Experience() {
  return (
    <section className="container-maison py-20 md:py-24">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <SectionHeading
            eyebrow="A experiência"
            title="Mais do que um café. Um ritual."
            description="A Maison Café foi criada para quem valoriza detalhes: aroma, temperatura, textura e a sensação de ser bem recebido."
          />

          <div className="space-y-5">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, duration: 0.45 }}
                  className="flex gap-4 rounded-2xl border border-espresso/8 bg-white/70 p-4"
                >
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cream text-caramel">
                    <Icon size={20} strokeWidth={1.6} />
                  </span>
                  <div>
                    <h3 className="font-display text-lg text-espresso">
                      {pillar.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-espresso/65">
                      {pillar.text}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="overflow-hidden rounded-[1.75rem] shadow-[var(--shadow-lift)]">
            <img
              src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1200&q=80"
              alt="Barista preparando café especial"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-5 -left-3 max-w-[220px] rounded-2xl bg-espresso p-5 text-cream shadow-[var(--shadow-soft)] sm:-left-6">
            <p className="font-display text-2xl italic">Desde 2019</p>
            <p className="mt-2 text-sm text-cream/70">
              Cuidando de cada xícara com excelência artesanal.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
