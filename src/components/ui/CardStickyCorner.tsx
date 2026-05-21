import { RADIUS } from '@/lib/constants'

const CORNER_PATH = 'M40 40V0C40 22.0914 22.0914 40 0 40H40Z'

export type CardStickyCornerVariant = 'bottom-right' | 'top-right' | 'bottom-left'

type CornerPart = 'primary' | 'secondary'

interface CardStickyCornerProps {
  part: CornerPart
}

function CardStickyCorner({ part }: CardStickyCornerProps) {
  return (
    <div
      className={`card-sticky-corner card-sticky-corner--${part} pointer-events-none absolute`}
      aria-hidden
    >
      <svg
        width={RADIUS}
        height={RADIUS}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="block"
      >
        <path d={CORNER_PATH} fill="white" />
      </svg>
    </div>
  )
}

interface CardStickyCornersProps {
  variant: CardStickyCornerVariant
}

/** Pair of sticky-corner SVGs for a white panel position. Parent must be `position: relative`. */
export function CardStickyCorners({ variant }: CardStickyCornersProps) {
  return (
    <div className={`card-sticky-corners card-sticky-corners--${variant}`} aria-hidden>
      <CardStickyCorner part="primary" />
      <CardStickyCorner part="secondary" />
    </div>
  )
}
