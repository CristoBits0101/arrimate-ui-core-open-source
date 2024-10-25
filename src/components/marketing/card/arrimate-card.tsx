'use client'

import Image from 'next/image'
import unknownImage from '@/assets/images/profiles/aspect-ratio-1-1/unknownImage.jpg'
import { useState, useEffect } from 'react'

interface ArrimateFollowCardProps {
  src?: string | undefined
  alt?: string | undefined
  nickname: string
  description?: string | undefined | null
  date?: string
  location?: string
  trending?: boolean
  followers: number
  reliable?: boolean
  verified?: boolean
  follower?: boolean
  width?: number
  height?: number
}

export default function ArrimateFollowCard({
  src = undefined,
  alt = 'User avatar',
  nickname = '',
  description = '',
  date = '',
  location = '',
  trending = false,
  followers = 0,
  reliable = false,
  verified = false,
  width = 80,
  height = 80
}: ArrimateFollowCardProps) {
  const [isMounted, setIsMounted] = useState(false)
  const [userImage, setUserImage] = useState<string | undefined>(src)
  const [userName, setUserName] = useState(nickname)
  const [userDescription, setUserDescription] = useState(description)
  const [publicationDate, setPublicationDate] = useState<string | undefined>(
    date
  )
  const [publicationLocation, setPublicationLocation] = useState<
    string | undefined
  >(location)
  const [isTrending, setIsTrending] = useState(trending)
  const [isPopular, setIsPopular] = useState(followers > 1000000)
  const [isTrusted, setIsTrusted] = useState(reliable)
  const [isVerify, setIsVerify] = useState(verified)

  useEffect(() => {
    setIsMounted(true)
    setUserName(nickname || 'Unknown')
    setUserImage(src)
    setPublicationDate(date)
    setPublicationLocation(location)
    setIsTrending(trending)
    setIsPopular(followers >= 1000000)
    setIsTrusted(reliable)
    setIsVerify(verified)
    setUserDescription(description)
  }, [
    nickname,
    src,
    date,
    location,
    trending,
    followers,
    reliable,
    verified,
    description
  ])

  return (
    <section className='w-full h-16 flex gap-3 text-sm'>
      {/* Image */}
      <header className='rounded-full w-16 h-full shadow-sm flex-shrink-0 flex items-center'>
        <Image
          src={userImage || unknownImage}
          alt={alt || 'User avatar'}
          width={width}
          height={height}
          className='rounded-full object-cover aspect-square max-h-[100%] w-16 h-full'
        />
      </header>
      {/* Content */}
      <aside className='flex-grow h-full flex flex-col justify-between overflow-hidden'>
        {(userName || publicationDate || publicationLocation) && (
          <div className='w-full h-fit flex gap-1 items-center'>
            <p className='truncate flex-grow h-fit min-w-0'>
              <span className='h-full font-medium'>{userName && userName}</span>
              <span className='h-full'>
                {publicationDate && ` • ${publicationDate}`}
              </span>
              <span className='h-full'>
                {publicationLocation && ` • ${publicationLocation}`}
              </span>
            </p>
          </div>
        )}
        {userDescription && (
          <div className='w-full h-fit flex gap-1 items-center'>
            <p className='truncate flex-grow h-fit min-w-0'>
              {userDescription}
            </p>
          </div>
        )}
        <div
          className={`w-full flex ${
            isTrending || isPopular || isTrusted || isVerify
              ? 'justify-between'
              : 'justify-end'
          } items-center`}
        >
          {isMounted && (isTrending || isPopular || isTrusted || isVerify) ? (
            <div className='w-fit h-full flex justify-center items-center gap-1 text-base'>
              {isTrending && (
                <span className='w-fit h-full flex justify-center items-center'>
                  🔥
                </span>
              )}
              {isPopular && (
                <span className='w-fit h-full flex justify-center items-center'>
                  ⭐
                </span>
              )}
              {isTrusted && (
                <span className='w-fit h-full flex justify-center items-center'>
                  💸
                </span>
              )}
              {isVerify && (
                <span className='w-fit h-full flex justify-center items-center'>
                  ✔️
                </span>
              )}
            </div>
          ) : (
            <div className='flex-grow'>⠀</div>
          )}
        </div>
      </aside>
    </section>
  )
}
