'use client'

import Image from 'next/image'
import language from '@/modules/configuration/assets/icons/selectors/language.svg'
import { useRouter, usePathname } from '@/i18n/routing'
import { useTranslations, useLocale } from 'next-intl'
import { ChangeEvent, useEffect } from 'react'

const LanguageSelector = () => {
  const router = useRouter()
  const path = usePathname()
  const locale = useLocale()
  const t = useTranslations('SettingsPanel')
  const supportedLocales: Array<'en' | 'es'> = ['en', 'es']

  useEffect(() => {
    // Set initial language in localStorage if not already set
    if (!localStorage.getItem('language')) {
      localStorage.setItem('language', locale)
    }
  }, [locale])

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value as 'en' | 'es'
    if (supportedLocales.includes(newLocale)) {
      const newPath = path.replace(`/${locale}`, `/${newLocale}`)
      router.push(newPath, { locale: newLocale })
      // Save selected language in localStorage
      localStorage.setItem('language', newLocale)
    }
  }

  return (
    <section className='w-full h-fit flex flex-col gap-2 items-center'>
      <div className='w-full h-fit flex flex-row items-center gap-2'>
        <Image src={language} alt='Languages' className='w-5' />
        <select
          className='appearance-none flex flex-row items-center outline-none bg-transparent cursor-pointer'
          onChange={handleChange}
          value={locale}
        >
          <option value='en'>{t('language.english')}</option>
          <option value='es'>{t('language.spanish')}</option>
        </select>
      </div>
    </section>
  )
}

export default LanguageSelector
