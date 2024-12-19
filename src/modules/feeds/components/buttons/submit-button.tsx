'use client'

// next-intl
import { useTranslations } from 'next-intl'

export default function SubmitButton() {
  // Translations
  const t = useTranslations('Forms')
  // Render the submit button with translated text
  return <button type='submit'>{t('submit')}</button>
}
