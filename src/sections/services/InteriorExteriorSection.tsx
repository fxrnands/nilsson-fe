import { exteriorImage, interiorImage } from '@/lib/images'
import { SectionSeparator } from '@/components/ui/SectionSeparator'
import { ServiceOfferingCard } from '@/sections/services/ServiceOfferingCard'

export function InteriorExteriorSection() {
  return (
    <section
      className="flex w-full shrink-0 flex-col bg-white lg:flex lg:h-svh lg:shrink-0 lg:flex-row"
      aria-label="Interior and exterior services"
    >
      <div className="flex w-full flex-1 items-stretch lg:items-center">
        <div className="flex w-full flex-col gap-10 lg:h-services-card lg:w-offering-column lg:min-w-offering-column lg:shrink-0 lg:gap-8 lg:pr-offering-section-end">
          <ServiceOfferingCard
            title="Interior Design"
            description="We create interiors that reflect your personality while embracing nature's beauty."
            desktopDescription="Infusing your spaces with elegance and sustainability, we create interiors that reflect your personality while embracing nature's beauty."
            image={interiorImage}
            imageAlt="Modern sunlit living room interior"
            panelAlign="right"
          />

          <ServiceOfferingCard
            title="Exterior Design"
            description="Elevate curb appeal with exterior designs that harmonize contemporary style with environmentally conscious landscaping."
            desktopDescription="Elevate curb appeal and functionality with our exterior designs that harmonize contemporary style with environmentally conscious landscaping solutions."
            image={exteriorImage}
            imageAlt="Modern home with pool and landscaped exterior"
            panelAlign="left"
          />
        </div>
      </div>

      <SectionSeparator className="hidden shrink-0 lg:block" />
    </section>
  )
}
