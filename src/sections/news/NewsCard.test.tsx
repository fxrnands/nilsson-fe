import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { NewsCard } from '@/sections/news/NewsCard'

const article = {
  title: 'Smart Homes, Smarter Future',
  imageSrc: '/images/news-1.webp',
  imageAlt: 'Modern bedroom',
  href: '#news-smart-homes',
}

describe('NewsCard', () => {
  it('renders mobile layout with title and read link below the image', () => {
    render(<NewsCard {...article} />)

    const mobile = screen.getByTestId('news-card-mobile')
    expect(within(mobile).getByRole('heading', { level: 3, name: article.title })).toBeInTheDocument()
    expect(within(mobile).getByRole('link', { name: /read article/i })).toHaveAttribute(
      'href',
      article.href,
    )
    expect(screen.getByRole('img', { name: article.imageAlt })).toBeInTheDocument()
  })
})
