'use client'

// Image
import Image from 'next/image'

// Icon
import { usePageIcon } from '@/modules/navigation/menu/hooks/useIcon'

// Intl
import { useLocale, useTranslations } from 'next-intl'

// Link
import Link from 'next/link'

interface NavigationItemProps {
  route: string
  blackIcon: string
  whiteIcon: string
  textKey?: string
}

export default function NavbarItem({
  route,
  blackIcon,
  whiteIcon,
  textKey
}: NavigationItemProps) {
  const audio = new Audio('/sounds/click.mp3')
  const isActive = usePageIcon(route)
  const locale = useLocale()
  const t = useTranslations('SidebarLayout')
  const href = route === 'stories' ? `/${locale}` : `/${locale}/${route}`
  return (
    <li className='flex items-center justify-center w-full h-full pt-2 pb-2 pr-8 pl-8 hover:bg-[#F4F4F4] dark:hover:bg-[#26272C] hover:cursor-pointer transition-colors duration-300'>
      <Link
        className='truncate flex items-center h-full w-32 gap-4 dark:text-[#ececed]'
        href={href}
        onClick={() => {
          audio.play()
        }}
      >
        <Image
          className='w-7 h-7 object-contain aspect-square'
          src={isActive ? blackIcon : whiteIcon}
          alt={route}
        />
        {textKey && t(textKey)}
      </Link>
    </li>
  )
}
