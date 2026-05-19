import { CardStickyCorners } from '@/components/ui/CardStickyCorner'

export function ServicesArchitecturePanel() {
  return (
    <div className="absolute top-0 right-0 z-20 w-architecture-panel max-w-architecture-panel rounded-bl-card bg-white">
      <div className="pt-4 pr-4 pb-8 pl-8">
        <h3 className="font-general text-[24px] font-medium leading-[1.2] tracking-normal text-neutral-950">
          Architecture
        </h3>
        <p className="mt-1 font-satoshi text-[16px] font-normal leading-normal tracking-normal text-neutral-800">
          From vision to reality, we shape innovative structures that
          <br />
          seamlessly merge modern aesthetics with eco-friendly
          <br />
          principles, redefining urban landscapes.
        </p>
      </div>

      <CardStickyCorners variant="top-right" />
    </div>
  )
}
