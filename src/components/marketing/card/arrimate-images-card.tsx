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
    <article className='w-full h-fit flex gap-4 text-sm'>
      <header className='rounded-full w-fit h-fit shadow-sm flex-shrink-0 flex items-center'>
        <Image
          src={userImage || unknownImage}
          alt={alt || 'User avatar'}
          width={width}
          height={height}
          className='rounded-full object-cover aspect-square max-h-[100%] w-[3.75rem] h-[3.75rem]'
        />
      </header>
      <aside className='flex-grow h-full flex flex-col items-center justify-between overflow-hidden'>
        {(userName || publicationDate || publicationLocation) && (<p className='font-medium w-full h-fit'>{userName && userName}</p>)}
        {userDescription && <p className='w-full h-fit truncate'>{userDescription}</p>}
        {isMounted && (isTrending || isPopular || isTrusted || isVerify) ? (
          <div className='w-full h-full flex items-center gap-1'>
            {isTrending && (
              <span className='w-fit h-fit flex justify-center items-center'>
                🔥
              </span>
            )}
            {isPopular && (
              <span className='w-fit h-fit flex justify-center items-center'>
                ⭐
              </span>
            )}
            {isTrusted && (
              <span className='w-fit h-fit flex justify-center items-center'>
                💸
              </span>
            )}
            {isVerify && (
              <span className='w-fit h-fit flex justify-center items-center'>
                ✔️
              </span>
            )}
          </div>
        ) : (
          <div className='flex-grow'>⠀</div>
        )}
      </aside>
    </article>
  )
}
