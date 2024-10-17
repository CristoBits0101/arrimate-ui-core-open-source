'use client'

import Image from 'next/image'
import language from '@/assets/icons/settings/language.svg'
import { useRouter, usePathname } from '@/i18n/routing'
import { useTranslations, useLocale } from 'next-intl'
import { ChangeEvent } from 'react'

const LanguageSelector = () => {
  // To modify the active route
  const router = useRouter()
  // Returns: /page
  const path = usePathname()
  console.log(path)
  // Returns: en or es ...
  const locale = useLocale()
  // Panel translations
  const t = useTranslations('SettingsPanel')

  // Supported languages
  const supportedLocales: Array<'en' | 'es'> = ['en', 'es']

  // Handle change event for language selection
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    // We ensure that the value is of a supported type
    const newLocale = e.target.value as 'en' | 'es'
    if (supportedLocales.includes(newLocale)) {
      // Replace the current location with the new one
      const newPath = path.replace(`/${locale}`, `/${newLocale}`)
      // Redirect with the new location
      router.push(newPath, { locale: newLocale })
    }
  }

  return (
    <section className='text-sm w-full h-fit flex flex-col gap-2 items-center'>
      <div className='w-full h-fit flex flex-row items-center font-medium gap-2'>
        <Image src={language} alt='Languages' className='w-5' />
        <h2 className='font-semibold flex flex-row items-center'>
          {t('language.title')}
        </h2>
      </div>
      <div className='w-full h-fit flex'>
        <select
          className='appearance-none font-normal w-full h-fit pl-1 pr-1 pt-2 pb-2 border-[0.05rem] border-solid border-[#bfbdc050] outline-none bg-[#F4F4F4]'
          // Detect when the language is changed
          onChange={handleChange}
          // Select the current location as the default value
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
