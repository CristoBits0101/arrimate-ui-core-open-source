'use client'

// next-intl
import { useTranslations } from 'next-intl'

// react-spinners
import { PulseLoader } from 'react-spinners'

interface SubmitButtonProps {
  isPending: boolean
}

export default function SubmitButton({isPending}: SubmitButtonProps) {
  // Translations
  const t = useTranslations('Button')
  // Render the submit button with translated text
  return (
    <button type='submit'>
      {isPending ? <PulseLoader /> : t('post')}
    </button>
  )
}
