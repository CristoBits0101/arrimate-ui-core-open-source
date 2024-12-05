'use client'

// cards
import CardWrapper from '@/modules/auth/components/cards/card-wrapper'

// next-intl
import { useTranslations } from 'next-intl'

// radix-ui
import { ExclamationTriangleIcon } from '@radix-ui/react-icons'

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
      <div className='w-full flex flex-col items-center justify-center gap-2'>
        <h2>{t('unauthorizedAccessCard.title')}</h2>
        <ExclamationTriangleIcon className='text-destructive' />
      </div>
    </CardWrapper>
  )
}
