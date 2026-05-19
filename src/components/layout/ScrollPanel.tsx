import type { ReactNode } from 'react'

interface ScrollPanelProps {
  children: ReactNode
  className?: string
  'aria-label'?: string
  'aria-labelledby'?: string
}

/** Full-viewport panel for horizontal scroll (desktop). Use explicit widths on non-ScrollPanel sections. */
export function ScrollPanel({ children, className = '', ...aria }: ScrollPanelProps) {
  return (
    <section
      className={`relative w-full shrink-0 max-lg:min-h-0 max-lg:w-full lg:h-svh lg:min-h-0 lg:w-screen lg:min-w-[100vw] lg:max-w-[100vw] lg:flex-[0_0_100vw] lg:basis-[100vw] ${className}`.trim()}
      {...aria}
    >
      {children}
    </section>
  )
}
