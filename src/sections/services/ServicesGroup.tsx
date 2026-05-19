import { InteriorExteriorSection } from '@/sections/services/InteriorExteriorSection'
import { ServicesSection } from '@/sections/services/ServicesSection'

export function ServicesGroup() {
  return (
    <div className="flex w-full shrink-0 flex-col gap-10 bg-white px-6 py-12 max-lg:overflow-x-hidden lg:h-svh lg:w-max lg:shrink-0 lg:flex-row lg:items-center lg:gap-12 lg:px-0 lg:py-0 lg:pl-12">
      <ServicesSection />
      <InteriorExteriorSection />
    </div>
  )
}
