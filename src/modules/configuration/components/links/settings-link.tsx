'use client'

// Custom hooks
import { useUserSession } from '@/modules/configuration/hooks/useUserSession'

// next/image
import Image from 'next/image'

// next/link
import Link from 'next/link'

// React
import { useEffect, useState } from 'react'

// User default image
import defaultUserImage from '@/modules/auth/assets/images/default_user_image.png'

const SettingsLinkClient = () => {
  // Get session and hydrated states
  const { session, hydrated } = useUserSession()

  // Local state for the user image
  const [userImage, setUserImage] = useState<string | null>(null)

  // Update the user image when the session is hydrated
  useEffect(() => {
    if (hydrated) setUserImage(session?.user?.image || defaultUserImage)
  }, [hydrated, session])

  // Wait for component to be confirmed renderable
  if (!hydrated || userImage === null) return null

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
          className='w-9 h-9 object-contain aspect-square rounded-full'
          src={userImage}
          alt='Settings'
          width={40}
          height={40}
          loading='lazy'
        />
      </Link>
    </li>
  )
}

export default SettingsLinkClient
