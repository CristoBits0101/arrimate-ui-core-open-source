import location from '@/assets/icons/cards/location.svg'
import Image from 'next/image'

interface CountrySpanProps {
  countryCode?: string
}

export default function CountrySpan({ countryCode }: CountrySpanProps) {
  if (!countryCode) return null
  return (
    <span className='w-fit h-fit font-light text-xs flex items-center justify-center gap-0.5'>
      <Image
        src={location}
        alt={`${countryCode} flag`}
        className='w-5 h-5 aspect-square object-contain rounded-full'
      />
      {countryCode}
    </span>
  )
}
