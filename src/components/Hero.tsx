import heroImage from '../assets/hero.svg'
import { Header } from './Header'

export function Hero() {
  return (
    <section className="relative isolate flex min-h-[85vh] items-center overflow-hidden">
      <img
        src={heroImage}
        alt="Warm-toned interior design material panels — laminates, veneers, and boards"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink-900/80 via-ink-900/40 to-ink-900/60" />

      <Header />

      <div className="mx-auto max-w-7xl px-6 py-32 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-200">
          Interior Design Materials
        </p>
        <h1 className="mt-4 max-w-2xl font-display text-5xl font-semibold tracking-tight text-white sm:text-6xl">
          Vishal Enterprise
        </h1>
        <p className="mt-6 max-w-xl text-lg text-white/85">
          Quality laminates, veneers, plywood, and hardware — trusted by designers and
          contractors to build spaces that last.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#catalogue"
            className="rounded-full bg-brand-400 px-7 py-3 text-sm font-semibold text-brand-900 transition hover:bg-brand-300"
          >
            Browse Catalogue
          </a>
          <a
            href="#product-range"
            className="rounded-full border border-white/40 px-7 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
          >
            Explore Products
          </a>
        </div>
      </div>
    </section>
  )
}
