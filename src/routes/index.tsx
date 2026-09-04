import { createFileRoute } from '@tanstack/react-router'
import { Hero } from '../components/Hero'
import { ProductRange } from '../components/ProductRange'
import { ProductCatalogue } from '../components/ProductCatalogue'
import { Testimonials } from '../components/Testimonials'
import { Footer } from '../components/Footer'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  return (
    <main>
      <Hero />
      <ProductRange />
      <ProductCatalogue />
      <Testimonials />
      <Footer />
    </main>
  )
}
