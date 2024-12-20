'use client'

// React
import { useEffect } from 'react'

// next-intl
import { useLocale } from 'next-intl'
import { useRouter, usePathname } from '@/i18n/routing'

type Locale = 'en' | 'es'

const useLanguageSection = () => {
  /**
   * Example:
   * Object.back: () => window.history.back()
   * Object.fastRefresh: () => {…}
   * Object.forward: () => window.history.forward()
   * Object.prefetch: ƒ handler(href, options)
   * Object.push: ƒ handler(href, options)
   * Object.refresh: () => {…}
   * Object.replace: ƒ handler(href, options)
   */
  const router = useRouter()

  // Example: /settings
  const path = usePathname()

  // Example: en
  const locale = useLocale()

  // Example: en, es
  const supportedLocales: Array<Locale> = ['en', 'es']

  // Stores the language in local storage if it does not exist
  useEffect(() => {
    if (!localStorage.getItem('language'))
      localStorage.setItem('language', locale)
  }, [locale])

  // Allows you to change the language of the application
  const changeLanguage = (newLocale: Locale) => {
    if (supportedLocales.includes(newLocale)) {
      // Replace the current language with the new one in the path
      const newPath = path.replace(`/${locale}`, `/${newLocale}`)
      // Add the new language to the route
      router.push(newPath, { locale: newLocale })
      // Register the new language in local storage
      localStorage.setItem('language', newLocale)
    }
  }

  return {
    locale,
    changeLanguage
  }
}

export default useLanguageSection
