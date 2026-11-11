import { AnimatePresence, motion } from 'framer-motion'
import { Menu, ShoppingBag, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useCart } from '../../context/CartContext'
import { cafeInfo } from '../../data/cafe'

const navLinks = [
  { to: '/', label: 'Início' },
  { to: '/cardapio', label: 'Cardápio' },
  { to: '/sobre', label: 'Sobre' },
]

export default function Header() {
  const { itemCount } = useCart()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [location.pathname, location.search])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition duration-300 ${
        scrolled
          ? 'border-b border-espresso/10 bg-cream/90 backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <div className="container-maison flex items-center justify-between gap-4 py-4">
        <Link to="/" className="group flex items-center gap-3">
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-espresso text-cream shadow-[var(--shadow-soft)]">
            <svg viewBox="0 0 32 32" className="h-5 w-5" aria-hidden>
              <path
                d="M10 20c0-4.5 3.2-7.8 6-10 2.8 2.2 6 5.5 6 10 0 3.2-2.7 5.5-6 5.5s-6-2.3-6-5.5z"
                fill="#B88A58"
              />
              <path
                d="M14 11c1.2-1.8 2.2-3 2.2-4.6 1.6 1.2 3.2 2.8 4.2 4.8"
                fill="none"
                stroke="#D9C4A6"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
          </span>
          <span className="leading-tight">
            <span className="block font-display text-lg tracking-wide text-espresso">
              {cafeInfo.name}
            </span>
            <span className="block text-[11px] uppercase tracking-[0.18em] text-espresso/50">
              {cafeInfo.tagline}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `text-sm tracking-wide transition ${
                  isActive
                    ? 'font-medium text-espresso'
                    : 'text-espresso/60 hover:text-espresso'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/carrinho"
            className="relative inline-flex h-11 w-11 items-center justify-center rounded-xl border border-espresso/10 bg-white/70 text-espresso transition hover:border-caramel/40 hover:text-caramel"
            aria-label="Abrir carrinho"
          >
            <ShoppingBag size={18} strokeWidth={1.75} />
            {itemCount > 0 ? (
              <span className="absolute -right-1.5 -top-1.5 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-caramel px-1 text-[10px] font-semibold text-white">
                {itemCount}
              </span>
            ) : null}
          </Link>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-espresso/10 bg-white/70 text-espresso md:hidden"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28 }}
            className="overflow-hidden border-t border-espresso/10 bg-cream md:hidden"
          >
            <div className="container-maison flex flex-col gap-1 py-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) =>
                    `rounded-xl px-4 py-3 text-sm ${
                      isActive
                        ? 'bg-espresso text-cream'
                        : 'text-espresso/80 hover:bg-white'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <NavLink
                to="/carrinho"
                className="rounded-xl px-4 py-3 text-sm text-espresso/80 hover:bg-white"
              >
                Carrinho {itemCount > 0 ? `(${itemCount})` : ''}
              </NavLink>
            </div>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
