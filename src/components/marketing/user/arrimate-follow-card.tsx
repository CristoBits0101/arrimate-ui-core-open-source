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
}

export default function ArrimateFollowCard({
  nickname = 'Unknown',
  avatar = '/images/profiles/aspect-ratio-1-1/image9.jpg',
  date = '',
  location = '',
  trending = false,
  followers = 0,
  reliable = false,
  verified = false,
  follower = false
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

  useEffect(() => {
    setUserName(nickname || 'Unknown')
    setUserImage(avatar)
    setPublicationDate(date)
    setPublicationLocation(location)
    setIsTrending(trending)
    setIsPopular(followers > 1000000)
    setIsTrusted(reliable)
    setIsVerify(verified)
    setIsFollowing(follower)
  }, [
    nickname,
    avatar,
    date,
    location,
    trending,
    followers,
    reliable,
    verified,
    follower
  ])

  const handleToggleFollowing = () => {
    setIsFollowing(!isFollowing)
  }

  return (
    <article className='bg-red-100 w-full h-fit flex gap-2'>
      {/* Image */}
      <header className='bg-blue-200 w-fit h-fit'>
        <Image
          src={userImage}
          alt={`${userName} avatar`}
          width={44}
          height={44}
          className='rounded-full'
        />
      </header>
      {/* Content */}
      <div className='bg-yellow-100'>
        <section className=''>{userName}</section>
        <section className=''>
          {publicationDate && <div>📅 {publicationDate}</div>}
          {publicationLocation && <div>📍 {publicationLocation}</div>}
        </section>
        <section className=''>
          {isTrending && <span>📈 Trending</span>}
          {isPopular && <span>🔥 Popular</span>}
          {isTrusted && <span>🛡️ Trusted</span>}
          {isVerify && <span>✔ Verified</span>}
        </section>
      </div>
      {/* Buttons */}
      <footer className='bg-green-100'>
        <button className='' onClick={handleToggleFollowing}>
          {isFollowing ? 'Siguiendo' : 'Seguir'}
        </button>
      </footer>
    </article>
  )
}
