import { SectionPill } from '@/components/ui/SectionPill'
import { UnderlinedCaptionLink } from '@/components/ui/UnderlinedCaptionLink'

export function SelectedWorkIntroSection() {
  return (
    <section
      className="flex w-full shrink-0 flex-col bg-white lg:h-svh lg:w-intro-section lg:min-w-intro-section lg:max-w-intro-section lg:basis-[length:var(--width-intro-section)]"
      aria-labelledby="selected-work-heading"
    >
      <div className="flex w-full flex-col gap-8 px-6 py-12 lg:justify-between lg:px-selected-work-x lg:py-16">
        <SectionPill label="Selected work" />

        <div className="flex flex-col items-start">
          <h2
            id="selected-work-heading"
            className="max-w-[520px] font-general text-[32px] leading-[1.2] font-medium tracking-normal text-neutral-950 sm:text-[40px] lg:text-[48px]"
          >
            Eco-Friendly
            <br />
            Masterpieces
          </h2>

          <p className="mt-4 max-w-[700px] font-satoshi text-[18px] font-normal leading-normal tracking-normal text-neutral-800 lg:text-[20px]">
            Explore a curated collection of Nilsson&apos;s remarkable projects that epitomize our
            dedication to modern, sustainable design. Each creation is a testament to our commitment
            to merging aesthetics with environmental consciousness, delivering spaces that inspire
            and endure.
          </p>

          <UnderlinedCaptionLink href="#projects" className="mt-6 lg:mt-8">
            All projects
          </UnderlinedCaptionLink>
        </div>
      </div>
    </section>
  )
}
