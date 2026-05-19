import type { ReactNode } from 'react'
import { HorizontalScroll } from '@/components/layout/HorizontalScroll'
import { useMediaQuery } from '@/hooks/useMediaQuery'

interface PageScrollProps {
  children: ReactNode
}

export function PageScroll({ children }: PageScrollProps) {
  const isDesktop = useMediaQuery('(min-width: 1024px)')

  if (isDesktop) {
    return <HorizontalScroll>{children}</HorizontalScroll>
  }

  return (
    <main className="flex w-full flex-col overflow-x-hidden" aria-label="Page">
      {children}
    </main>
  )
}
