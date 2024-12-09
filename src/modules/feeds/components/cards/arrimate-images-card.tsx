import Image from 'next/image'
import unknownImage from '@/modules/feeds/assets/images/unknownImage.jpg'
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
}

export default function ArrimateFollowCard({
  src = undefined,
  alt = 'User avatar',
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
  width = 80,
  height = 80
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
    setUserProfesion(profesion)
    setUserIntereses(intereses)
    setUserSlogan(slogan)
  }, [
    nickname,
    src,
    date,
    location,
    trending,
    followers,
    reliable,
    verified,
    profesion,
    intereses,
    slogan
  ])

  return (
    <article className='w-full h-fit flex items-center gap-4'>
      <header className='rounded-full w-fit h-fit flex-shrink-0 flex items-center'>
        <Image
          src={userImage || unknownImage}
          alt={alt || 'User avatar'}
          width={width}
          height={height}
          className='drop-shadow-sm rounded-full object-cover aspect-square max-h-[100%] w-[3rem] h-[3rem] border-[0.094rem] border-solid border-[#EBEAEB]'
        />
      </header>
      <aside className='flex-grow h-fit overflow-hidden'>
        {(userName || publicationDate || publicationLocation) && (
          <div className='flex w-full h-fit truncate'>
            {userName && (
              <a href='' className='font-medium'>
                {userName}
              </a>
            )}
            {isMounted && (isTrending || isPopular || isTrusted || isVerify) ? (
              <div className='w-fit h-fit flex items-center'>
                <span>&nbsp;</span>
                {isMounted && isTrending && (
                  <span className='w-fit h-fit flex justify-center items-center'>
                    🔥
                  </span>
                )}
                {isMounted && isPopular && (
                  <span className='w-fit h-fit flex justify-center items-center'>
                    ⭐
                  </span>
                )}
                {isMounted && isTrusted && (
                  <span className='w-fit h-fit flex justify-center items-center'>
                    💸
                  </span>
                )}
                {isMounted && isVerify && (
                  <span className='w-fit h-fit flex justify-center items-center'>
                    ✔️
                  </span>
                )}
              </div>
            ) : (
              ''
            )}
            {publicationDate && (
              <span className='font-light text-[#453C41]'>
                &nbsp;•&nbsp;{publicationDate}
              </span>
            )}
            {publicationLocation && (
              <span className='font-light text-[#453C41]'>
                &nbsp;•&nbsp;{publicationLocation}
              </span>
            )}
          </div>
        )}
        <p className='w-full max-w-md font-light text-sm text-[#453C41] truncate overflow-hidden'>
          {userProfesion && userProfesion}
          {userProfesion && userIntereses && ' | '}
          {userIntereses && userIntereses}
          {(userProfesion || userIntereses) && userSlogan && ' | '}
          {userSlogan && userSlogan}
        </p>
      </aside>
    </article>
  )
}
