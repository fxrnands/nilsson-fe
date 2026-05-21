import { footerOffices } from '@/sections/footer/footerContent'

export function FooterOfficesColumn() {
  return (
    <div className="flex flex-col gap-8 lg:gap-10">
      <p className="font-general text-caption font-medium leading-[1.3] tracking-[0.5px] text-white/50 uppercase">
        Offices
      </p>
      <ul className="flex flex-col gap-8">
        {footerOffices.map((office) => (
          <li key={office.city}>
            <p className="font-general text-caption font-medium leading-[1.3] tracking-[0.5px] text-white uppercase">
              {office.city}
            </p>
            <address className="mt-2 font-satoshi text-address-sm font-normal leading-normal tracking-normal text-footer-address not-italic">
              {office.lines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
          </li>
        ))}
      </ul>
    </div>
  )
}
