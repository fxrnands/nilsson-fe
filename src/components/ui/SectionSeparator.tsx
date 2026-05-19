interface SectionSeparatorProps {
  className?: string
}

export function SectionSeparator({ className = '' }: SectionSeparatorProps) {
  return (
    <div
      role="separator"
      aria-orientation="vertical"
      className={`h-svh w-px shrink-0 self-start bg-neutral-200 ${className}`.trim()}
    />
  )
}
