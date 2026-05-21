import { ReactLenis } from 'lenis/react'
import type { ReactNode } from 'react'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'

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

function HorizontalScrollTrack({ children }: HorizontalScrollProps) {
  return <div className="flex h-svh w-max">{children}</div>
}

function NativeHorizontalScroll({ children }: HorizontalScrollProps) {
  return (
    <div
      className="h-full w-full overflow-x-auto overflow-y-hidden overscroll-x-contain [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      aria-label="Horizontal page scroll"
    >
      <HorizontalScrollTrack>{children}</HorizontalScrollTrack>
    </div>
  )
}

export function HorizontalScroll({ children }: HorizontalScrollProps) {
  const prefersReducedMotion = usePrefersReducedMotion()

  if (prefersReducedMotion) {
    return <NativeHorizontalScroll>{children}</NativeHorizontalScroll>
  }

  return (
    <ReactLenis
      className="h-full w-full overflow-hidden"
      options={lenisOptions}
      aria-label="Horizontal page scroll"
    >
      <HorizontalScrollTrack>{children}</HorizontalScrollTrack>
    </ReactLenis>
  )
}
