'use client'

import Image from 'next/image'
import language from '@/modules/configuration/assets/icons/selectors/language.svg'
import { useRouter, usePathname } from '@/i18n/routing'
import { useTranslations, useLocale } from 'next-intl'
import { ChangeEvent } from 'react'

const LanguageSelector = () => {
  // To modify the active route
  const router = useRouter()
  // Returns the current path
  const path = usePathname()
  console.log(path)
  // Returns the current locale
  const locale = useLocale()
  // Translations for the settings panel
  const t = useTranslations('SettingsPanel')

  // Supported languages
  const supportedLocales: Array<'en' | 'es'> = ['en', 'es']

  // Handles the change event for the language selection
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    // Ensures the selected value is a supported language
    const newLocale = e.target.value as 'en' | 'es'
    if (supportedLocales.includes(newLocale)) {
      // Replace the current path with the new locale
      const newPath = path.replace(`/${locale}`, `/${newLocale}`)
      // Redirects to the updated path
      router.push(newPath, { locale: newLocale })
    }
  }

  return (
    <section className='w-full h-fit flex flex-col gap-2 items-center'>
      <div className='w-full h-fit flex flex-row items-center gap-2'>
        {/* Icon for language selection */}
        <Image src={language} alt='Languages' className='w-5' />
        <select
          className='appearance-none flex flex-row items-center outline-none bg-transparent cursor-pointer'
          // Detects when the language selection changes
          onChange={handleChange}
          // Sets the current language as the default value
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
