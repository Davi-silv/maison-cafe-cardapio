import { getFeaturedProducts } from '../../data/products'
import Button from '../ui/Button'
import ProductCard from '../ui/ProductCard'
import SectionHeading from '../ui/SectionHeading'

export default function FeaturedProducts() {
  const featured = getFeaturedProducts().slice(0, 4)

  return (
    <section className="container-maison py-20 md:py-24">
      <div className="mb-2 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading
          eyebrow="Seleção da casa"
          title="Experiências em destaque"
          description="Uma curadoria dos nossos cafés e criações mais pedidos — preparados com precisão e apresentação cuidadosa."
        />
        <Button to="/cardapio" variant="outline" className="shrink-0 self-start sm:self-auto">
          Ver tudo
        </Button>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {featured.map((product, index) => (
          <ProductCard key={product.id} product={product} index={index} />
        ))}
      </div>
    </section>
  )
}
