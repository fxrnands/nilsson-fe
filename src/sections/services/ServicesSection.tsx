import { ImageBottomGradient } from '@/components/ui/ImageBottomGradient'
import { SERVICES_IMAGE } from '@/lib/constants'
import { ServicesArchitecturePanel } from '@/sections/services/ServicesArchitecturePanel'

export function ServicesSection() {
  return (
    <section className="w-full shrink-0 lg:w-auto" aria-labelledby="services-heading">
      <article className="relative aspect-[3/2] w-full max-h-[min(52svh,440px)] overflow-hidden rounded-2xl sm:max-h-[min(56svh,480px)] lg:aspect-auto lg:size-services-card lg:max-h-none lg:shrink-0 lg:rounded-tl-card lg:rounded-tr-none lg:rounded-br-card lg:rounded-bl-card">
        <img
          src={SERVICES_IMAGE}
          alt="Modern courtyard with pool and glass architecture"
          className="absolute inset-0 h-full w-full -scale-x-100 object-cover object-[center_10%]"
          draggable={false}
        />

        <ImageBottomGradient placement="top" className="lg:hidden" />
        <ImageBottomGradient className="max-lg:hidden" />

        <div className="hidden lg:block">
          <ServicesArchitecturePanel />
        </div>

        <p
          id="services-heading"
          className="pointer-events-none absolute top-3 left-3 z-10 font-general text-[48px] leading-none font-normal tracking-normal text-white capitalize sm:top-8 sm:left-8 sm:text-[56px] lg:top-auto lg:bottom-[5%] lg:left-[8%] lg:text-[96px] lg:uppercase lg:whitespace-nowrap"
        >
          Services
        </p>
      </article>

      <div className="mt-8 lg:hidden">
        <h3 className="font-general text-[24px] font-medium leading-[1.2] text-neutral-950">
          Architecture
        </h3>
        <p className="mt-2 font-satoshi text-[16px] font-normal leading-normal text-neutral-800">
          From vision to reality, we shape innovative structures that seamlessly merge modern
          aesthetics with eco-friendly principles, redefining urban landscapes.
        </p>
      </div>
    </section>
  )
}
