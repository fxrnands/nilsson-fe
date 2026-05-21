import { ScrollPanel } from '@/components/layout/ScrollPanel'
import { WhitePanelBottomRight } from '@/components/ui/WhitePanelBottomRight'
import {
  footerCmsLinks,
  footerPagesLinks,
  footerSocialLinks,
  footerUtilityLinks,
} from '@/sections/footer/footerContent'
import { FooterNavColumn } from '@/sections/footer/FooterNavColumn'
import { FooterOfficesColumn } from '@/sections/footer/FooterOfficesColumn'

export function FooterSection() {
  return (
    <ScrollPanel
      className="flex flex-col overflow-hidden bg-ink text-white"
      aria-labelledby="footer-cta-heading"
    >
      <div className="flex min-h-0 flex-1 flex-col px-6 pt-12 pb-10 lg:pr-12 lg:pl-footer-x lg:pb-8">
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <h2
            id="footer-cta-heading"
            className="font-general text-footer-cta-mobile leading-none font-normal tracking-display capitalize lg:text-footer-cta-desktop lg:uppercase"
          >
            Shape your{' '}
            <br className="hidden md:block" />
            dream space!
          </h2>
          <a
            href="/"
            className="mt-8 inline-flex h-[47px] w-[151px] items-center justify-center rounded-[8px] bg-white transition-opacity hover:opacity-90 lg:mt-8 lg:h-footer-cta-button lg:w-footer-cta-button lg:rounded-footer-cta"
          >
            <span className="font-general text-cta-mobile font-medium leading-[1.3] tracking-[0.5px] text-ink capitalize lg:text-cta-desktop lg:uppercase">
              Let&apos;s connect
            </span>
          </a>
        </div>

        <nav className="mt-14 lg:mt-auto lg:pb-32" aria-label="Footer navigation">
          <div className="flex flex-col gap-10 lg:grid lg:grid-cols-4 lg:gap-10">
            <FooterOfficesColumn />
            <FooterNavColumn title="Pages" links={footerPagesLinks}>
              <a
                href="/"
                className="mt-6 inline-flex h-[47px] min-w-[151px] items-center justify-center rounded-[8px] bg-white px-4 transition-opacity hover:opacity-90 lg:h-10 lg:min-w-0 lg:w-auto lg:rounded-lg lg:px-6"
              >
                <span className="font-general text-cta-mobile font-medium leading-[1.3] tracking-[0.5px] text-ink capitalize lg:uppercase">
                  More templates
                </span>
              </a>
            </FooterNavColumn>
            <FooterNavColumn title="CMS" links={footerCmsLinks} />
            <FooterNavColumn title="Utility Pages" links={footerUtilityLinks} />
          </div>
        </nav>
      </div>

      <WhitePanelBottomRight className="max-lg:mt-0 max-lg:rounded-none max-lg:px-6 max-lg:py-6 max-w-full">
        <div
          className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-12 lg:py-5 lg:pr-12 lg:pl-12"
          aria-label="Site credits and social links"
        >
          <p className="font-general text-credits-mobile font-medium leading-[1.3] tracking-[0.5px] text-ink uppercase sm:text-caption">
            © Made by Pawel Gola. Powered by Webflow.
          </p>
          <ul className="flex shrink-0 items-center gap-2">
            {footerSocialLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="flex size-9 items-center justify-center rounded-full bg-ink transition-opacity hover:opacity-80"
                  aria-label={link.label}
                >
                  <img
                    src={link.iconSrc}
                    alt=""
                    width={18}
                    height={18}
                    className="size-[18px]"
                    draggable={false}
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </WhitePanelBottomRight>
    </ScrollPanel>
  )
}
