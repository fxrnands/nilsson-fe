import { ECO_LOFT_IMAGE, THE_ESCAPE_IMAGE } from '@/lib/constants'

export const selectedProjects = [
  {
    title: 'The Escape',
    description:
      'From crafting compelling brand identities to delivering innovative digital solutions, our meticulous art direction ensures cohesive experiences.',
    imageSrc: THE_ESCAPE_IMAGE,
    imageAlt: 'The Escape modern white villa with pool',
    href: '#the-escape',
  },
  {
    title: 'Eco Loft',
    description:
      'From crafting compelling brand identities to delivering innovative digital solutions, our meticulous art direction ensures cohesive experiences.',
    imageSrc: ECO_LOFT_IMAGE,
    imageAlt: 'Eco Loft concrete home with outdoor lounge',
    href: '#eco-loft',
  },
] as const
