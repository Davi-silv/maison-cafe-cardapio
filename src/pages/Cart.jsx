import { AnimatePresence, motion } from 'framer-motion'
import { ShoppingBag, Trash2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import Button from '../components/ui/Button'
import QuantityControl from '../components/ui/QuantityControl'
import SectionHeading from '../components/ui/SectionHeading'
import { useCart } from '../context/CartContext'
import { cafeInfo } from '../data/cafe'
import { formatPrice } from '../utils/format'

export default function Cart() {
  const {
    items,
    subtotal,
    itemCount,
    updateQuantity,
    removeItem,
    clearCart,
  } = useCart()

  const whatsappMessage = encodeURIComponent(
    [
      `Olá, ${cafeInfo.name}! Gostaria de fazer um pedido:`,
      '',
      ...items.map(
        (item) =>
          `• ${item.quantity}x ${item.name} — ${formatPrice(item.price * item.quantity)}`,
      ),
      '',
      `Total: ${formatPrice(subtotal)}`,
    ].join('\n'),
  )

  return (
    <div className="pb-16 pt-10">
      <div className="container-maison">
        <SectionHeading
          eyebrow="Pedido"
          title="Seu carrinho"
          description="Revise os itens, ajuste as quantidades e finalize pelo WhatsApp. Persistência automática neste dispositivo."
        />

        {items.length === 0 ? (
          <div className="rounded-[1.75rem] border border-dashed border-espresso/15 bg-white/70 px-6 py-20 text-center">
            <ShoppingBag
              size={36}
              strokeWidth={1.5}
              className="mx-auto text-caramel"
            />
            <p className="mt-5 font-display text-3xl text-espresso">
              Carrinho vazio
            </p>
            <p className="mt-2 text-sm text-espresso/60">
              Explore o cardápio e adicione suas escolhas.
            </p>
            <Button to="/cardapio" className="mt-8" variant="secondary">
              Ver cardápio
            </Button>
          </div>
        ) : (
          <div className="grid gap-8 lg:grid-cols-[1.4fr_0.8fr]">
            <div className="space-y-4">
              <AnimatePresence initial={false}>
                {items.map((item) => (
                  <motion.article
                    key={item.id}
                    layout
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="flex gap-4 rounded-2xl border border-espresso/8 bg-white p-4 shadow-[var(--shadow-soft)] sm:gap-5 sm:p-5"
                  >
                    <Link
                      to={`/produto/${item.id}`}
                      className="h-24 w-20 shrink-0 overflow-hidden rounded-xl sm:h-28 sm:w-24"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-cover"
                      />
                    </Link>

                    <div className="flex min-w-0 flex-1 flex-col">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <Link
                            to={`/produto/${item.id}`}
                            className="font-display text-xl text-espresso transition hover:text-caramel"
                          >
                            {item.name}
                          </Link>
                          <p className="mt-1 text-sm text-espresso/50">
                            {formatPrice(item.price)} cada
                          </p>
                        </div>
                        <button
                          type="button"
                          aria-label={`Remover ${item.name}`}
                          onClick={() => removeItem(item.id)}
                          className="rounded-lg p-2 text-espresso/40 transition hover:bg-cream hover:text-espresso"
                        >
                          <Trash2 size={16} strokeWidth={1.75} />
                        </button>
                      </div>

                      <div className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-4">
                        <QuantityControl
                          size="sm"
                          value={item.quantity}
                          onChange={(value) => updateQuantity(item.id, value)}
                          min={0}
                        />
                        <p className="text-sm font-medium tabular-nums text-caramel">
                          {formatPrice(item.price * item.quantity)}
                        </p>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </AnimatePresence>

              <button
                type="button"
                onClick={clearCart}
                className="text-sm text-espresso/50 underline-offset-4 transition hover:text-espresso hover:underline"
              >
                Limpar carrinho
              </button>
            </div>

            <aside className="h-fit rounded-[1.75rem] bg-espresso p-6 text-cream shadow-[var(--shadow-lift)] sm:p-8">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-sand">
                Resumo
              </p>
              <div className="mt-6 space-y-3 text-sm">
                <div className="flex justify-between text-cream/70">
                  <span>Itens</span>
                  <span>{itemCount}</span>
                </div>
                <div className="flex justify-between border-t border-cream/10 pt-3 text-lg">
                  <span>Total</span>
                  <span className="font-medium tabular-nums text-sand">
                    {formatPrice(subtotal)}
                  </span>
                </div>
              </div>

              <Button
                href={`https://wa.me/${cafeInfo.whatsapp}?text=${whatsappMessage}`}
                variant="secondary"
                size="lg"
                className="mt-8 w-full"
                target="_blank"
                rel="noreferrer"
              >
                Finalizar no WhatsApp
              </Button>

              <Button
                to="/cardapio"
                variant="outline"
                className="mt-3 w-full border-cream/25 text-cream hover:bg-cream/10"
              >
                Continuar escolhendo
              </Button>

              <p className="mt-5 text-xs leading-relaxed text-cream/45">
                Demo de cardápio digital — sem pagamento online nesta versão.
                Integração futura com PHP e Supabase.
              </p>
            </aside>
          </div>
        )}
      </div>
    </div>
  )
}
