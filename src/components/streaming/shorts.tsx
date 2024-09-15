'use client'
import Image from 'next/image'
import Link from 'next/link'
import shortsBlackSVG from '@/assets/icons/sidebar/black/shorts.svg'
import shortsWhiteSVG from '@/assets/icons/sidebar/white/shorts.svg'
import { useActiveRoute } from '@/hooks/useActiveRoute'
import { useLocale, useTranslations } from 'next-intl'

export default function Shorts() {
  const isActive = useActiveRoute('/shorts')
  const t = useTranslations('SidebarLayout')
  return (
    <li>
      <Link href={`/${useLocale()}/shorts`}>
        {isActive ? (
          <Image src={shortsBlackSVG} alt='Shorts' />
        ) : (
          <Image src={shortsWhiteSVG} alt='Shorts' />
        )}
        {t('shorts')}
      </Link>
    </li>
  )
}
