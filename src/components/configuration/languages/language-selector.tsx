'use client'

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
    <section className='w-full h-fit flex flex-col gap-2'>
      <h2 className='flex flex-col justify-center font-medium'>
        {t('language')}
      </h2>
      <select
        className='w-full h-fit pl-1 pr-1 pt-2 pb-2 border-[0.094rem] border-solid border-[#bfbdc050] outline-none bg-[#F4F4F4]'
        // Detect when the language is changed
        onChange={handleChange}
        // Select the current location as the default value
        value={locale}
      >
        <option value='en'>{t('english')}</option>
        <option value='es'>{t('spanish')}</option>
      </select>
    </section>
  )
}

export default LanguageSelector
