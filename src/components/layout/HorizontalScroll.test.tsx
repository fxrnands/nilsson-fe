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

vi.mock('lenis/react', () => ({
  ReactLenis: ({ children }: { children: ReactNode }) => (
    <div data-testid="lenis-scroll">{children}</div>
  ),
}))

import { HorizontalScroll } from '@/components/layout/HorizontalScroll'

describe('HorizontalScroll', () => {
  beforeEach(() => {
    vi.stubGlobal('matchMedia', vi.fn(() => createMatchMedia(false)))
  })

  afterEach(() => {
    vi.unstubAllGlobals()
  })

  it('uses Lenis when reduced motion is not preferred', () => {
    render(
      <HorizontalScroll>
        <p>Panel</p>
      </HorizontalScroll>,
    )

    expect(screen.getByTestId('lenis-scroll')).toBeInTheDocument()
  })

  it('uses native overflow when reduced motion is preferred', () => {
    vi.stubGlobal('matchMedia', vi.fn(() => createMatchMedia(true)))

    const { container } = render(
      <HorizontalScroll>
        <p>Panel</p>
      </HorizontalScroll>,
    )

    expect(screen.queryByTestId('lenis-scroll')).not.toBeInTheDocument()
    expect(
      container.querySelector('.overflow-x-auto[aria-label="Horizontal page scroll"]'),
    ).not.toBeNull()
  })
})
