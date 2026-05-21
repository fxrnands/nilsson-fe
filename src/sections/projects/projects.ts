import { ECO_LOFT_IMAGE, THE_ESCAPE_IMAGE } from '@/lib/constants'

export const selectedProjects = [
  {
    title: 'The Escape',
    description:
      'A serene villa retreat blending indoor comfort with outdoor living, designed around natural light, pool terraces, and restrained modern materials.',
    imageSrc: THE_ESCAPE_IMAGE,
    imageAlt: 'The Escape modern white villa with pool',
    href: '#the-escape',
  },
  {
    title: 'Eco Loft',
    description:
      'A concrete loft framed by native landscaping and open courtyards, prioritizing thermal comfort, passive shading, and honest structural expression.',
    imageSrc: ECO_LOFT_IMAGE,
    imageAlt: 'Eco Loft concrete home with outdoor lounge',
    href: '#eco-loft',
  },
] as const
