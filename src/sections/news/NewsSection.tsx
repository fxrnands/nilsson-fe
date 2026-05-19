import { SectionSeparator } from '@/components/ui/SectionSeparator'
import { newsArticles } from '@/sections/news/articles'
import { NewsCard } from '@/sections/news/NewsCard'
import { NewsSidebar } from '@/sections/news/NewsSidebar'

export function NewsSection() {
  return (
    <section
      className="relative z-10 flex w-full shrink-0 flex-col overflow-hidden bg-white px-6 py-12 lg:-mr-card-overlap lg:h-svh lg:w-news-section lg:min-w-news-section lg:max-w-news-section lg:shrink-0 lg:basis-[length:var(--width-news-section)] lg:flex-row lg:rounded-tr-card lg:rounded-br-card lg:px-0 lg:py-0"
      aria-label="News"
    >
      <SectionSeparator className="hidden lg:block" />

      <div className="flex w-full flex-col gap-10 lg:min-h-0 lg:flex-1 lg:flex-row lg:items-center lg:gap-12">
        <NewsSidebar />

        <div className="flex w-full flex-col gap-10 lg:grid lg:grid-cols-2 lg:gap-8 lg:pr-12">
          {newsArticles.map((article) => (
            <NewsCard key={article.href} {...article} />
          ))}
        </div>
      </div>
    </section>
  )
}
