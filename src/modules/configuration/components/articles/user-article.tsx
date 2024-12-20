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
    <article className='flex items-center w-full h-fit bg-red-200 grid-cols-[auto,1fr] py-4 px-16'>
      {/* Imagen */}
      <header className='bg-[#1D0F0F] flex justify-center p-1 rounded-full'>
        <div className='w-full h-fit p-1 bg-white rounded-full'>
          <Image
            className='w-40 h-w-40 object-cover aspect-square rounded-full'
            src={userImage}
            alt={`${userName}'s profile picture`}
            width={96}
            height={96}
            loading='lazy'
          />
        </div>
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
