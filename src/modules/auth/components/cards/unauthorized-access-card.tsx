'use client'

// cards
import CardWrapper from '@/modules/auth/components/cards/card-wrapper'

// next-intl
import { useTranslations } from 'next-intl'

export default function UnauthorizedAccessCard() {
  // Translations
  const t = useTranslations('Forms')

  // Card content
  return (
    <CardWrapper
      pageNameRedirect={t('unauthorizedAccessCard.pageNameRedirect')}
      redirectButtonHref='/sign-in'
      showDividingLine={true}
    >
      <div className='w-full flex items-center justify-center'>
        <h2 className='flex gap-1 text-[#E45545]'>
          <span>🔐</span> 
          {t('unauthorizedAccessCard.title')}
        </h2>
      </div>
    </CardWrapper>
  )
}
