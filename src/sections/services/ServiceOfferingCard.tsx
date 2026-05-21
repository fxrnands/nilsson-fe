import { CardStickyCorners } from '@/components/ui/CardStickyCorner'
import { ResponsiveImage } from '@/components/ui/ResponsiveImage'
import type { ImageAsset } from '@/lib/images'

interface ServiceOfferingCardProps {
  title: string
  description: string
  desktopDescription?: string
  image: ImageAsset
  imageAlt: string
  panelAlign: 'right' | 'left'
}

export function ServiceOfferingCard({
  title,
  description,
  desktopDescription,
  image,
  imageAlt,
  panelAlign,
}: ServiceOfferingCardProps) {
  const panelDescription = desktopDescription ?? description
  const isPanelRight = panelAlign === 'right'

  const imageRadiusClass = isPanelRight
    ? 'rounded-2xl lg:rounded-tl-card lg:rounded-tr-card lg:rounded-bl-card lg:rounded-br-none'
    : 'rounded-2xl lg:rounded-tl-card lg:rounded-tr-card lg:rounded-br-card lg:rounded-bl-none'

  return (
    <article className="flex w-full flex-col gap-6 lg:relative lg:min-h-0 lg:flex-1 lg:gap-0 lg:overflow-hidden">
      <header className="flex flex-col items-start lg:hidden">
        <h3 className="font-general text-title-md font-medium leading-[1.2] tracking-normal text-neutral-950">
          {title}
        </h3>
        <p className="mt-2 font-satoshi text-body-sm font-normal leading-normal tracking-normal text-neutral-800">
          {description}
        </p>
      </header>

      <div
        className={`relative aspect-[3/2] w-full max-h-[min(48svh,400px)] shrink-0 overflow-hidden sm:max-h-[min(52svh,440px)] lg:absolute lg:inset-0 lg:aspect-auto lg:max-h-none ${imageRadiusClass}`}
      >
        <ResponsiveImage
          {...image}
          alt={imageAlt}
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        <div
          className={
            isPanelRight
              ? 'absolute right-0 bottom-0 z-20 hidden w-offering-panel max-w-full rounded-tl-card bg-white lg:block'
              : 'absolute bottom-0 left-0 z-20 hidden w-offering-panel max-w-full rounded-tr-card bg-white lg:block'
          }
        >
          <div className={isPanelRight ? 'pt-6 pr-6 pb-4 pl-6' : 'pt-4 pr-8 pb-4 pl-4'}>
            <h3 className="font-general text-title-md font-medium leading-[1.2] tracking-normal text-neutral-950">
              {title}
            </h3>
            <p className="mt-1 font-satoshi text-body-sm font-normal leading-normal tracking-normal text-neutral-800">
              {panelDescription}
            </p>
          </div>

          <CardStickyCorners variant={isPanelRight ? 'bottom-right' : 'bottom-left'} />
        </div>
      </div>
    </article>
  )
}
