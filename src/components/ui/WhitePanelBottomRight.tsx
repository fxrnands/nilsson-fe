import type { ReactNode } from 'react'
import { CardStickyCorners } from '@/components/ui/CardStickyCorner'

interface WhitePanelBottomRightProps {
  children: ReactNode
  className?: string
}

export function WhitePanelBottomRight({ children, className = '' }: WhitePanelBottomRightProps) {
  return (
    <div
      className={`relative z-10 w-full bg-white max-lg:-mt-10 max-lg:rounded-none max-lg:px-6 max-lg:pb-10 max-lg:pt-8 lg:absolute lg:right-0 lg:bottom-0 lg:z-20 lg:w-auto lg:rounded-br-none lg:rounded-tl-card ${className}`.trim()}
    >
      {children}
      <div className="hidden lg:contents" aria-hidden>
        <CardStickyCorners variant="bottom-right" />
      </div>
    </div>
  )
}
