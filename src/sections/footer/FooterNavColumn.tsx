import type { ReactNode } from 'react'

interface FooterLink {
  label: string
  href: string
}

interface FooterNavColumnProps {
  title: string
  links: readonly FooterLink[]
  children?: ReactNode
}

export function FooterNavColumn({ title, links, children }: FooterNavColumnProps) {
  return (
    <div>
      <p className="font-general text-[13px] font-medium leading-[1.3] tracking-[0.5px] text-white/50 uppercase">
        {title}
      </p>
      <ul className="mt-4 space-y-3 lg:mt-5 lg:space-y-4">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="font-general text-[13px] font-medium leading-[1.3] tracking-[0.5px] text-project-title uppercase transition-opacity hover:opacity-70"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
      {children}
    </div>
  )
}
