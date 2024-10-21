import Image from 'next/image'
import { useState, useEffect } from 'react'

interface ArrimateFollowCardProps {
  nickname: string
  avatar?: string
  date?: string
  location?: string
  trending: boolean
  followers: number
  reliable: boolean
  verified: boolean
  follower: boolean
}

export default function ArrimateFollowCard({
  nickname = 'Unknown',
  avatar = '/default-avatar.png',
  date,
  location,
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

  // Actualizar estados si los props cambian
  useEffect(() => {
    setUserName(nickname || 'Unknown')
    setUserImage(avatar || '/default-avatar.png')
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
    <article className='w-fit h-fit flex gap-2 bg-red-300 p-4 rounded-md shadow-md'>
      <header className='w-16 h-16'>
        <Image
          src={userImage}
          alt={`${userName} avatar`}
          width={64}
          height={64}
          className='rounded-full'
        />
      </header>
      <div className='flex flex-col justify-center'>
        <section className='font-bold text-lg'>{userName}</section>
        <section className='text-sm text-gray-600'>
          {publicationDate && <div>📅 {publicationDate}</div>}
          {publicationLocation && <div>📍 {publicationLocation}</div>}
        </section>
        <section className='mt-2 flex gap-1'>
          {isTrending && <span>📈 Trending</span>}
          {isPopular && <span>🔥 Popular</span>}
          {isTrusted && <span>🛡️ Trusted</span>}
          {isVerify && <span>✔ Verified</span>}
        </section>
      </div>
      <footer className='ml-auto flex items-center'>
        <button
          className='bg-blue-500 text-white px-4 py-2 rounded-md'
          onClick={handleToggleFollowing}
        >
          {isFollowing ? 'Siguiendo' : 'Seguir'}
        </button>
      </footer>
    </article>
  )
}
