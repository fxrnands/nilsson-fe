import {
  NEWS_1_IMAGE,
  NEWS_2_IMAGE,
  NEWS_3_IMAGE,
  NEWS_4_IMAGE,
} from '@/lib/constants'

export const newsArticles = [
  {
    title: 'Smart Homes, Smarter Future: Integrating Technology in Eco-Friendly Designs',
    imageSrc: NEWS_1_IMAGE,
    imageAlt: 'Modern bedroom with orange bedding',
    href: '#news-smart-homes',
  },
  {
    title: 'Minimalism in Interior Design: Embracing Simplicity for Modern',
    imageSrc: NEWS_2_IMAGE,
    imageAlt: 'Dark modern kitchen with orange stools',
    href: '#news-minimalism',
  },
  {
    title: 'Sustainable Materials: Paving the Way for Greener Architecture',
    imageSrc: NEWS_3_IMAGE,
    imageAlt: 'Modern concrete home with green lawn',
    href: '#news-sustainable-materials',
  },
  {
    title: 'The Essence of Biophilic Design: Bridging Architecture and Nature',
    imageSrc: NEWS_4_IMAGE,
    imageAlt: 'Concrete home with red car in driveway',
    href: '#news-biophilic-design',
  },
] as const
