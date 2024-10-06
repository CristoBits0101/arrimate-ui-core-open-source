'use client'
import Image from 'next/image'
import Link from 'next/link'
import channelsBlackSVG from '@/assets/icons/sidebar/black/channels.svg'
import channelsWhiteSVG from '@/assets/icons/sidebar/white/channels.svg'
import { useActiveRoute } from '@/hooks/useActiveRoute'
import { useLocale, useTranslations } from 'next-intl'

export default function Channels() {
  const isActive = useActiveRoute('channels')
  const t = useTranslations('SidebarLayout')
  return (
    <li>
      <Link href={`/${useLocale()}/channels`}>
        {isActive ? (
          <Image src={channelsBlackSVG} alt='Channels' />
        ) : (
          <Image src={channelsWhiteSVG} alt='Channels' />
        )}
        {t('channels')}
      </Link>
    </li>
  )
}
