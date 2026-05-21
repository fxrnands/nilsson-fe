import { buildSrcSet } from '@/lib/images'

interface ResponsiveImageProps {
  src: string
  alt: string
  width: number
  height: number
  sizes: string
  className?: string
  priority?: boolean
  srcSet?: string
}

export function ResponsiveImage({
  src,
  alt,
  width,
  height,
  sizes,
  className = '',
  priority = false,
  srcSet,
}: ResponsiveImageProps) {
  return (
    <img
      src={src}
      srcSet={srcSet ?? buildSrcSet(src, width)}
      sizes={sizes}
      alt={alt}
      width={width}
      height={height}
      className={className}
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : 'auto'}
      decoding={priority ? 'sync' : 'async'}
      draggable={false}
    />
  )
}
