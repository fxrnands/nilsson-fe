import { ReactLenis } from 'lenis/react'
import type { ReactNode } from 'react'

interface HorizontalScrollProps {
  children: ReactNode
}

const lenisOptions = {
  orientation: 'horizontal' as const,
  gestureOrientation: 'vertical' as const,
  smoothWheel: true,
  lerp: 0.08,
  wheelMultiplier: 1,
  touchMultiplier: 1.2,
  autoRaf: true,
  autoResize: true,
}

export function HorizontalScroll({ children }: HorizontalScrollProps) {
  return (
    <ReactLenis className="h-full w-full overflow-hidden" options={lenisOptions}>
      <div className="flex h-svh w-max" aria-label="Horizontal page scroll">
        {children}
      </div>
    </ReactLenis>
  )
}
