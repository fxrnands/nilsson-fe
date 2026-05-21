import { SectionPill } from '@/components/ui/SectionPill'
import { UnderlinedCaptionLink } from '@/components/ui/UnderlinedCaptionLink'

const partnerLogos = [
  { src: '/icons/superfood.svg', alt: 'Superfood', width: 60, height: 60 },
  { src: '/icons/creative-studio.svg', alt: 'Creative Studio', width: 69, height: 60 },
  { src: '/icons/in-motion.svg', alt: 'In Motion', width: 68, height: 60 },
  { src: '/icons/abstract.svg', alt: 'Abstract', width: 73, height: 60 },
  { src: '/icons/vision-studio.svg', alt: 'Vision Studio', width: 112, height: 32 },
  { src: '/icons/invision.svg', alt: 'Invision', width: 64, height: 60 },
] as const

export function WhatWeDoSection() {
  return (
    <section
      className="flex w-full shrink-0 flex-col justify-between gap-12 bg-white px-6 py-12 lg:h-svh lg:w-intro-section lg:min-w-intro-section lg:max-w-intro-section lg:shrink-0 lg:basis-[length:var(--width-intro-section)] lg:gap-0 lg:px-12 lg:py-16"
      aria-labelledby="what-we-do-heading"
    >
      <div className="flex flex-col items-start">
        <SectionPill label="What we do" />

        <h2
          id="what-we-do-heading"
          className="mt-6 max-w-[520px] font-general text-section-mobile leading-[1.2] font-medium tracking-normal text-neutral-950 sm:text-section-sm lg:mt-8 lg:text-section"
        >
          Shaping Future
          <br />
          Architecture
        </h2>

        <p className="mt-4 max-w-[600px] font-satoshi text-body font-normal leading-normal tracking-normal text-neutral-800 lg:mt-6 lg:text-body-lg">
          At Nilsson, we blend creativity and eco-consciousness to reshape modern living.
          With a passion for sustainable design, we craft functional and aesthetically
          pleasing environments that stand the test of time while minimizing our ecological
          footprint.
        </p>

        <UnderlinedCaptionLink href="#about" className="mt-6 lg:mt-8">
          About us
        </UnderlinedCaptionLink>
      </div>

      <ul className="grid grid-cols-3 gap-x-6 gap-y-8 sm:grid-cols-3 lg:grid-cols-[140px_320px_140px] lg:gap-x-0 lg:gap-y-12">
        {partnerLogos.map((logo) => (
          <li key={logo.alt} className="flex items-center justify-center">
            <img
              src={logo.src}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
              className="max-h-[48px] w-auto object-contain lg:max-h-[60px]"
              loading="lazy"
              decoding="async"
            />
          </li>
        ))}
      </ul>
    </section>
  )
}
