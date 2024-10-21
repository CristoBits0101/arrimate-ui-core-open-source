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
    <article className='w-full h-16 flex gap-3 text-sm'>
      {/* Image */}
      <header className='w-1/4 h-full drop-shadow-sm flex items-center'>
        <Image
          src={userImage ?? unknownImage}
          alt={`${userName ?? 'Unknown'} image`}
          width={80}
          height={80}
          className='object-cover aspect-auto max-h-[100%] w-full h-full'
        />
      </header>
      {/* Content */}
      <div className='w-3/4 h-full flex flex-col justify-between'>
        {(userName || publicationDate || publicationLocation) && (
          <section className='w-full h-4 flex gap-1 items-center'>
            <p className='truncate h-fit'>
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
          <section className='w-full h-4 flex gap-1 items-center'>
            <p className='truncate h-fit'>{userDescription}</p>
          </section>
        )}
        <section
          className={`w-full h-6 flex ${
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
              <span className='rounded-full h-6 font-medium flex justify-center items-center pl-2 pr-2.5 text-xs bg-[#F4F4F4] hover:bg-[#bfbdc050]'>
                {isFollowing ? 'Siguiendo' : '🤝 Follow'}
              </span>
            </button>
          </footer>
        </section>
      </div>
      {/* Buttons */}
    </article>
  )
}
