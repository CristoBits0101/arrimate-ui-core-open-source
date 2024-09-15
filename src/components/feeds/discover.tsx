'use client'
import Image from 'next/image'
import Link from 'next/link'
import discoverBlackSVG from '@/assets/icons/sidebar/black/discover.svg'
import discoverWhiteSVG from '@/assets/icons/sidebar/white/discover.svg'
import { useActiveRoute } from '@/hooks/useActiveRoute'
import { useLocale, useTranslations } from 'next-intl'

export default function Discover() {
  const isActive = useActiveRoute('/discover')
  const t = useTranslations('SidebarLayout')
  return (
    <li>
      <Link href={`/${useLocale()}/discover`}>
        {isActive ? (
          <Image src={discoverBlackSVG} alt='Discover' />
        ) : (
          <Image src={discoverWhiteSVG} alt='Discover' />
        )}
        {t('discover')}
      </Link>
    </li>
  )
}
