'use client'

import enIcon from '@/modules/configuration/assets/icons/buttons/languages/gb.svg'
import esIcon from '@/modules/configuration/assets/icons/buttons/languages/es.svg'
import Image from 'next/image'
import useLanguageSection from '@/modules/configuration/hooks/useLanguageSection'

export default function ChangeLanguage() {
  const { changeLanguage } = useLanguageSection()
  return (
    <div>
      <button onClick={() => changeLanguage('en')}>
        <Image src={enIcon} width={24} height={24} alt='English icon' className='w-5 aspect-video h-auto' />
      </button>
      <button onClick={() => changeLanguage('es')}>
        <Image src={esIcon} width={24} height={24} alt='Spanish icon' className='w-5 aspect-video h-auto' />
      </button>
    </div>
  )
}
