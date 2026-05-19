import { ScrollPanel } from '@/components/layout/ScrollPanel'
import { ProjectCard } from '@/sections/projects/ProjectCard'

interface ProjectCardSectionProps {
  title: string
  description: string
  imageSrc: string
  imageAlt: string
  href: string
}

export function ProjectCardSection(props: ProjectCardSectionProps) {
  return (
    <ScrollPanel
      className="bg-white px-6 py-10 max-lg:min-h-0 lg:px-0 lg:py-0 lg:pt-hero-inset lg:pr-hero-inset lg:pb-hero-inset"
      aria-label={props.imageAlt}
    >
      <ProjectCard {...props} />
    </ScrollPanel>
  )
}
