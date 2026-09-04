import { useRef, useState } from 'react'
import { productRange } from '../data/products'
import { categoryIcons } from './icons'

export function ProductRange() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)

  const handleScroll = () => {
    const el = scrollRef.current
    if (!el) return
    const maxScroll = el.scrollWidth - el.clientWidth
    setScrollProgress(maxScroll > 0 ? el.scrollLeft / maxScroll : 0)
  }

  return (
    <section id="product-range" className="bg-ink-50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-500">
            What We Offer
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight text-ink-900">
            Our Product Range
          </h2>
          <p className="mt-4 text-ink-500">
            From surface finishes to structural boards, we stock everything you need to
            complete an interior project — sourced from trusted manufacturers.
          </p>
        </div>

        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="mt-14 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2 sm:grid sm:grid-cols-2 sm:overflow-visible sm:pb-0 lg:grid-cols-3"
        >
          {productRange.map((category) => {
            const Icon = categoryIcons[category.icon]
            return (
              <div
                key={category.id}
                className="group relative w-72 flex-shrink-0 snap-start overflow-hidden rounded-2xl border border-ink-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg sm:w-auto sm:flex-shrink sm:snap-none"
              >
                <div
                  aria-hidden
                  className="absolute inset-0 scale-105 bg-cover bg-center opacity-0 transition duration-300 group-hover:scale-100 group-hover:opacity-100"
                  style={{ backgroundImage: `url(${category.image})` }}
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-ink-900/0 transition duration-300 group-hover:bg-ink-900/70"
                />
                <div className="relative">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-500 transition group-hover:bg-white/10 group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-semibold text-ink-900 transition group-hover:text-white">
                    {category.name}
                  </h3>
                  <p className="mt-2 text-sm text-ink-500 transition group-hover:text-white/80">
                    {category.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-4 h-1 w-full overflow-hidden rounded-full bg-ink-100 sm:hidden">
          <div
            className="h-full rounded-full bg-brand-500 transition-[width]"
            style={{ width: `${Math.max(scrollProgress * 100, 8)}%` }}
          />
        </div>
      </div>
    </section>
  )
}
