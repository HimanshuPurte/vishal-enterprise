import heroImage from '../assets/vishal-enterprises.svg'
import { Header } from './Header'

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden sm:flex sm:min-h-[85vh] sm:items-end">
      <img
        src={heroImage}
        alt="Warm-toned interior design material panels — laminates, veneers, and boards"
        className="h-72 w-full object-cover sm:absolute sm:inset-0 sm:-z-10 sm:h-full"
      />
      <div className="absolute inset-0 -z-10 hidden bg-gradient-to-t from-ink-900/80 via-ink-900/40 to-ink-900/60 sm:block" />

      <Header />

      <div className="mx-auto w-full max-w-7xl px-6 pb-10 pt-6 sm:flex sm:justify-end sm:px-0 sm:pb-0 sm:pl-6 lg:pl-8">
        <div className="animate-slide-in-right rounded-2xl bg-ink-900 p-8 text-left shadow-xl sm:max-w-xl sm:bg-ink-900/50 sm:text-right sm:backdrop-blur-xs">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-200">
            Interior Design Materials
          </p>
          <div className="mt-4 overflow-hidden sm:overflow-visible">
            <h1 className="animate-marquee-x whitespace-nowrap font-display text-5xl font-semibold tracking-tight text-white sm:animate-none sm:whitespace-normal sm:text-6xl">
              Vishal Enterprise
            </h1>
          </div>
          <p className="mt-6 text-lg text-white/85">
            Quality laminates, veneers, plywood, and hardware — trusted by designers and
            contractors to build spaces that last.
          </p>
          {/* <div className="mt-10 flex flex-wrap justify-end gap-4">
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
          </div> */}
        </div>
      </div>
    </section>
  )
}
