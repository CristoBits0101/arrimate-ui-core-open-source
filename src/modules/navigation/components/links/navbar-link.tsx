'use client'
import Image from 'next/image'
import Link from 'next/link'
import { usePageIcon } from '@/modules/navigation/hooks/useIcon'
import { useLocale, useTranslations } from 'next-intl'

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
  const href = route === 'home' ? `/${locale}` : `/${locale}/${route}`
  return (
    <li className='flex items-center justify-center rounded-[2.5rem] w-full h-full pt-2 pb-2 pr-8 pl-8 hover:bg-[#F4F4F4] hover:cursor-pointer transition-colors duration-300'>
      <Link
        className='truncate flex items-center h-full w-full gap-4 dark:text-[#ececed]'
        href={href}
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
