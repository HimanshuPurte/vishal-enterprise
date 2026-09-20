const navLinks = [
  { label: 'Products', href: '#product-range' },
  { label: 'Catalogue', href: '#catalogue' },
  { label: 'Reviews', href: '#testimonials' },
  { label: 'Contact', href: '#footer' },
]

type HeaderProps = {
  variant?: 'dark' | 'light'
}

export function Header({ variant = 'dark' }: HeaderProps) {
  const isLight = variant === 'light'

  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
        <a href="#" className={`flex items-center gap-2 ${isLight ? 'text-ink-900' : 'text-white'}`}>
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-400 font-display text-lg font-semibold text-brand-900">
            VE
          </span>
          <span className="font-display text-lg font-semibold tracking-tight">
            Vishal Enterprise
          </span>
        </a>
        <ul
          className={`hidden items-center gap-8 text-sm font-medium md:flex ${
            isLight ? 'text-ink-700' : 'text-white/90'
          }`}
        >
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`transition ${isLight ? 'hover:text-brand-600' : 'hover:text-brand-200'}`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#footer"
          className={`hidden rounded-full px-5 py-2 text-sm font-semibold transition md:inline-block ${
            isLight
              ? 'bg-ink-900 text-black hover:bg-ink-800'
              : 'bg-white text-ink-900 hover:bg-brand-100'
          }`}
        >
          Get in Touch
        </a>
      </nav>
    </header>
  )
}
