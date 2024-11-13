'use client'

import Image from 'next/image'
import en from '@/modules/configuration/assets/icons/selectors/gb.svg'
import es from '@/modules/configuration/assets/icons/selectors/es.svg'
import { useRouter, usePathname } from '@/i18n/routing'
import { useTranslations, useLocale } from 'next-intl'
import { useEffect } from 'react'

const LanguageSelector = () => {
  const router = useRouter()
  const path = usePathname()
  const locale = useLocale()
  const t = useTranslations('SettingsPanel')
  const supportedLocales: Array<'en' | 'es'> = ['en', 'es']

  useEffect(() => {
    //
    if (!localStorage.getItem('language'))
      localStorage.setItem('language', locale)
  }, [locale])

  const handleLanguageClick = (newLocale: 'en' | 'es') => {
    if (supportedLocales.includes(newLocale)) {
      const newPath = path.replace(`/${locale}`, `/${newLocale}`)
      router.push(newPath, { locale: newLocale })
      //
      localStorage.setItem('language', newLocale)
    }
  }

  return (
    <section className='w-full h-fit flex flex-col'>
      <button
        className={`text-left cursor-pointer px-8 py-2 hover:bg-[#F4F4F4] flex justify-between items-center gap-2 ${
          locale === 'en' ? 'bg-[#F4F4F4] font-medium' : ''
        }`}
        onClick={() => handleLanguageClick('en')}
      >
        {t('language.english')}
        <Image
          width={24}
          height={18}
          src={en}
          alt='English icon'
          className='object-cover'
        />
      </button>
      <button
        className={`text-left cursor-pointer px-8 py-2 hover:bg-[#F4F4F4] flex justify-between items-center gap-2 ${
          locale === 'es' ? 'bg-[#F4F4F4] font-medium' : ''
        }`}
        onClick={() => handleLanguageClick('es')}
      >
        {t('language.spanish')}
        <Image
          width={24}
          height={18}
          src={es}
          alt='Spanish icon'
          className='object-cover'
        />
      </button>
    </section>
  )
}

export default LanguageSelector
