'use client'

import unknownImage from '@/assets/images/profiles/aspect-ratio-16-9/unknown.jpg'
import Image from 'next/image'
import { useState, useEffect } from 'react'

interface ArrimateFollowCardProps {
  avatar?: string | undefined
  nickname: string
  description?: string
  date?: string
  location?: string
  trending?: boolean
  followers: number
  reliable?: boolean
  verified?: boolean
  follower?: boolean
}

export default function ArrimateFollowCard({
  avatar = undefined,
  nickname = 'Unknown',
  description = '',
  date = '',
  location = '',
  trending = false,
  followers = 0,
  reliable = false,
  verified = false,
  follower = false,
}: ArrimateFollowCardProps) {
  const [userImage, setUserImage] = useState<string | undefined>(avatar)
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

  useEffect(() => {
    setUserName(nickname || 'Unknown')
    setUserImage(avatar)
    setPublicationDate(date)
    setPublicationLocation(location)
    setIsTrending(trending)
    setIsPopular(followers >= 1000000)
    setIsTrusted(reliable)
    setIsVerify(verified)
    setIsFollowing(follower)
    setUserDescription(description)
  }, [
    nickname,
    avatar,
    date,
    location,
    trending,
    followers,
    reliable,
    verified,
    follower,
    description,
  ])

  const handleToggleFollowing = () => {
    setIsFollowing(!isFollowing)
  }

  return (
    <article className='w-full h-16 flex gap-3 text-sm'>
      {/* Image */}
      <header className='rounded-full w-16 h-full shadow-sm flex-shrink-0 flex items-center'>
        <Image
          src={userImage ?? unknownImage}
          alt='Avatar'
          width={80}
          height={80}
          className='rounded-full object-cover aspect-square max-h-[100%] w-16 h-full'
        />
      </header>
      {/* Content */}
      <div className='flex-grow h-full flex flex-col justify-between overflow-hidden'>
        {(userName || publicationDate || publicationLocation) && (
          <section className='w-full flex gap-1 items-center'>
            <p className='truncate flex-grow h-fit min-w-0'>
              <span className='h-full font-medium'>{userName && userName}</span>
              <span className='h-full font-light'>
                {publicationDate && publicationDate}
              </span>
              <span className='h-full font-light'>
                {publicationLocation && publicationLocation}
              </span>
            </p>
          </section>
        )}
        {userDescription && (
          <section className='w-full flex gap-1 items-center'>
            <p className='truncate flex-grow h-fit min-w-0'>
              {userDescription}
            </p>
          </section>
        )}
        <section
          className={`w-full flex ${
            isTrending || isPopular || isTrusted || isVerify
              ? 'justify-between'
              : 'justify-end'
          } items-center`}
        >
          {(isTrending || isPopular || isTrusted || isVerify) && (
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
          )}
          <footer className='h-full w-fit flex justify-between items-center gap-2'>
            <button
              className='w-fit h-full flex justify-center items-center'
              onClick={handleToggleFollowing}
            >
              <span className='rounded-full h-5 font-medium flex justify-center items-center px-2.5 text-xs bg-[#F4F4F4] hover:bg-[#bfbdc050]'>
                {isFollowing ? 'Siguiendo' : 'Follow'}
              </span>
            </button>
          </footer>
        </section>
      </div>
    </article>
  )
}
