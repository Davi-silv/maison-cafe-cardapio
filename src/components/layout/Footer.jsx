import { AtSign, MapPin, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import { cafeInfo } from '../../data/cafe'

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-espresso/10 bg-espresso text-cream">
      <div className="container-maison grid gap-12 py-16 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <p className="font-display text-3xl">{cafeInfo.name}</p>
          <p className="mt-2 text-sm uppercase tracking-[0.2em] text-sand">
            {cafeInfo.tagline}
          </p>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-cream/70">
            {cafeInfo.slogan}
          </p>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-sand">
            Navegação
          </p>
          <ul className="mt-4 space-y-3 text-sm text-cream/75">
            <li>
              <Link to="/" className="transition hover:text-cream">
                Início
              </Link>
            </li>
            <li>
              <Link to="/cardapio" className="transition hover:text-cream">
                Cardápio
              </Link>
            </li>
            <li>
              <Link to="/sobre" className="transition hover:text-cream">
                Sobre
              </Link>
            </li>
            <li>
              <Link to="/carrinho" className="transition hover:text-cream">
                Carrinho
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-sand">
            Contato
          </p>
          <ul className="mt-4 space-y-4 text-sm text-cream/75">
            <li className="flex gap-3">
              <MapPin size={16} className="mt-0.5 shrink-0 text-caramel" />
              <span>{cafeInfo.address}</span>
            </li>
            <li className="flex gap-3">
              <Phone size={16} className="mt-0.5 shrink-0 text-caramel" />
              <span>{cafeInfo.phone}</span>
            </li>
            <li className="flex gap-3">
              <AtSign size={16} className="mt-0.5 shrink-0 text-caramel" />
              <a
                href={cafeInfo.social.instagram}
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-cream"
              >
                @maisoncafe
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="container-maison flex flex-col gap-2 py-5 text-xs text-cream/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {cafeInfo.name}. Todos os direitos
            reservados.
          </p>
          <p>
            Demo comercial por{' '}
            <span className="text-sand">{cafeInfo.evolvedBy}</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
