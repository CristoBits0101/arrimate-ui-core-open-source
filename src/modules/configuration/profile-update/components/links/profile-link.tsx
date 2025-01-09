'use client'

// Custom
import { useUserSession } from '@/modules/auth/session-data/hooks/useUserSession'

// Hooks
import { useEffect, useState } from 'react'

// Image
import defaultUserImage from '@/modules/auth/assets/images/default_user_image.png'
import Image from 'next/image'

// Link
import Link from 'next/link'

const ProfileLinkClient = () => {
  // Get session and hydrated states
  const { session, hydrated } = useUserSession()

  // Local state for the user image
  const [userImage, setUserImage] = useState<string | null>(null)

  // Update user image on session hydration
  useEffect(() => {
    if (hydrated) setUserImage(session?.user?.image || defaultUserImage)
  }, [hydrated, session])

  // Wait for component to be confirmed renderable
  if (!hydrated || userImage === null) return null

  return (
    <li className='flex items-center justify-center w-fit h-fit hover:cursor-pointer'>
      {/* Link page */}
      <Link
        className='flex items-center justify-center h-fit w-fit dark:text-[#ecece]'
        href='/settings'
      >
        {/* User image */}
        <Image
          className='w-7 h-7 object-contain aspect-square rounded-full'
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

export default ProfileLinkClient
