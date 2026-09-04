import { catalogue } from '../data/products'

const swatchPalette = [
  'from-brand-300 to-brand-500',
  'from-ink-300 to-ink-600',
  'from-brand-200 to-brand-400',
  'from-ink-200 to-ink-500',
]

export function ProductCatalogue() {
  return (
    <section id="catalogue" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-500">
              Catalogue
            </p>
            <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight text-ink-900">
              Featured Products
            </h2>
            <p className="mt-4 text-ink-500">
              A glimpse of our current stock. Reach out for the full catalogue and current
              pricing.
            </p>
          </div>
          <a
            href="#footer"
            className="rounded-full border border-ink-200 px-6 py-2.5 text-sm font-semibold text-ink-800 transition hover:border-brand-400 hover:text-brand-600"
          >
            Request Full Catalogue
          </a>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {catalogue.map((product, index) => (
            <div
              key={product.id}
              className="group overflow-hidden rounded-2xl border border-ink-100 transition hover:shadow-lg"
            >
              <div
                className={`h-36 w-full bg-gradient-to-br ${swatchPalette[index % swatchPalette.length]} transition group-hover:scale-105`}
              />
              <div className="space-y-1 p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-brand-500">
                  {product.category}
                </p>
                <h3 className="font-display text-base font-semibold text-ink-900">
                  {product.name}
                </h3>
                <p className="text-sm text-ink-500">{product.finish}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
