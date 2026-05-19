interface ImageBottomGradientProps {
  className?: string
}

export function ImageBottomGradient({ className = '' }: ImageBottomGradientProps) {
  return (
    <div
      className={`pointer-events-none absolute right-0 bottom-0 left-0 z-[1] h-[min(280px,45%)] bg-gradient-to-b from-transparent via-black/25 to-black/75 max-lg:max-h-[320px] lg:h-[200px] lg:max-h-none lg:via-transparent lg:to-black/60 ${className}`.trim()}
      aria-hidden
    />
  )
}
