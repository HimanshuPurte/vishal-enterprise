import { catalogue, type Product } from '../data/products'
import { DownloadIcon } from './icons'

const stackTransforms = [
  '-translate-x-10 -rotate-6',
  'translate-x-0 rotate-0 z-10',
  'translate-x-10 rotate-6',
]

function transformsForCount(count: number) {
  if (count === 1) return [stackTransforms[1]]
  if (count === 2) return [stackTransforms[0], stackTransforms[2]]
  return stackTransforms
}

type Collection = {
  category: string
  products: Product[]
}

const collections: Collection[] = catalogue.reduce<Collection[]>((groups, product) => {
  const existing = groups.find((group) => group.category === product.category)
  if (existing) {
    existing.products.push(product)
  } else {
    groups.push({ category: product.category, products: [product] })
  }
  return groups
}, [])

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
              Our Collections
            </h2>
            <p className="mt-4 text-ink-500">
              Browse our range by collection. Reach out for the full catalogue and current
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

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {collections.map((collection) => (
            <div
              key={collection.category}
              className="group rounded-3xl bg-ink-50 p-8 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="font-display text-lg font-semibold text-ink-900">
                {collection.category}
              </h3>
              <p className="mt-1 text-sm text-ink-500">
                {collection.products.length} product{collection.products.length > 1 ? 's' : ''}
              </p>

              <div className="relative mt-8 flex h-40 items-center justify-center">
                {collection.products.slice(0, 3).map((product, index) => (
                  <img
                    key={product.id}
                    src={`https://picsum.photos/seed/${product.id}/300/380`}
                    alt=""
                    className={`absolute h-36 w-28 rounded-xl border-4 border-white object-cover shadow-md transition group-hover:-translate-y-1 ${
                      transformsForCount(Math.min(collection.products.length, 3))[index]
                    }`}
                  />
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-x-4 gap-y-2 border-t border-ink-200/70 pt-5">
                {collection.products.map((product) => (
                  <a
                    key={product.id}
                    href={product.downloadUrl}
                    download
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 transition hover:text-brand-500"
                    title={`Download ${product.name} spec sheet`}
                  >
                    <DownloadIcon className="h-4 w-4" />
                    {product.name}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
