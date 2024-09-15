'use client'
import Image from 'next/image'
import Link from 'next/link'
import trendingBlackSVG from '@/assets/icons/sidebar/black/trending.svg'
import trendingWhiteSVG from '@/assets/icons/sidebar/white/trending.svg'
import { useActiveRoute } from '@/hooks/useActiveRoute'
import { useLocale, useTranslations } from 'next-intl'

export default function Trending() {
  const isActive = useActiveRoute('/trending')
  const t = useTranslations('SidebarLayout')
  return (
    <li>
      <Link href={`/${useLocale()}/trending`}>
        {isActive ? (
          <Image src={trendingBlackSVG} alt='Trending' />
        ) : (
          <Image src={trendingWhiteSVG} alt='Trending' />
        )}
        {t('trending')}
      </Link>
    </li>
  )
}
