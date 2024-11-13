'use client'

import { useRouter, usePathname } from '@/i18n/routing'
import { useLocale } from 'next-intl'
import { useEffect } from 'react'

type Locale = 'en' | 'es'

const useLanguageSelector = () => {
  const router = useRouter()
  const path = usePathname()
  const locale = useLocale()
  const supportedLocales: Array<Locale> = ['en', 'es']

  useEffect(() => {
    if (!localStorage.getItem('language')) {
      localStorage.setItem('language', locale)
    }
  }, [locale])

  const changeLanguage = (newLocale: Locale) => {
    if (supportedLocales.includes(newLocale)) {
      const newPath = path.replace(`/${locale}`, `/${newLocale}`)
      router.push(newPath, { locale: newLocale })
      localStorage.setItem('language', newLocale)
    }
  }

  return {
    locale,
    changeLanguage
  }
}

export default useLanguageSelector
