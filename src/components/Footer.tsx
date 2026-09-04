const columns = [
  {
    title: 'Products',
    links: ['Laminates', 'Veneers', 'Plywood & Boards', 'Furniture Hardware'],
  },
  {
    title: 'Company',
    links: ['About Us', 'Our Catalogue', 'Testimonials', 'Careers'],
  },
  {
    title: 'Contact',
    links: ['+91 98765 43210', 'info@vishalenterprise.in', 'Mon–Sat: 9am – 7pm'],
  },
]

export function Footer() {
  return (
    <footer id="footer" className="bg-ink-900 pt-20 text-white/70">
      <div className="mx-auto max-w-7xl px-6 pb-10 lg:px-8">
        <div className="grid gap-12 border-b border-white/10 pb-14 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <a href="#" className="flex items-center gap-2 text-white">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-400 font-display text-lg font-semibold text-brand-900">
                VE
              </span>
              <span className="font-display text-lg font-semibold tracking-tight">
                Vishal Enterprise
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm">
              Your trusted partner for interior design materials — laminates, veneers,
              plywood, and hardware, delivered with quality you can count on.
            </p>
          </div>

          {columns.map((column) => (
            <div key={column.title}>
              <h4 className="font-display text-sm font-semibold uppercase tracking-wide text-white">
                {column.title}
              </h4>
              <ul className="mt-4 space-y-3 text-sm">
                {column.links.map((link) => (
                  <li key={link}>{link}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-4 pt-8 text-xs sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Vishal Enterprise. All rights reserved.</p>
          <p>Interior Design Materials, Wholesale &amp; Retail</p>
        </div>
      </div>
    </footer>
  )
}
