import { renderHook, act } from '@testing-library/react'
import { describe, expect, it, vi, beforeEach, afterEach } from 'vitest'
import { useMediaQuery } from '@/hooks/useMediaQuery'

function createMatchMedia(initialMatches: boolean) {
  let matches = initialMatches
  const listeners = new Set<() => void>()

  return {
    get matches() {
      return matches
    },
    media: '',
    addEventListener: (_: string, listener: () => void) => {
      listeners.add(listener)
    },
    removeEventListener: (_: string, listener: () => void) => {
      listeners.delete(listener)
    },
    setMatches(next: boolean) {
      matches = next
      listeners.forEach((listener) => listener())
    },
  }
}

describe('useMediaQuery', () => {
  let media: ReturnType<typeof createMatchMedia>

  beforeEach(() => {
    media = createMatchMedia(false)
    vi.stubGlobal('matchMedia', vi.fn(() => media))
  })

  afterEach(() => {
    vi.unstubAllGlobals()
  })

  it('returns the current matchMedia result', () => {
    media = createMatchMedia(true)
    vi.stubGlobal('matchMedia', vi.fn(() => media))

    const { result } = renderHook(() => useMediaQuery('(min-width: 1024px)'))
    expect(result.current).toBe(true)
  })

  it('updates when the media query changes', () => {
    const { result } = renderHook(() => useMediaQuery('(min-width: 1024px)'))
    expect(result.current).toBe(false)

    act(() => {
      media.setMatches(true)
    })

    expect(result.current).toBe(true)
  })
})
