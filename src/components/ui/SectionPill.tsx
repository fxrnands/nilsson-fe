interface SectionPillProps {
  label: string
}

export function SectionPill({ label }: SectionPillProps) {
  return (
    <span className="inline-flex w-fit shrink-0 items-center justify-center gap-2 rounded-lg bg-[#F8F8F8] py-[10px] px-[14px] lg:h-[38px] lg:px-4 lg:py-0">
      <span className="size-1 shrink-0 rounded-full bg-[#111111]" aria-hidden />
      <span className="font-general text-[12px] font-normal capitalize text-neutral-950 lg:text-sm lg:uppercase">
        {label}
      </span>
    </span>
  )
}
