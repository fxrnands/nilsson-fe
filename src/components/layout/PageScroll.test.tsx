import type { ReactNode } from 'react'
import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi, beforeEach, afterEach } from 'vitest'

function createMatchMedia(matches: boolean) {
  let current = matches
  const listeners = new Set<() => void>()
  return {
    get matches() {
      return current
    },
    media: '',
    addEventListener: (_: string, listener: () => void) => {
      listeners.add(listener)
    },
    removeEventListener: (_: string, listener: () => void) => {
      listeners.delete(listener)
    },
    setMatches(next: boolean) {
      current = next
      listeners.forEach((listener) => listener())
    },
  }
}

vi.mock('@/components/layout/HorizontalScroll', () => ({
  HorizontalScroll: ({ children }: { children: ReactNode }) => (
    <div data-testid="horizontal-scroll">{children}</div>
  ),
}))

import { PageScroll } from '@/components/layout/PageScroll'

describe('PageScroll', () => {
  beforeEach(() => {
    vi.stubGlobal('matchMedia', vi.fn(() => createMatchMedia(false)))
  })

  afterEach(() => {
    vi.unstubAllGlobals()
  })

  it('renders vertical main layout on mobile', () => {
    const { container } = render(
      <PageScroll>
        <p>Section</p>
      </PageScroll>,
    )

    expect(screen.getByRole('main', { name: 'Page' })).toBeInTheDocument()
    expect(container.querySelector('[data-testid="horizontal-scroll"]')).toBeNull()
  })

  it('renders horizontal scroll on desktop', () => {
    vi.stubGlobal('matchMedia', vi.fn(() => createMatchMedia(true)))

    const { container } = render(
      <PageScroll>
        <p>Section</p>
      </PageScroll>,
    )

    expect(screen.getByTestId('horizontal-scroll')).toBeInTheDocument()
    expect(container.querySelector('main')).toBeNull()
  })
})
