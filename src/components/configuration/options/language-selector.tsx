'use client'

import Image from 'next/image'
import language from '@/assets/icons/settings/language.svg'
import { useRouter, usePathname } from '@/i18n/routing'
import { useTranslations, useLocale } from 'next-intl'
import { MouseEvent } from 'react'

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

  // Handle language change event
  const handleLanguageChange = (
    e: MouseEvent<HTMLParagraphElement>,
    newLocale: 'en' | 'es'
  ) => {
    e.preventDefault()
    if (supportedLocales.includes(newLocale)) {
      // Replace the current location with the new one
      const newPath = path.replace(`/${locale}`, `/${newLocale}`)
      // Redirect with the new location
      router.push(newPath, { locale: newLocale })
    }
  }

  return (
    <details name='group'>
      <summary className='text-sm font-medium flex justify-between items-center cursor-pointer'>
        <h2 className='flex gap-2'>
          <Image
            src={language}
            alt='Languages'
            className='w-5 h-5 aspect-square'
          />
          {t('language.title')}
        </h2>
      </summary>
      <article className='w-full h-fit bg-white shadow-md p-2 border rounded'>
        {/* Option for English */}
        <p
          onClick={(e) => handleLanguageChange(e, 'en')}
          className={`cursor-pointer p-2 hover:bg-gray-200 ${
            locale === 'en' ? 'font-bold' : ''
          }`}
        >
          {t('language.english')}
        </p>
        {/* Option for Spanish */}
        <p
          onClick={(e) => handleLanguageChange(e, 'es')}
          className={`cursor-pointer p-2 hover:bg-gray-200 ${
            locale === 'es' ? 'font-bold' : ''
          }`}
        >
          {t('language.spanish')}
        </p>
      </article>
    </details>
  )
}

export default LanguageSelector
