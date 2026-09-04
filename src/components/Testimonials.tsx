import { testimonials } from '../data/testimonials'
import { StarIcon } from './icons'

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-ink-900 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-300">
            Testimonials
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight text-white">
            What Our Customers Say
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.id}
              className="flex flex-col rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <div className="flex gap-1 text-brand-300">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon
                    key={i}
                    className={`h-4 w-4 ${i < testimonial.rating ? 'opacity-100' : 'opacity-25'}`}
                  />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-sm text-white/80">
                "{testimonial.quote}"
              </blockquote>
              <figcaption className="mt-6 border-t border-white/10 pt-4">
                <p className="font-display text-sm font-semibold text-white">
                  {testimonial.name}
                </p>
                <p className="text-xs text-white/50">{testimonial.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
