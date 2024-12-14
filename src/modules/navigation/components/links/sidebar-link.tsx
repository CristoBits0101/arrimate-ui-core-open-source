'use client'

// Custom hook
import { usePageIcon } from '@/modules/navigation/hooks/useIcon'

// next/image
import Image from 'next/image'

// next-intl
import { useLocale, useTranslations } from 'next-intl'

// next/link
import Link from 'next/link'

// Props interface
interface NavigationItemProps {
  route: string
  blackIcon: string
  whiteIcon: string
  textKey?: string
}

// Function for creating navigation
export default function SidebarItem({
  route,
  blackIcon,
  whiteIcon,
  textKey
}: NavigationItemProps) {
  // Send the route to the hook
  const isActive = usePageIcon(route)

  // Get locale language
  const locale = useLocale()

  // Get translations
  const t = useTranslations('SidebarLayout')

  // Create href path
  const href = route === 'stories' ? `/${locale}` : `/${locale}/${route}`

  // Return the link
  return (
    // List element
    <li className='flex items-center justify-center w-fit h-fit hover:cursor-pointer'>
      {/* Link */}
      <Link
        className='flex items-center justify-center h-fit w-fit dark:text-[#ecece]'
        href={href}
      >
        {/* Image */}
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
