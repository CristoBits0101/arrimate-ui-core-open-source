'use client'

// Custom hooks
import { useUserSession } from '@/modules/configuration/hooks/useUserSession'

// next/image
import Image from 'next/image'

// next/link
import Link from 'next/link'

// User default image
import defaultUserImage from '@/modules/auth/assets/images/default_user_image.png'

const SettingsLinkClient = () => {
  // Get session and hydrated states
  const { session, hydrated } = useUserSession()

  // Wait for component to be confirmed renderable
  if (!hydrated) return null

  return (
    // List element
    <li className='flex items-center justify-center w-fit h-fit hover:cursor-pointer'>
      {/* Link page */}
      <Link
        className='flex items-center justify-center h-fit w-fit dark:text-[#ecece]'
        href='/settings'
      >
        {/* User image */}
        <Image
          className='w-7 h-7 object-contain aspect-square'
          src={session?.user?.image || defaultUserImage}
          alt='Settings'
        />
      </Link>
    </li>
  )
}

export default SettingsLinkClient
