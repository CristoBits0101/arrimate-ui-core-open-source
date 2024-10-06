'use client'
import Image from 'next/image'
import Link from 'next/link'
import homeBlackSVG from '@/assets/icons/sidebar/black/home.svg'
import homeWhiteSVG from '@/assets/icons/sidebar/white/home.svg'
import { useActiveRoute } from '@/hooks/useActiveRoute'
import { useLocale, useTranslations } from 'next-intl'

export default function Home() {
  const isActive = useActiveRoute('home')
  const t = useTranslations('SidebarLayout')
  return (
    <li>
      <Link href={`/${useLocale()}`}>
        {isActive ? (
          <Image src={homeBlackSVG} alt='Home' />
        ) : (
          <Image src={homeWhiteSVG} alt='Home' />
        )}
        {t('home')}
      </Link>
    </li>
  )
}
