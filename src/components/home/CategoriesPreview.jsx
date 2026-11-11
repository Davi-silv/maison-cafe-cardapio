import { categories } from '../../data/categories'
import CategoryCard from '../ui/CategoryCard'
import SectionHeading from '../ui/SectionHeading'

export default function CategoriesPreview() {
  return (
    <section className="bg-white/50 py-20 md:py-24">
      <div className="container-maison">
        <SectionHeading
          eyebrow="Explore"
          title="Categorias do cardápio"
          description="Do espresso de origem à sobremesa assinatura — navegue por experiências pensadas para cada momento."
          align="center"
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, index) => (
            <CategoryCard key={category.id} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
