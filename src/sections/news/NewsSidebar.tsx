import { UnderlinedCaptionLink } from '@/components/ui/UnderlinedCaptionLink'

const introCopy =
  'Dive into our blog and unravel a world of architectural inspiration, sustainable living tips, design trends, and expert insights.'

export function NewsSidebar() {
  return (
    <aside className="flex w-full shrink-0 flex-col lg:h-services-card lg:w-news-intro lg:min-w-news-intro lg:max-w-news-intro lg:justify-between lg:px-selected-work-x">
      <div className="flex flex-col items-start gap-6 lg:hidden">
        <h2 className="font-general text-[48px] font-normal leading-none tracking-normal text-ink uppercase sm:text-[56px]">
          News
        </h2>
        <p className="font-satoshi text-[18px] font-normal leading-[1.5] tracking-normal text-ink">
          {introCopy}
        </p>
        <UnderlinedCaptionLink href="#articles">All articles</UnderlinedCaptionLink>
      </div>

      <div className="hidden flex-col items-start lg:flex lg:h-full lg:justify-between">
        <div className="flex flex-col items-start">
          <p className="font-satoshi text-[20px] font-normal leading-[1.5] tracking-normal text-ink">
            {introCopy}
          </p>
          <UnderlinedCaptionLink href="#articles" className="mt-8">
            All articles
          </UnderlinedCaptionLink>
        </div>

        <h2 className="font-general text-[96px] font-normal leading-none tracking-normal text-ink uppercase">
          News
        </h2>
      </div>
    </aside>
  )
}
