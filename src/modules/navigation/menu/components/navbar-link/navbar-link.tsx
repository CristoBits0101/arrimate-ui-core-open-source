'use client'

// Context
import { useSearchContext } from '@/modules/navigation/searcher/hooks/useSearchContext'

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
  const isActive = usePageIcon(route)
  const locale = useLocale()
  const t = useTranslations('SidebarLayout')
  const href = route === 'stories' ? `/${locale}` : `/${locale}/${route}`
  // Context
  const { isFocused } = useSearchContext()

  return (
    <li
      className={
        !isFocused
          ? 'flex items-center justify-center w-full h-full pt-2 pb-2 pr-8 pl-8 hover:bg-[#F4F4F4] dark:hover:bg-[#26272C] hover:cursor-pointer transition-colors duration-300'
          : 'flex items-center w-fit h-full p-2 rounded-full hover:bg-[#F4F4F4] dark:hover:bg-[#26272C] hover:cursor-pointer transition-colors duration-300'
      }
    >
      <Link
        className={
          !isFocused
            ? 'truncate flex items-center h-full w-32 gap-4 dark:text-[#ececed]'
            : 'truncate flex items-center h-full w-fit'
        }
        href={href}
        onClick={() => {
          const audio = new Audio('/sounds/click.mp3')
          audio.play()
        }}
      >
        <Image
          className='w-7 h-7 object-contain aspect-square'
          src={isActive ? blackIcon : whiteIcon}
          alt={route}
        />
        {!isFocused ? textKey && t(textKey) : ''}
      </Link>
    </li>
  )
}
