import { WhitePanelBottomRight } from '@/components/ui/WhitePanelBottomRight'

interface HeroDescriptionProps {
  className?: string
}

export function HeroDescription({ className = '' }: HeroDescriptionProps) {
  return (
    <WhitePanelBottomRight className={`lg:max-w-[min(520px,44%)] ${className}`.trim()}>
      <p className="font-satoshi text-body font-normal leading-[1.5] tracking-normal text-neutral-800 sm:text-body-lg lg:px-12 lg:py-12 lg:pt-12 lg:pr-12 lg:pb-12 lg:pl-12 lg:text-body-lg lg:leading-[1.6]">
        Elevate your spaces sustainably with Nilsson. Discover innovative modern designs
        for architecture, interior, and exterior that harmonize with nature.
      </p>
    </WhitePanelBottomRight>
  )
}
