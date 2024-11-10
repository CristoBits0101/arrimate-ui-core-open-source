'use client'

import Image from 'next/image'
import language from '@/modules/configuration/assets/icons/selectors/language.svg'
import { useRouter, usePathname } from '@/i18n/routing'
import { useTranslations, useLocale } from 'next-intl'
import { ChangeEvent } from 'react'

const LanguageSelector = () => {
  // Para modificar la ruta activa
  const router = useRouter()
  // Devuelve: /page
  const path = usePathname()
  console.log(path)
  // Devuelve: en o es ...
  const locale = useLocale()
  // Traducciones del panel
  const t = useTranslations('SettingsPanel')

  // Idiomas soportados
  const supportedLocales: Array<'en' | 'es'> = ['en', 'es']

  // Maneja el evento de cambio para la selección de idioma
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    // Aseguramos que el valor es de un tipo soportado
    const newLocale = e.target.value as 'en' | 'es'
    if (supportedLocales.includes(newLocale)) {
      // Reemplazamos la ruta actual con la nueva
      const newPath = path.replace(`/${locale}`, `/${newLocale}`)
      // Redirigimos con la nueva ruta
      router.push(newPath, { locale: newLocale })
    }
  }

  return (
    <section className='w-full h-fit flex flex-col gap-2 items-center'>
      <div className='w-full h-fit flex flex-row items-center gap-2'>
        <Image src={language} alt='Languages' className='w-5' />
        <select
          className='appearance-none flex flex-row items-center outline-none bg-transparent cursor-pointer'
          // Detecta cuando el idioma cambia
          onChange={handleChange}
          // Selecciona el idioma actual como valor predeterminado
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
