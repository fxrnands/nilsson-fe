interface SectionPillProps {
  label: string
}

export function SectionPill({ label }: SectionPillProps) {
  return (
    <span className="inline-flex h-[38px] w-fit shrink-0 items-center justify-center gap-2 rounded-lg bg-[#F8F8F8] px-4">
      <span className="size-1 shrink-0 rounded-full bg-[#111111]" aria-hidden />
      <span className="font-general text-sm font-normal uppercase text-neutral-950">{label}</span>
    </span>
  )
}
