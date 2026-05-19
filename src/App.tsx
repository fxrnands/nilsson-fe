import { PageScroll } from '@/components/layout/PageScroll'
import { HeroSection } from '@/sections/hero/HeroSection'
import { WhatWeDoSection } from '@/sections/intro/WhatWeDoSection'
import { ProjectCardSection } from '@/sections/projects/ProjectCardSection'
import { selectedProjects } from '@/sections/projects/projects'
import { SelectedWorkIntroSection } from '@/sections/projects/SelectedWorkIntroSection'
import { FooterSection } from '@/sections/footer/FooterSection'
import { NewsSection } from '@/sections/news/NewsSection'
import { ServicesGroup } from '@/sections/services/ServicesGroup'

function App() {
  return (
    <div className="min-h-svh w-full lg:h-full lg:overflow-hidden">
      <PageScroll>
        <HeroSection />
        <WhatWeDoSection />
        <ServicesGroup />
        <SelectedWorkIntroSection />
        {selectedProjects.map((project) => (
          <ProjectCardSection key={project.href} {...project} />
        ))}
        <NewsSection />
        <FooterSection />
      </PageScroll>
    </div>
  )
}

export default App
