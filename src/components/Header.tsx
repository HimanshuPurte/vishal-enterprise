const navLinks = [
  { label: 'Products', href: '#product-range' },
  { label: 'Catalogue', href: '#catalogue' },
  { label: 'Reviews', href: '#testimonials' },
  { label: 'Contact', href: '#footer' },
]

export function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
        <a href="#" className="flex items-center gap-2 text-white">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-400 font-display text-lg font-semibold text-brand-900">
            VE
          </span>
          <span className="font-display text-lg font-semibold tracking-tight">
            Vishal Enterprise
          </span>
        </a>
        <ul className="hidden items-center gap-8 text-sm font-medium text-white/90 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="transition hover:text-brand-200">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#footer"
          className="hidden rounded-full bg-white px-5 py-2 text-sm font-semibold text-ink-900 transition hover:bg-brand-100 md:inline-block"
        >
          Get in Touch
        </a>
      </nav>
    </header>
  )
}
