'use client'
import Image from 'next/image'
import Link from 'next/link'
import threadsBlackSVG from '@/assets/icons/sidebar/black/threads.svg'
import threadsWhiteSVG from '@/assets/icons/sidebar/white/threads.svg'
import { useActiveRoute } from '@/hooks/useActiveRoute'
import { useLocale, useTranslations } from 'next-intl'

export default function Threads() {
  const isActive = useActiveRoute('/threads')
  const t = useTranslations('SidebarLayout')
  return (
    <li>
      <Link href={`/${useLocale()}/threads`}>
        {isActive ? (
          <Image src={threadsBlackSVG} alt='Threads' />
        ) : (
          <Image src={threadsWhiteSVG} alt='Threads' />
        )}
        {t('threads')}
      </Link>
    </li>
  )
}
