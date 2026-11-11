import { AnimatePresence, motion } from 'framer-motion'
import { Search, X } from 'lucide-react'
import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import ProductCard from '../components/ui/ProductCard'
import SectionHeading from '../components/ui/SectionHeading'
import { categories } from '../data/categories'
import { products } from '../data/products'

export default function Menu() {
  const [searchParams, setSearchParams] = useSearchParams()
  const activeCategory = searchParams.get('categoria') || 'todos'
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase()

    return products.filter((product) => {
      const matchesCategory =
        activeCategory === 'todos' || product.categoryId === activeCategory
      const matchesQuery =
        !normalized ||
        product.name.toLowerCase().includes(normalized) ||
        product.shortDescription.toLowerCase().includes(normalized) ||
        product.tags.some((tag) => tag.includes(normalized))

      return matchesCategory && matchesQuery && product.available
    })
  }, [activeCategory, query])

  const setCategory = (id) => {
    if (id === 'todos') {
      setSearchParams({})
      return
    }
    setSearchParams({ categoria: id })
  }

  return (
    <div className="pb-16 pt-10">
      <div className="container-maison">
        <SectionHeading
          eyebrow="Cardápio"
          title="Escolha o seu momento"
          description="Filtre por categoria, busque pelo nome ou explore nossa seleção completa de cafés, bebidas e confeitaria."
        />

        <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex gap-2 overflow-x-auto pb-1">
            <FilterChip
              active={activeCategory === 'todos'}
              onClick={() => setCategory('todos')}
            >
              Todos
            </FilterChip>
            {categories.map((category) => (
              <FilterChip
                key={category.id}
                active={activeCategory === category.id}
                onClick={() => setCategory(category.id)}
              >
                {category.name}
              </FilterChip>
            ))}
          </div>

          <label className="relative w-full max-w-sm">
            <Search
              size={16}
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-espresso/40"
            />
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Buscar no cardápio..."
              className="h-12 w-full rounded-xl border border-espresso/10 bg-white pl-11 pr-10 text-sm text-espresso outline-none transition placeholder:text-espresso/35 focus:border-caramel/50"
            />
            {query ? (
              <button
                type="button"
                aria-label="Limpar busca"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-espresso/40 hover:text-espresso"
                onClick={() => setQuery('')}
              >
                <X size={16} />
              </button>
            ) : null}
          </label>
        </div>

        <p className="mb-6 text-sm text-espresso/50">
          {filtered.length}{' '}
          {filtered.length === 1 ? 'item encontrado' : 'itens encontrados'}
        </p>

        <AnimatePresence mode="wait">
          {filtered.length > 0 ? (
            <motion.div
              key={`${activeCategory}-${query}`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
            >
              {filtered.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="rounded-2xl border border-dashed border-espresso/15 bg-white/60 px-6 py-16 text-center"
            >
              <p className="font-display text-2xl text-espresso">
                Nenhum item encontrado
              </p>
              <p className="mt-2 text-sm text-espresso/60">
                Ajuste os filtros ou tente outro termo de busca.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

function FilterChip({ children, active, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`shrink-0 rounded-xl px-4 py-2.5 text-sm transition ${
        active
          ? 'bg-espresso text-cream shadow-[var(--shadow-soft)]'
          : 'border border-espresso/10 bg-white text-espresso/70 hover:border-espresso/25 hover:text-espresso'
      }`}
    >
      {children}
    </button>
  )
}
