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
  follower = false,
  width = 80,
  height = 80
}: ArrimateFollowCardProps) {
  const [isMounted, setIsMounted] = useState(false)
  const [userImage, setUserImage] = useState<string | undefined>(src)
  const [userName, setUserName] = useState(nickname)
  const [userDescription, setUserDescription] = useState(description)
  const [publicationDate, setPublicationDate] = useState<string | undefined>(date)
  const [publicationLocation, setPublicationLocation] = useState<string | undefined>(location)
  const [isTrending, setIsTrending] = useState(trending)
  const [isPopular, setIsPopular] = useState(followers > 1000000)
  const [isTrusted, setIsTrusted] = useState(reliable)
  const [isVerify, setIsVerify] = useState(verified)
  const [isFollowing, setIsFollowing] = useState(follower)

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
    description
  ])

  const handleToggleFollowing = () => {
    setIsFollowing(!isFollowing)
  }

  return (
    <article className='border-solid border-[0.05rem] border-[#bfbdc050] rounded-xl w-full h-fit flex flex-col gap-1 px-2 py-4 text-sm justify-center items-center'>
      <header className='w-14 h-14 shadow-sm flex items-center justify-center'>
        <Image
          src={userImage || unknownImage}
          alt={alt || 'User avatar'}
          width={width}
          height={height}
          className='drop-shadow-sm border-solid border-4 border-[#453C41] object-cover aspect-square w-full h-full'
        />
      </header>
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
      <footer className='w-full h-fit flex justify-center items-center'>
        <button
          className='outline-none w-full h-fit flex justify-center items-center'
          onClick={handleToggleFollowing}
        >
          <span className='w-full py-1.5 mx-1.5 rounded-full flex justify-center items-center bg-[#453C41] hover:bg-[#1D0F0F] text-[#FFFFFF] text-xs transition-colors duration-300'>
            {isFollowing ? 'Following' : 'Follow'}
          </span>
        </button>
      </footer>
    </article>
  )
}
