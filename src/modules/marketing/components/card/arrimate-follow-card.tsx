'use client'

import unknownImage from '@/modules/marketing/assets/images/unknownImage.jpg'
import FollowButton from '@/modules/marketing/components/buttons/follow-button'
import { useState, useEffect } from 'react'

interface ArrimateFollowCardProps {
  src?: string | undefined
  alt?: string | undefined
  nickname: string
  profesion: string
  intereses: string
  slogan: string
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
  countryCode?: string
}

export default function ArrimateFollowCard({
  src = undefined,
  nickname = '',
  profesion = '',
  intereses = '',
  slogan = '',
  date = '',
  location = '',
  trending = false,
  followers = 0,
  reliable = false,
  verified = false,
  follower = false,
  connection = false,
  countryCode = ''
}: ArrimateFollowCardProps) {
  const [isMounted, setIsMounted] = useState(false)
  const [userImage, setUserImage] = useState<string | undefined>(src)
  const [userName, setUserName] = useState(nickname)
  const [userProfesion, setUserProfesion] = useState(profesion)
  const [userIntereses, setUserIntereses] = useState(intereses)
  const [userSlogan, setUserSlogan] = useState(slogan)
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
    setUserProfesion(profesion)
    setUserIntereses(intereses)
    setUserSlogan(slogan)
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
    profesion,
    intereses,
    slogan,
    connection
  ])

  const handleToggleFollowing = (newState: boolean) => {
    setIsFollowing(newState)
  }

  return (
    <article className='relative border-solid border-[0.05rem] border-[#EBEAEB] rounded-xl w-full h-fit flex flex-col gap-1 p-3 justify-center items-center'>
      {countryCode && (
        <span className='absolute top-1.5 right-2 text-xs font-light rounded-full'>
          {countryCode}
        </span>
      )}
      <span className='shadow-sm relative inline-flex overflow-hidden rounded-full border border-solid border-[#EBEAEB] p-1'>
        {isOnline ? (
          <span className='absolute inset-[-1000%] animate-spin bg-[conic-gradient(from_90deg_at_50%_50%,#68EF00_0%,#5EBAA6_50%,#68EF00_100%)]'></span>
        ) : (
          <span className='absolute inset-[-1000%] bg-[#453C41]'></span>
        )}
        <header
          className='relative w-16 h-16 flex items-center justify-center bg-cover bg-center bg-no-repeat aspect-square rounded-full z-10'
          style={{ backgroundImage: `url(${userImage || unknownImage})` }}
        ></header>
      </span>

      {userName && (
        <section className='w-full h-fit flex flex-col justify-center items-center mb-1'>
          <p className='truncate w-full h-fit text-center font-medium'>
            {userName}
          </p>
          <p className='truncate w-full h-fit text-center text-[#453C41] text-sm mb-1'>
            {userProfesion && userProfesion}
            {userProfesion && userIntereses && ' | '}
            {userIntereses && userIntereses}
            {(userProfesion || userIntereses) && userSlogan && ' | '}
            {userSlogan && userSlogan}
          </p>
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
              <span className='h-full text-center text-sm'>
                {publicationLocation && ` • ${publicationLocation}`}
              </span>
            </p>
          </section>
        )}
      </footer>
    </article>
  )
}
