import { ScrollPanel } from '@/components/layout/ScrollPanel'
import { ImageBottomGradient } from '@/components/ui/ImageBottomGradient'
import { HERO_IMAGE } from '@/lib/constants'
import { HeroNav } from '@/sections/hero/HeroNav'
import { HeroHeadline } from '@/sections/hero/HeroHeadline'
import { HeroDescription } from '@/sections/hero/HeroDescription'

export function HeroSection() {
  return (
    <ScrollPanel className="bg-white lg:pr-hero-inset lg:pb-hero-inset" aria-label="Hero">
      <div className="flex flex-col lg:relative lg:h-full">
        <div className="relative aspect-square w-full shrink-0 overflow-hidden lg:aspect-auto lg:h-full lg:min-h-0">
          <img
            src={HERO_IMAGE}
            alt="Modern architecture exterior"
            className="absolute inset-0 h-full w-full object-cover object-center"
            draggable={false}
          />

          <ImageBottomGradient />

          <HeroNav />
          <HeroHeadline />

          <div className="hidden lg:block">
            <HeroDescription />
          </div>
        </div>

        <HeroDescription className="lg:hidden" />
      </div>
    </ScrollPanel>
  )
}
