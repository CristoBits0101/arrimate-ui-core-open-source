'use client'

import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { useEffect, useState } from 'react'
import { useUserSession } from '@/modules/configuration/hooks/sessions/useUserSession'

const defaultUserImage = '/path/to/default/image.jpg'

const UserArticle = () => {
  const { session, hydrated } = useUserSession()
  const [userImage, setUserImage] = useState<string | null>(null)
  const [followers, setFollowers] = useState<number>(0)
  const [following, setFollowing] = useState<number>(0)
  const [posts, setPosts] = useState<number>(0)
  const t = useTranslations('User')

  useEffect(() => {
    if (hydrated) {
      setUserImage(session?.user?.image || defaultUserImage)
      setFollowers(session?.user?.followers || 0)
      setFollowing(session?.user?.following || 0)
      setPosts(session?.user?.posts || 0)
    }
  }, [hydrated, session])

  // Wait for component to be confirmed renderable
  if (!hydrated || userImage === null) return null

  return (
    <article className='flex items-center w-full h-fit grid-cols-[auto,1fr]'>
      {/* Image */}
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
      <section className='w-fit h-fit p-4 flex flex-col gap-1'>
        <p>
          <span className='font-semibold'>{followers}</span> {t('followers')}
        </p>
        <p>
          <span className='font-semibold'>{following}</span> {t('following')}
        </p>
        <p>
          <span className='font-semibold'>{posts}</span> {t('posts')}
        </p>
      </section>
    </article>
  )
}

export default UserArticle
