import { CardStickyCorners } from '@/components/ui/CardStickyCorner'
import { UnderlinedCaptionLink } from '@/components/ui/UnderlinedCaptionLink'

interface NewsCardProps {
  title: string
  imageSrc: string
  imageAlt: string
  href: string
}

export function NewsCard({ title, imageSrc, imageAlt, href }: NewsCardProps) {
  return (
    <article className="flex w-full flex-col gap-4 lg:relative lg:aspect-[800/500] lg:h-news-card lg:w-news-card lg:max-w-none lg:overflow-hidden lg:rounded-tl-card lg:rounded-tr-card lg:rounded-br-card lg:rounded-bl-none">
      <a
        href={href}
        className="relative block aspect-square w-full shrink-0 overflow-hidden rounded-2xl lg:absolute lg:inset-0 lg:aspect-auto lg:rounded-none"
        aria-label={`Read article: ${title}`}
      >
        <img
          src={imageSrc}
          alt={imageAlt}
          className="absolute inset-0 h-full w-full object-cover object-center"
          draggable={false}
        />
      </a>

      <div className="flex flex-col items-start gap-3 lg:hidden" data-testid="news-card-mobile">
        <h3 className="font-general text-[16px] font-medium leading-[1.3] tracking-normal text-neutral-950">
          {title}
        </h3>
        <UnderlinedCaptionLink href={href}>Read article</UnderlinedCaptionLink>
      </div>

      <a
        href={href}
        className="absolute bottom-0 left-0 z-10 hidden w-[60%] rounded-tr-card bg-white px-4 pt-4 pb-4 lg:block lg:rounded-tr-card"
        aria-label={`Read article: ${title}`}
      >
        <h3 className="font-general text-[14px] font-medium leading-[1.3] tracking-normal text-neutral-950">
          {title}
        </h3>
        <span className="mt-2 inline-block border-b border-ink pb-0.5 font-general text-[13px] font-medium leading-[1.3] tracking-[0.5px] text-ink uppercase">
          Read article
        </span>
        <CardStickyCorners variant="bottom-left" />
      </a>
    </article>
  )
}
