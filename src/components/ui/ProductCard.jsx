import { motion } from 'framer-motion'
import { Plus } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useCart } from '../../context/CartContext'
import { formatPrice } from '../../utils/format'

export default function ProductCard({ product, index = 0 }) {
  const { addItem } = useCart()

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.5,
        delay: Math.min(index * 0.06, 0.3),
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group flex flex-col"
    >
      <Link
        to={`/produto/${product.id}`}
        className="relative mb-4 block overflow-hidden rounded-2xl bg-sand/40"
      >
        <div className="aspect-[4/5] overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.04]"
          />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-espresso/25 via-transparent to-transparent opacity-80" />
      </Link>

      <div className="flex flex-1 flex-col gap-2">
        <div className="flex items-start justify-between gap-3">
          <Link to={`/produto/${product.id}`} className="min-w-0">
            <h3 className="font-display text-xl leading-snug text-espresso transition group-hover:text-caramel">
              {product.name}
            </h3>
          </Link>
          <span className="shrink-0 pt-1 text-sm font-medium tabular-nums text-caramel">
            {formatPrice(product.price)}
          </span>
        </div>

        <p className="line-clamp-2 text-sm leading-relaxed text-espresso/60">
          {product.shortDescription}
        </p>

        <div className="mt-auto flex items-center justify-between pt-3">
          <Link
            to={`/produto/${product.id}`}
            className="text-sm font-medium text-espresso/70 underline-offset-4 transition hover:text-espresso hover:underline"
          >
            Detalhes
          </Link>
          <button
            type="button"
            onClick={() => addItem(product)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-espresso text-cream shadow-[var(--shadow-soft)] transition hover:bg-caramel"
            aria-label={`Adicionar ${product.name} ao pedido`}
          >
            <Plus size={18} strokeWidth={1.75} />
          </button>
        </div>
      </div>
    </motion.article>
  )
}
