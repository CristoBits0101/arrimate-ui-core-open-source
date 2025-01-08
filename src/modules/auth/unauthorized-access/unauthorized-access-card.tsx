'use client'

// Imports the CardWrapper component
import CardWrapper from '@/modules/auth/form-pieces/cards/card-wrapper'

// Imports the useTranslations hook for localization
import { useTranslations } from 'next-intl'

// Defines the UnauthorizedAccessCard component
export default function UnauthorizedAccessCard() {
  // Fetches translations from the "Forms" namespace
  const t = useTranslations('Forms')
  // Renders the UnauthorizedAccessCard with translations and styles
  return (
    <CardWrapper
      // Sets the page name for redirection using translations
      pageNameRedirect={t('unauthorizedAccessCard.pageNameRedirect')}
      // Redirects to the sign-in page
      redirectButtonHref='/sign-in'
      // Shows the dividing line
      showDividingLine={true}
    >
      {/* Content inside the card */}
      <div className='w-full flex items-center justify-center'>
        <h2 className='flex gap-1 text-[#E45545]'>
          <span>🔐</span> {/* Lock emoji */}
          {t('unauthorizedAccessCard.title')} {/* Translated title */}
        </h2>
      </div>
    </CardWrapper>
  )
}
