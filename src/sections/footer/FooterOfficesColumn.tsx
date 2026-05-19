import { footerOffices } from '@/sections/footer/footerContent'

export function FooterOfficesColumn() {
  return (
    <div>
      <p className="font-general text-[13px] font-medium leading-[1.3] tracking-[0.5px] text-white/50 uppercase">
        Offices
      </p>
      <ul className="mt-4 space-y-6 lg:mt-5">
        {footerOffices.map((office) => (
          <li key={office.city}>
            <p className="font-general text-[13px] font-medium leading-[1.3] tracking-[0.5px] text-white uppercase">
              {office.city}
            </p>
            <address className="mt-2 font-satoshi text-[14px] font-normal leading-normal tracking-normal text-footer-address not-italic">
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
