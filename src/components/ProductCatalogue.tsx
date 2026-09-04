import { useRef, useState } from 'react'
import { catalogue } from '../data/products'
import { DownloadIcon } from './icons'

const swatchPalette = [
  'from-brand-300 to-brand-500',
  'from-ink-300 to-ink-600',
  'from-brand-200 to-brand-400',
  'from-ink-200 to-ink-500',
]

export function ProductCatalogue() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)

  const handleScroll = () => {
    const el = scrollRef.current
    if (!el) return
    const maxScroll = el.scrollWidth - el.clientWidth
    setScrollProgress(maxScroll > 0 ? el.scrollLeft / maxScroll : 0)
  }

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

        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="mt-14 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2 sm:grid sm:grid-cols-2 sm:overflow-visible sm:pb-0 lg:grid-cols-4"
        >
          {catalogue.map((product, index) => (
            <div
              key={product.id}
              className="group w-64 flex-shrink-0 snap-start overflow-hidden rounded-2xl border border-ink-100 transition hover:shadow-lg sm:w-auto sm:flex-shrink sm:snap-none"
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
                <a
                  href={product.downloadUrl}
                  download
                  className="inline-flex items-center gap-1.5 pt-2 text-sm font-semibold text-brand-600 transition hover:text-brand-500"
                >
                  <DownloadIcon className="h-4 w-4" />
                  Download Spec Sheet
                </a>
              </div>
            </div>
          ))}
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
