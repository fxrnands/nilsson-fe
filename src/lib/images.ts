import {
  ECO_LOFT_IMAGE,
  EXTERIOR_IMAGE,
  HERO_IMAGE,
  INTERIOR_IMAGE,
  NEWS_1_IMAGE,
  NEWS_2_IMAGE,
  NEWS_3_IMAGE,
  NEWS_4_IMAGE,
  SERVICES_IMAGE,
  THE_ESCAPE_IMAGE,
} from '@/lib/constants'

export interface ImageAsset {
  src: string
  width: number
  height: number
  sizes: string
}

/** Builds a single-source srcSet; add more widths to the asset when responsive files exist. */
export function buildSrcSet(src: string, width: number): string {
  return `${src} ${width}w`
}

export const heroImage: ImageAsset = {
  src: HERO_IMAGE,
  width: 1600,
  height: 1067,
  sizes: '(max-width: 1023px) 100vw, 100vw',
}

export const servicesImage: ImageAsset = {
  src: SERVICES_IMAGE,
  width: 1200,
  height: 900,
  sizes: '(max-width: 1023px) 100vw, 50vw',
}

export const interiorImage: ImageAsset = {
  src: INTERIOR_IMAGE,
  width: 1200,
  height: 800,
  sizes: '(max-width: 1023px) 100vw, 40vw',
}

export const exteriorImage: ImageAsset = {
  src: EXTERIOR_IMAGE,
  width: 1200,
  height: 800,
  sizes: '(max-width: 1023px) 100vw, 40vw',
}

export const theEscapeImage: ImageAsset = {
  src: THE_ESCAPE_IMAGE,
  width: 1200,
  height: 800,
  sizes: '(max-width: 1023px) 100vw, 100vw',
}

export const ecoLoftImage: ImageAsset = {
  src: ECO_LOFT_IMAGE,
  width: 1200,
  height: 800,
  sizes: '(max-width: 1023px) 100vw, 100vw',
}

export const newsImages: Record<string, ImageAsset> = {
  [NEWS_1_IMAGE]: { src: NEWS_1_IMAGE, width: 800, height: 500, sizes: '(max-width: 1023px) 100vw, 25vw' },
  [NEWS_2_IMAGE]: { src: NEWS_2_IMAGE, width: 800, height: 500, sizes: '(max-width: 1023px) 100vw, 25vw' },
  [NEWS_3_IMAGE]: { src: NEWS_3_IMAGE, width: 800, height: 500, sizes: '(max-width: 1023px) 100vw, 25vw' },
  [NEWS_4_IMAGE]: { src: NEWS_4_IMAGE, width: 800, height: 500, sizes: '(max-width: 1023px) 100vw, 25vw' },
}

export function getNewsImage(src: string): ImageAsset {
  return newsImages[src] ?? { src, width: 800, height: 500, sizes: '(max-width: 1023px) 100vw, 25vw' }
}

const projectImageBySrc: Record<string, ImageAsset> = {
  [THE_ESCAPE_IMAGE]: theEscapeImage,
  [ECO_LOFT_IMAGE]: ecoLoftImage,
}

export function getProjectImage(src: string): ImageAsset {
  return projectImageBySrc[src] ?? { src, width: 1200, height: 800, sizes: '(max-width: 1023px) 100vw, 100vw' }
}
