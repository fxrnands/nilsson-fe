import { NILSSON_LOGO } from '@/lib/constants'

const navLinks = [
  { label: 'PROJECTS', href: '#projects', active: true },
  { label: 'ABOUT', href: '#about', active: false },
  { label: 'CONTACT', href: '#contact', active: false },
] as const

export function HeroNav() {
  return (
    <header className="pointer-events-none absolute top-5 left-1/2 z-30 -translate-x-1/2 lg:top-[48px] lg:left-[48px] lg:translate-x-0">
      <nav
        className="pointer-events-auto flex w-[218px] items-center justify-center rounded-nav bg-white py-3 shadow-[0_4px_24px_rgba(0,0,0,0.06)] lg:inline-flex lg:w-auto lg:justify-start lg:p-2"
        aria-label="Primary"
      >
        <div className="flex items-center gap-4 lg:gap-5">
          <button
            type="button"
            className="hidden size-[41px] shrink-0 items-center justify-center rounded-lg bg-neutral-950 text-white lg:flex"
            aria-label="Open menu"
          >
            <span className="flex flex-col gap-1">
              <span className="block h-0.5 w-3.5 bg-white" />
              <span className="block h-0.5 w-3.5 bg-white" />
            </span>
          </button>

          <a href="/" className="shrink-0">
            <img
              src={NILSSON_LOGO}
              alt="Nilsson"
              width={90}
              height={16}
              className="h-4 w-[90px]"
              draggable={false}
            />
          </a>
        </div>

        <ul className="ml-5 hidden items-center lg:flex">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className={
                  link.active
                    ? 'rounded-md bg-neutral-100 p-3 font-general text-[13px] font-medium tracking-[0.5px] text-neutral-950 uppercase'
                    : 'p-3 font-general text-[13px] font-medium tracking-[0.5px] text-neutral-950 uppercase transition-opacity hover:opacity-60'
                }
                aria-current={link.active ? 'page' : undefined}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
