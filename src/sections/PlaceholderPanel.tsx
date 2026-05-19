import { ScrollPanel } from '@/components/layout/ScrollPanel'

interface PlaceholderPanelProps {
  label: string
  className?: string
}

export function PlaceholderPanel({ label, className = 'bg-neutral-100' }: PlaceholderPanelProps) {
  return (
    <ScrollPanel
      className={`flex items-center justify-center ${className}`}
      aria-hidden
    >
      <p className="text-sm tracking-[0.2em] text-neutral-500 uppercase">{label}</p>
    </ScrollPanel>
  )
}
