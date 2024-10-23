import { useState, useEffect } from 'react'
import Image from 'next/image'
import unknownImage from '@/assets/images/profiles/aspect-ratio-1-1/unknownImage.jpg'

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
    <article className='w-1/2 h-fit flex flex-col gap-2 p-4 text-sm justify-center items-center bg-red-100'>
      <header className='rounded-full w-14 h-14 shadow-sm flex items-center justify-center bg-blue-100'>
        <Image
          src={userImage ? userImage : unknownImage}
          alt='Avatar'
          width={80}
          height={80}
          className='rounded-full object-cover aspect-square max-h-[100%] w-full h-full'
        />
      </header>
      {userName && (
        <section className='w-full h-fit flex justify-center items-center'>
          <p className='truncate font-medium'>{userName && userName}</p>
        </section>
      )}
      {isMounted && (isTrending || isPopular || isTrusted || isVerify) ? (
        <div className='w-fit h-full flex justify-center items-center gap-1 text-base mt-0.5'>
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
        <></>
      )}
      <footer className='h-fit w-fit flex justify-between items-center'>
        <button
          className='w-fit h-full flex justify-center items-center'
          onClick={handleToggleFollowing}
        >
          <span className='rounded-full h-5 font-medium flex justify-center items-center px-2.5 bg-[#F4F4F4] hover:bg-[#bfbdc050]'>
            {isFollowing ? 'Following' : 'Follow'}
          </span>
        </button>
      </footer>
    </article>
  )
}
