'use client'
import Image from 'next/image'
import Link from 'next/link'
import merchBlackSVG from '@/assets/icons/sidebar/black/merch.svg'
import merchWhiteSVG from '@/assets/icons/sidebar/white/merch.svg'
import { useActiveRoute } from '@/hooks/useActiveRoute'
import { useLocale, useTranslations } from 'next-intl'

export default function Merch() {
  const isActive = useActiveRoute('merch')
  const t = useTranslations('SidebarLayout')
  return (
    <li>
      <Link href={`/${useLocale()}/merch`}> 
        {isActive ? (
          <Image src={merchBlackSVG} alt='Merch' />
        ) : (
          <Image src={merchWhiteSVG} alt='Merch' />
        )}
        {t('merch')}
      </Link>
    </li>
  )
}
