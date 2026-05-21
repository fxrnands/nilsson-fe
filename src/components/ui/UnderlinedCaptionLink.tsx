interface UnderlinedCaptionLinkProps {
  href: string
  children: string
  className?: string
}

export function UnderlinedCaptionLink({
  href,
  children,
  className = '',
}: UnderlinedCaptionLinkProps) {
  return (
    <a
      href={href}
      className={`inline-block border-b border-neutral-950 pb-0.5 font-general text-caption font-medium leading-[1.3] tracking-[0.5px] text-neutral-950 uppercase ${className}`.trim()}
    >
      {children}
    </a>
  )
}
