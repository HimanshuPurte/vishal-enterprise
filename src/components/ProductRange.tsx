import { productRange } from '../data/products'
import { categoryIcons } from './icons'

export function ProductRange() {
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

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {productRange.map((category) => {
            const Icon = categoryIcons[category.icon]
            return (
              <div
                key={category.id}
                className="group rounded-2xl border border-ink-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-500 transition group-hover:bg-brand-400 group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold text-ink-900">
                  {category.name}
                </h3>
                <p className="mt-2 text-sm text-ink-500">{category.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
