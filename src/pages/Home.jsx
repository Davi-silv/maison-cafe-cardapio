import CategoriesPreview from '../components/home/CategoriesPreview'
import CTA from '../components/home/CTA'
import Experience from '../components/home/Experience'
import FeaturedProducts from '../components/home/FeaturedProducts'
import Hero from '../components/home/Hero'

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <CategoriesPreview />
      <Experience />
      <CTA />
    </>
  )
}
