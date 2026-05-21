import { renderHook, act } from '@testing-library/react'
import { describe, expect, it, vi, beforeEach, afterEach } from 'vitest'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'

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

describe('usePrefersReducedMotion', () => {
  let media: ReturnType<typeof createMatchMedia>

  beforeEach(() => {
    media = createMatchMedia(false)
    vi.stubGlobal('matchMedia', vi.fn(() => media))
  })

  afterEach(() => {
    vi.unstubAllGlobals()
  })

  it('returns true when reduced motion is preferred', () => {
    media = createMatchMedia(true)
    vi.stubGlobal('matchMedia', vi.fn(() => media))

    const { result } = renderHook(() => usePrefersReducedMotion())
    expect(result.current).toBe(true)
  })

  it('reacts to preference changes', () => {
    const { result } = renderHook(() => usePrefersReducedMotion())
    expect(result.current).toBe(false)

    act(() => {
      media.setMatches(true)
    })

    expect(result.current).toBe(true)
  })
})
