'use client'

import unknownImage from '@/assets/images/profiles/aspect-ratio-1-1/unknownImage.jpg'
import FollowButton from '@/components/marketing/buttons/follow-button'
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
  connection: boolean
}

export default function ArrimateFollowCard({
  src = undefined,
  nickname = '',
  description = '',
  date = '',
  location = '',
  trending = false,
  followers = 0,
  reliable = false,
  verified = false,
  follower = false,
  connection = false
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
  const [isFollowing, setIsFollowing] = useState(follower)
  const [isOnline, setIsOnline] = useState(connection)

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
    setIsFollowing(follower)
    setUserDescription(description)
    setIsOnline(connection)
  }, [
    nickname,
    src,
    date,
    location,
    trending,
    followers,
    reliable,
    verified,
    follower,
    description,
    connection
  ])

  const handleToggleFollowing = (newState: boolean) => {
    setIsFollowing(newState)
  }

  return (
    <article className='border-solid border-[0.05rem] border-[#bfbdc050] rounded-xl w-full h-fit flex flex-col gap-1 px-2 py-4 text-sm justify-center items-center'>
      <span className='shadow-sm relative inline-flex overflow-hidden rounded-full p-1'>
        {isOnline ? (
          <span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#68EF00_0%,#5EBAA6_50%,#68EF00_100%)]'></span>
        ) : (
          <span className='absolute inset-[-1000%] bg-[#453C41]'></span>
        )}
        <header
          className='relative w-20 h-w-20 flex items-center justify-center bg-cover bg-center bg-no-repeat aspect-square rounded-full z-10'
          style={{ backgroundImage: `url(${userImage || unknownImage})` }}
        ></header>
      </span>
      {userName && (
        <section className='w-full h-fit flex flex-col justify-center items-center mb-1'>
          <p className='truncate w-full h-fit text-center font-medium'>
            {userName}
          </p>
          {userDescription && (
            <p className='truncate w-full h-fit text-center text-[#453C41] text-xs mb-1'>
              {userDescription}
            </p>
          )}
          {isMounted && (isTrending || isPopular || isTrusted || isVerify) ? (
            <p className='truncate w-full h-fit flex justify-center items-start gap-1'>
              {isTrending && <span>🔥</span>}
              {isPopular && <span>⭐</span>}
              {isTrusted && <span>💸</span>}
              {isVerify && <span>✔️</span>}
            </p>
          ) : (
            isMounted && (
              <p>
                <span>{'ㅤ'}</span>
              </p>
            )
          )}
        </section>
      )}
      <footer className='w-full h-fit flex flex-col justify-center items-center'>
        <FollowButton
          isFollowing={isFollowing}
          onToggleFollow={handleToggleFollowing}
          text={isFollowing ? 'Following' : 'Follow'}
          bgColor={isFollowing ? '#1D0F0F' : '#453C41'}
          hoverBgColor={'#1D0F0F'}
          textColor='#FFFFFF'
          isRound={true}
        />
        {(!publicationDate || !publicationLocation) && (
          <section className='w-full h-fit flex gap-1 justify-center items-center'>
            <p className='truncate flex-grow h-fit min-w-0'>
              <span className='h-full text-center text-xs'>
                {publicationLocation && ` • ${publicationLocation}`}
              </span>
            </p>
          </section>
        )}
      </footer>
    </article>
  )
}
