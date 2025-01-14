'use client'

// Components
import CardWrapper from '@/modules/auth/form-pieces/cards/card-wrapper'

// Intl
import { useTranslations } from 'next-intl'

export default function UnauthorizedAccessCard() {
  // Translations
  const t = useTranslations('Forms')
  return (
    <CardWrapper
      pageNameRedirect={t('unauthorizedAccessCard.pageNameRedirect')}
      redirectButtonHref='/sign-in'
      showDividingLine={true}
    >
      {/* Content inside the card */}
      <div className='w-full flex items-center justify-center'>
        <h2 className='flex gap-1 text-[#E45545]'>
          {/* Lock emoji */}
          <span>🔐</span>
          {/* Translated title */}
          {t('unauthorizedAccessCard.title')}
        </h2>
      </div>
    </CardWrapper>
  )
}
