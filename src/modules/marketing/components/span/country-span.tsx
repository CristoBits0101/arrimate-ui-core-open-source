import us from '@/modules/marketing/assets/icons/flags/us.svg'
import china from '@/modules/marketing/assets/icons/flags/cn.svg'
import russia from '@/modules/marketing/assets/icons/flags/ru.svg'
import germany from '@/modules/marketing/assets/icons/flags/de.svg'
import france from '@/modules/marketing/assets/icons/flags/fr.svg'
import uk from '@/modules/marketing/assets/icons/flags/gb.svg'
import japan from '@/modules/marketing/assets/icons/flags/jp.svg'
import india from '@/modules/marketing/assets/icons/flags/in.svg'
import brazil from '@/modules/marketing/assets/icons/flags/br.svg'
import canada from '@/modules/marketing/assets/icons/flags/ca.svg'
import australia from '@/modules/marketing/assets/icons/flags/au.svg'
import italy from '@/modules/marketing/assets/icons/flags/it.svg'
import spain from '@/modules/marketing/assets/icons/flags/es.svg'
import southKorea from '@/modules/marketing/assets/icons/flags/kr.svg'
import mexico from '@/modules/marketing/assets/icons/flags/mx.svg'
import indonesia from '@/modules/marketing/assets/icons/flags/id.svg'
import saudiArabia from '@/modules/marketing/assets/icons/flags/sa.svg'
import argentina from '@/modules/marketing/assets/icons/flags/ar.svg'
import egypt from '@/modules/marketing/assets/icons/flags/eg.svg'
import southAfrica from '@/modules/marketing/assets/icons/flags/za.svg'
import Image from 'next/image'

interface CountrySpanProps {
  countryCode?: string
}

const flagMap: Record<string, string> = {
  US: us,
  CN: china,
  RU: russia,
  DE: germany,
  FR: france,
  GB: uk,
  JP: japan,
  IN: india,
  BR: brazil,
  CA: canada,
  AU: australia,
  IT: italy,
  ES: spain,
  KR: southKorea,
  MX: mexico,
  ID: indonesia,
  SA: saudiArabia,
  AR: argentina,
  EG: egypt,
  ZA: southAfrica
}

export default function CountrySpan({ countryCode }: CountrySpanProps) {
  if (!countryCode || !flagMap[countryCode]) return null

  const FlagIcon = flagMap[countryCode]

  return (
    <span className='w-fit h-fit left-1 text-xs font-light rounded-full border-2 border-solid border-[#473E43]'>
      <Image
        src={FlagIcon}
        alt={`${countryCode} flag`}
        className='w-5 h-5 aspect-square object-contain rounded-full'
      />
    </span>
  )
}
