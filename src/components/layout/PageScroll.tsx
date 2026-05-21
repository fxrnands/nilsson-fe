import type { ReactNode } from 'react'
import { HorizontalScroll } from '@/components/layout/HorizontalScroll'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import { DESKTOP_MIN_WIDTH_MEDIA_QUERY } from '@/lib/mediaQueries'

interface PageScrollProps {
  children: ReactNode
}

export function PageScroll({ children }: PageScrollProps) {
  const isDesktop = useMediaQuery(DESKTOP_MIN_WIDTH_MEDIA_QUERY)

  if (isDesktop) {
    return <HorizontalScroll>{children}</HorizontalScroll>
  }

  return (
    <main className="flex w-full flex-col overflow-x-hidden" aria-label="Page">
      {children}
    </main>
  )
}
