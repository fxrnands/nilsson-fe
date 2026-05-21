import { WhitePanelBottomRight } from '@/components/ui/WhitePanelBottomRight'
import { ImageBottomGradient } from '@/components/ui/ImageBottomGradient'

interface ProjectCardProps {
  title: string
  description: string
  imageSrc: string
  imageAlt: string
  href: string
}

function ProjectArrowIcon() {
  return (
    <svg
      width={18}
      height={18}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M2.5 7H11.5M11.5 7L7.5 3M11.5 7L7.5 11"
        stroke="white"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ExploreLink({ href, title, className = '' }: { href: string; title: string; className?: string }) {
  return (
    <a
      href={href}
      className={`inline-flex items-center gap-4 ${className}`.trim()}
      aria-label={`Explore ${title} project`}
    >
      <span className="font-general text-[13px] font-medium leading-[1.3] tracking-[0.5px] text-neutral-950 uppercase">
        Explore
      </span>
      <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-neutral-950">
        <ProjectArrowIcon />
      </span>
    </a>
  )
}

export function ProjectCard({ title, description, imageSrc, imageAlt, href }: ProjectCardProps) {
  return (
    <article className="flex w-full flex-col gap-6 lg:relative lg:h-full lg:gap-0 lg:overflow-hidden lg:rounded-tl-card lg:rounded-tr-card lg:rounded-bl-card lg:rounded-br-none">
      <div className="relative aspect-[3/2] h-auto w-full shrink-0 overflow-hidden rounded-2xl lg:absolute lg:inset-0 lg:aspect-auto lg:h-full lg:max-h-none lg:rounded-none">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="absolute inset-0 h-full w-full object-cover object-center"
          draggable={false}
        />

        <ImageBottomGradient />

        <h3 className="pointer-events-none absolute bottom-3 left-3 z-10 font-general text-[40px] leading-none font-normal tracking-[-1.5px] text-project-title capitalize sm:text-[48px] sm:tracking-[-2px] lg:bottom-8 lg:left-8 lg:text-[128px] lg:uppercase lg:whitespace-nowrap">
          {title}
        </h3>
      </div>

      <div className="flex flex-col items-start gap-6 lg:hidden">
        <p className="font-satoshi text-[16px] font-normal leading-normal tracking-normal text-neutral-800">
          {description}
        </p>
        <ExploreLink href={href} title={title} />
      </div>

      <WhitePanelBottomRight className="box-border hidden lg:block lg:w-project-panel lg:max-w-[min(100%,696px)] lg:shrink-0">
        <div className="box-border px-[48px] pt-[32px] pb-4">
          <div className="max-w-project-panel-text">
            <p className="font-satoshi text-[20px] font-normal leading-normal tracking-normal text-neutral-800">
              {description}
            </p>

            <a
              href={href}
              className="mt-6 inline-flex items-center gap-4"
              aria-label={`View ${title} project`}
            >
              <span className="font-general text-[13px] font-medium leading-[1.3] tracking-[0.5px] text-neutral-950 uppercase">
                View project
              </span>
              <span className="flex size-[36px] shrink-0 items-center justify-center rounded-full bg-neutral-950">
                <ProjectArrowIcon />
              </span>
            </a>
          </div>
        </div>
      </WhitePanelBottomRight>
    </article>
  )
}
