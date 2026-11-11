import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function CategoryCard({ category, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{
        duration: 0.5,
        delay: Math.min(index * 0.05, 0.25),
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <Link
        to={`/cardapio?categoria=${category.id}`}
        className="group relative block overflow-hidden rounded-2xl"
      >
        <div className="aspect-[5/4] overflow-hidden">
          <img
            src={category.image}
            alt={category.name}
            loading="lazy"
            className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.05]"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-espresso/25 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5">
          <div>
            <h3 className="font-display text-xl text-cream">{category.name}</h3>
            <p className="mt-1 max-w-[16rem] text-sm text-cream/75">
              {category.description}
            </p>
          </div>
          <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-cream/30 text-cream transition group-hover:bg-cream group-hover:text-espresso">
            <ArrowUpRight size={18} strokeWidth={1.75} />
          </span>
        </div>
      </Link>
    </motion.div>
  )
}
