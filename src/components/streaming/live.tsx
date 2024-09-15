'use client'
import Image from 'next/image'
import Link from 'next/link'
import liveBlackSVG from '@/assets/icons/sidebar/black/live.svg'
import liveWhiteSVG from '@/assets/icons/sidebar/white/live.svg'
import { useActiveRoute } from '@/hooks/useActiveRoute'
import { useLocale, useTranslations } from 'next-intl'

export default function Live() {
  const isActive = useActiveRoute('/live')
  const t = useTranslations('SidebarLayout')
  return (
    <li>
      <Link href={`/${useLocale()}/live`}>
        {isActive ? (
          <Image src={liveBlackSVG} alt='Live' />
        ) : (
          <Image src={liveWhiteSVG} alt='Live' />
        )}
        {t('live')}
      </Link>
    </li>
  )
}
