interface SectionPillProps {
  label: string
}

export function SectionPill({ label }: SectionPillProps) {
  return (
    <span className="inline-flex w-fit shrink-0 items-center justify-center gap-2 rounded-lg bg-pill-surface py-[10px] px-[14px] lg:h-[38px] lg:px-4 lg:py-0">
      <span className="size-1 shrink-0 rounded-full bg-ink" aria-hidden />
      <span className="font-general text-pill-mobile font-normal capitalize text-ink lg:text-sm lg:uppercase">
        {label}
      </span>
    </span>
  )
}
