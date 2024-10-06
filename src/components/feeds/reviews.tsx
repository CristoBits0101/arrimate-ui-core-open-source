'use client'
import Image from 'next/image'
import Link from 'next/link'
import reviewsBlackSVG from '@/assets/icons/sidebar/black/reviews.svg'
import reviewsWhiteSVG from '@/assets/icons/sidebar/white/reviews.svg'
import { useActiveRoute } from '@/hooks/useActiveRoute'
import { useLocale, useTranslations } from 'next-intl'

export default function Reviews() {
  const isActive = useActiveRoute('reviews')
  const t = useTranslations('SidebarLayout')
  return (
    <li>
      <Link href={`/${useLocale()}/reviews`}>
        {isActive ? (
          <Image src={reviewsBlackSVG} alt='Reviews' />
        ) : (
          <Image src={reviewsWhiteSVG} alt='Reviews' />
        )}
        {t('reviews')}
      </Link>
    </li>
  )
}
