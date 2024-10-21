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
  follower = false
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
    description
  ])

  const handleToggleFollowing = () => {
    setIsFollowing(!isFollowing)
  }

  return (
    <article className='w-full h-[3.75rem] flex gap-3 text-sm'>
      {/* Image */}
      <header className='w-1/4 h-full border-[0.188rem] border-[#bfbdc050] border-solid drop-shadow-sm shadow-[#edeced]'>
        <Image
          src={userImage ?? unknownImage}
          alt={`${userName ?? 'Unknown'} image`}
          width={80}
          height={80}
          className='drop-shadow object-cover aspect-auto max-h-[100%] w-full h-auto'
        />
      </header>
      {/* Content */}
      <div className='w-3/4 h-full flex flex-col justify-center'>
        {(userName || publicationDate || publicationLocation) && (
          <section className='w-full flex gap-1 items-center'>
            <p className='truncate'>
              <span className='font-medium'>{userName && userName}</span>
              <span className='font-light'>
                {publicationDate && publicationDate}
              </span>
              <span className='font-light'>
                {publicationLocation && publicationLocation}
              </span>
            </p>
          </section>
        )}
        {userDescription && (
          <section className='w-full flex gap-1 items-center'>
            <p className='truncate'>{userDescription}</p>
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
            <div className='w-fit'>
              {isTrending && <span>🔥</span>}
              {isPopular && <span>⭐</span>}
              {isTrusted && <span>💵</span>}
              {isVerify && <span>✔️</span>}
            </div>
          )}
          <footer className='w-fit flex justify-between items-center gap-2'>
            <button className='w-fit h-fit' onClick={handleToggleFollowing}>
              <span className='font-light'>
                {isFollowing ? 'Siguiendo' : 'Seguir'}
              </span>
            </button>
            <button className='w-fit h-fit' onClick={handleToggleFollowing}>
              <span className='font-light'>
                {isFollowing ? 'Siguiendo' : 'Seguir'}
              </span>
            </button>
          </footer>
        </section>
      </div>
      {/* Buttons */}
    </article>
  )
}
