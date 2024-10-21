import unknownImage from '@/assets/images/profiles/aspect-ratio-16-9/unknown.jpg'
import Image from 'next/image'
import { useState, useEffect } from 'react'

interface ArrimateFollowCardProps {
  nickname: string
  avatar?: string
  date?: string
  location?: string
  trending?: boolean
  followers: number
  reliable?: boolean
  verified?: boolean
  follower?: boolean
  description?: string
}

export default function ArrimateFollowCard({
  nickname = 'Unknown',
  avatar = '',
  date = '',
  location = '',
  trending = false,
  followers = 0,
  reliable = false,
  verified = false,
  follower = false,
  description = ''
}: ArrimateFollowCardProps) {
  const [userName, setUserName] = useState(nickname)
  const [userImage, setUserImage] = useState<string>(avatar)
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
  const [userDescription, setUserDescription] = useState(description)

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
    description
  ])

  const handleToggleFollowing = () => {
    setIsFollowing(!isFollowing)
  }

  return (
    <article className='w-full h-[3.75rem] flex gap-2 text-sm'>
      {/* Image */}
      <header className='w-fit h-full'>
        {userImage ? (
          <Image
            src={userImage}
            alt={`${userName} image`}
            className='w-20 h-full drop-shadow object-cover aspect-auto'
          />
        ) : (
          <Image
            src={unknownImage}
            alt='Unknown image'
            className='w-20 h-full drop-shadow object-cover aspect-auto'
          />
        )}
      </header>
      {/* Content */}
      <div className='bg-yellow-100 w-full h-full flex flex-col justify-center'>
        {(userName || publicationDate || publicationLocation) && (
          <section className='w-full flex gap-1 items-center'>
            {userName && <section>{userName}</section>}
            {publicationDate && <div>📅 {publicationDate}</div>}
            {publicationLocation && <div>📍 {publicationLocation}</div>}
          </section>
        )}
        {userDescription && (<section>{userDescription}</section>)}
        {(isTrending || isPopular || isTrusted || isVerify) && (
          <section className='w-full flex gap-1 items-center'>
            {isTrending && <span>🔥</span>}
            {isPopular && <span>⭐</span>}
            {isTrusted && <span>💵</span>}
            {isVerify && <span>✔️</span>}
          </section>
        )}
      </div>
      {/* Buttons */}
      <footer className='bg-green-100 flex flex-col justify-center items-center'>
        <button className='' onClick={handleToggleFollowing}>
          {isFollowing ? 'Siguiendo' : 'Seguir'}
        </button>
      </footer>
    </article>
  )
}
