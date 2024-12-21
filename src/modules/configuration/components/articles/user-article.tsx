'use client'

// next/image
import Image from 'next/image'

// Custom hooks
import { useUserSession } from '@/modules/configuration/hooks/sessions/useUserSession'

// React
import { useEffect, useState } from 'react'

// User default image
import defaultUserImage from '@/modules/auth/assets/images/default_user_image.png'

export default function UserArticle() {
  // Get session and hydrated states
  const { session, hydrated } = useUserSession()

  // Local states for the user image, name, and email
  const [userImage, setUserImage] = useState<string | null>(null)
  const [userName, setUserName] = useState<string | null>(null)
  const [userEmail, setUserEmail] = useState<string | null>(null)

  // Update states when the session is hydrated
  useEffect(() => {
    if (hydrated) {
      setUserImage(session?.user?.image || defaultUserImage)
      setUserName(session?.user?.name || 'Guest User')
      setUserEmail(session?.user?.email || 'No email provided')
    }
  }, [hydrated, session])

  // Wait for component to be confirmed renderable
  if (!hydrated || userImage === null) return null

  return (
    <article className='flex items-center w-full h-[8.468rem] grid-cols-[auto,1fr] p-4 min-w-[31.25rem] border-[0.094rem] border-solid bg-[#F4F4F4] dark:bg-[#26272c] border-[#EBEAEB] dark:border-[#3b3b40] text-[#1D0F0F] dark:text-[#D4DBE2]'>
      {/* Imagen */}
      <header className='flex justify-center'>
          <Image
            className='w-20 h-w-20 object-cover aspect-square rounded-full'
            src={userImage}
            alt={`${userName}'s profile picture`}
            width={80}
            height={80}
            loading='lazy'
          />
      </header>
      {/* Information */}
      <section className='w-fit h-fit p-4'>
        <h2 className='text-lg font-bold'>{userName}</h2>
        <p className='text-sm text-gray-700'>+34 610 210 969</p>
        <p className='text-sm text-gray-700'>{userEmail}</p>
      </section>
    </article>
  )
}
