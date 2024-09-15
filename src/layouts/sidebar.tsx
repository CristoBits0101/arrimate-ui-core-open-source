'use client'

import discoverBlackSVG from '@/assets/icons/sidebar/black/discover.svg'
import discoverWhiteSVG from '@/assets/icons/sidebar/white/discover.svg'
import Image from 'next/image'
import Link from 'next/link'
import liveBlackSVG from '@/assets/icons/sidebar/black/live.svg'
import liveWhiteSVG from '@/assets/icons/sidebar/white/live.svg'
import shortsBlackSVG from '@/assets/icons/sidebar/black/shorts.svg'
import shortsWhiteSVG from '@/assets/icons/sidebar/white/shorts.svg'
import trendingBlackSVG from '@/assets/icons/sidebar/black/trending.svg'
import trendingWhiteSVG from '@/assets/icons/sidebar/white/trending.svg'
import styles from '@/styles/layouts/sidebar.module.css'
import { usePathname } from 'next/navigation'
import { useTranslations, useLocale } from 'next-intl'

export default function Sidebar() {
  // 
  const path = usePathname()
  // 
  const t = useTranslations('SidebarLayout')
  // 
  const locale = useLocale()
  const isActive = (route: string) => {
    return path === `/${locale}${route}`
  }
  return (
    <aside className={styles.sidebar}>
      <nav>
        <ul>
          <li>
            <Link href={`/${locale}/trending`}>
              {isActive('/trending') ? (
                <Image src={trendingBlackSVG} alt='Trending' />
              ) : (
                <Image src={trendingWhiteSVG} alt='Trending' />
              )}
              {t('trending')}
            </Link>
          </li>
          <li>
            <Link href={`/${locale}/discover`}>
              {isActive('/discover') ? (
                <Image src={discoverBlackSVG} alt='Discover' />
              ) : (
                <Image src={discoverWhiteSVG} alt='Discover' />
              )}
              {t('discover')}
            </Link>
          </li>
          <li>
            <Link href={`/${locale}/shorts`}>
              {isActive('/shorts') ? (
                <Image src={shortsBlackSVG} alt='Shorts' />
              ) : (
                <Image src={shortsWhiteSVG} alt='Shorts' />
              )}
              {t('shorts')}
            </Link>
          </li>
          <li>
            <Link href={`/${locale}/live`}>
              {isActive('/live') ? (
                <Image src={liveBlackSVG} alt='LIVE' />
              ) : (
                <Image src={liveWhiteSVG} alt='LIVE' />
              )}
              {t('live')}
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  )
}
