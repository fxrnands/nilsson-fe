interface ImageBottomGradientProps {
  className?: string
  placement?: 'bottom' | 'top'
}

export function ImageBottomGradient({
  className = '',
  placement = 'bottom',
}: ImageBottomGradientProps) {
  const isTop = placement === 'top'

  return (
    <div
      className={
        isTop
          ? `pointer-events-none absolute inset-x-0 top-0 z-10 h-[50%] min-h-[120px] bg-gradient-to-t from-transparent via-black/50 to-black ${className}`.trim()
          : `pointer-events-none absolute inset-x-0 bottom-0 z-10 bg-gradient-to-b from-transparent via-black/50 to-black max-lg:h-[50%] max-lg:min-h-[120px] lg:z-[1] lg:h-[200px] lg:min-h-0 lg:via-transparent lg:to-black/60 ${className}`.trim()
      }
      aria-hidden
    />
  )
}
