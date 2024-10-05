'use client'
import Image from 'next/image'
import Link from 'next/link'
import exploreBlackSVG from '@/assets/icons/sidebar/black/explore.svg'
import exploreWhiteSVG from '@/assets/icons/sidebar/white/explore.svg'
import { useActiveRoute } from '@/hooks/useActiveRoute'
import { useLocale, useTranslations } from 'next-intl'

export default function Explore() {
  const isActive = useActiveRoute('/explore')
  const t = useTranslations('SidebarLayout')
  return (
    <li>
      <Link href={`/${useLocale()}/explore`}>
        {isActive ? (
          <Image src={exploreBlackSVG} alt='Explore' />
        ) : (
          <Image src={exploreWhiteSVG} alt='Explore' />
        )}
        {t('explore')}
      </Link>
    </li>
  )
}
