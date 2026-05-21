import { useLayoutEffect, useState } from 'react'

const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)'

function getReducedMotionPreference(): boolean {
  if (typeof window === 'undefined') {
    return false
  }
  return window.matchMedia(REDUCED_MOTION_QUERY).matches
}

export function usePrefersReducedMotion(): boolean {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(
    () => getReducedMotionPreference(),
  )

  useLayoutEffect(() => {
    const media = window.matchMedia(REDUCED_MOTION_QUERY)
    const onChange = () => setPrefersReducedMotion(media.matches)
    onChange()
    media.addEventListener('change', onChange)
    return () => media.removeEventListener('change', onChange)
  }, [])

  return prefersReducedMotion
}
