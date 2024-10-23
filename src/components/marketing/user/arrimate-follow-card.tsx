import Image from 'next/image'
import unknownImage from '@/assets/images/profiles/aspect-ratio-1-1/unknownImage.jpg'
import { useState, useEffect } from 'react'

interface ArrimateFollowCardProps {
  avatar?: string | undefined
  nickname: string
  description?: string | undefined | null
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
  nickname = '',
  description = '',
  date = '',
  location = '',
  trending = false,
  followers = 0,
  reliable = false,
  verified = false,
  follower = false
}: ArrimateFollowCardProps) {
  const [isMounted, setIsMounted] = useState(false)
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
    setIsMounted(true)
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
    description
  ])

  const handleToggleFollowing = () => {
    setIsFollowing(!isFollowing)
  }

  return (
    <article className='border-solid border-[0.05rem] border-[#bfbdc050] rounded-xl w-full h-fit flex flex-col gap-1 px-2 py-4 text-sm justify-center items-center'>
      <header className='rounded-full border-solid border-[0.125rem] border-[#bfbdc050] w-14 h-14 shadow-sm flex items-center justify-center'>
        <Image
          src={userImage || unknownImage}
          alt='Avatar'
          width={80}
          height={80}
          className='rounded-full object-cover aspect-square w-full h-full'
        />
      </header>
      {userName && (
        <section className='w-full h-fit flex flex-col justify-center items-center my-1'>
          <p className='truncate font-medium text-center w-full'>{userName}</p>
          {isMounted && (isTrending || isPopular || isTrusted || isVerify) ? (
            <div className='w-full h-fit flex justify-center items-center'>
              {isTrending && <span>🔥</span>}
              {isPopular && <span>⭐</span>}
              {isTrusted && <span>💸</span>}
              {isVerify && <span>✔️</span>}
            </div>
          ) : isMounted && (
            <div>
              <span>{'ㅤ'}</span>
            </div>
          )}
        </section>
      )}
      <footer className='w-full h-fit flex justify-center items-center'>
        <button
          className='outline-none w-full h-fit flex justify-center items-center'
          onClick={handleToggleFollowing}
        >
          <span className='w-full py-1.5 mx-1.5 rounded-full font-medium flex justify-center items-center bg-[#453C41] hover:bg-[#1D0F0F] text-[#FFFFFF] text-xs'>
            {isFollowing ? 'Following' : 'Follow'}
          </span>
        </button>
      </footer>
    </article>
  )
}
