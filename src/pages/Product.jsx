import { motion } from 'framer-motion'
import { ArrowLeft, Clock3, ShoppingBag } from 'lucide-react'
import { useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import Button from '../components/ui/Button'
import ProductCard from '../components/ui/ProductCard'
import QuantityControl from '../components/ui/QuantityControl'
import { useCart } from '../context/CartContext'
import { getCategoryById } from '../data/categories'
import { getProductById, getProductsByCategory } from '../data/products'
import { formatPrice } from '../utils/format'

export default function Product() {
  const { id } = useParams()
  const product = getProductById(id)
  const { addItem } = useCart()
  const [quantity, setQuantity] = useState(1)
  const [added, setAdded] = useState(false)

  if (!product) {
    return <Navigate to="/cardapio" replace />
  }

  const category = getCategoryById(product.categoryId)
  const related = getProductsByCategory(product.categoryId)
    .filter((item) => item.id !== product.id)
    .slice(0, 3)

  const handleAdd = () => {
    addItem(product, quantity)
    setAdded(true)
    window.setTimeout(() => setAdded(false), 1800)
  }

  return (
    <div className="pb-16 pt-8">
      <div className="container-maison">
        <Link
          to="/cardapio"
          className="mb-8 inline-flex items-center gap-2 text-sm text-espresso/60 transition hover:text-espresso"
        >
          <ArrowLeft size={16} strokeWidth={1.75} />
          Voltar ao cardápio
        </Link>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="overflow-hidden rounded-[1.75rem] bg-sand/30 shadow-[var(--shadow-soft)]"
          >
            <img
              src={product.image}
              alt={product.name}
              className="aspect-[4/5] w-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col"
          >
            {category ? (
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-caramel">
                {category.name}
              </p>
            ) : null}

            <h1 className="mt-3 font-display text-4xl leading-tight text-espresso sm:text-5xl">
              {product.name}
            </h1>

            <p className="mt-4 text-2xl font-medium tabular-nums text-caramel">
              {formatPrice(product.price)}
            </p>

            <p className="mt-6 text-base leading-relaxed text-espresso/70">
              {product.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {product.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-espresso/10 bg-white px-3 py-1 text-xs uppercase tracking-wide text-espresso/60"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-6 inline-flex items-center gap-2 text-sm text-espresso/55">
              <Clock3 size={16} strokeWidth={1.75} />
              Preparo: {product.prepTime}
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <QuantityControl value={quantity} onChange={setQuantity} />
              <Button
                size="lg"
                onClick={handleAdd}
                className="min-w-[200px]"
              >
                <ShoppingBag size={18} strokeWidth={1.75} />
                {added ? 'Adicionado' : 'Adicionar ao pedido'}
              </Button>
            </div>

            <Button
              to="/carrinho"
              variant="ghost"
              className="mt-3 self-start px-0 hover:bg-transparent"
            >
              Ir para o carrinho
            </Button>
          </motion.div>
        </div>

        {related.length > 0 ? (
          <section className="mt-20">
            <h2 className="mb-8 font-display text-3xl text-espresso">
              Você também pode gostar
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item, index) => (
                <ProductCard key={item.id} product={item} index={index} />
              ))}
            </div>
          </section>
        ) : null}
      </div>
    </div>
  )
}
