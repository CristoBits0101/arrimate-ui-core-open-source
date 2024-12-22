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

  // Local states for the user image
  const [userImage, setUserImage] = useState<string | null>(null)

  // Update states when the session is hydrated
  useEffect(() => {
    if (hydrated) {
      setUserImage(session?.user?.image || defaultUserImage)
    }
  }, [hydrated, session])

  // Wait for component to be confirmed renderable
  if (!hydrated || userImage === null) return null

  return (
    <article className='flex items-center w-full h-fit grid-cols-[auto,1fr]'>
      {/* Imagen */}
      <header className='flex justify-center'>
        <Image
          className='w-28 h-w-28 object-cover aspect-square rounded-full'
          src={userImage}
          alt='Profile picture'
          width={80}
          height={80}
          loading='lazy'
        />
      </header>
      {/* Information */}
      <section className='w-fit h-fit p-4'>
        <p className='text-sm text-gray-700'>Seguidores</p>
        <p className='text-sm text-gray-700'>Seguidos</p>
        <p className='text-sm text-gray-700'>Publicaciones</p>
      </section>
    </article>
  )
}
