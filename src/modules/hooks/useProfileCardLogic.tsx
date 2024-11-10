import { useState, useEffect } from 'react'

interface UseProfileCardLogicProps {
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
}

export function useProfileCardLogic({
  src,
  nickname,
  description,
  date,
  location,
  trending,
  followers,
  reliable,
  verified,
  follower
}: UseProfileCardLogicProps) {
  const [isMounted, setIsMounted] = useState(false)
  const [userImage, setUserImage] = useState<string | undefined>(src)
  const [userName, setUserName] = useState(nickname)
  const [userDescription, setUserDescription] = useState(description)
  const [publicationDate, setPublicationDate] = useState<string | undefined>(
    date
  )
  const [publicationLocation, setPublicationLocation] = useState<
    string | undefined
  >(location)
  const [isTrending, setIsTrending] = useState(trending || false)
  const [isPopular, setIsPopular] = useState(followers > 1000000)
  const [isTrusted, setIsTrusted] = useState(reliable || false)
  const [isVerify, setIsVerify] = useState(verified || false)
  const [isFollowing, setIsFollowing] = useState(follower || false)

  useEffect(() => {
    setIsMounted(true)
    setUserName(nickname || 'Unknown')
    setUserImage(src)
    setPublicationDate(date)
    setPublicationLocation(location)
    setIsTrending(trending || false)
    setIsPopular(followers >= 1000000)
    setIsTrusted(reliable || false)
    setIsVerify(verified || false)
    setIsFollowing(follower || false)
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

  const handleToggleFollowing = (newState: boolean) => {
    setIsFollowing(newState)
  }

  return {
    isMounted,
    userImage,
    userName,
    userDescription,
    publicationDate,
    publicationLocation,
    isTrending,
    isPopular,
    isTrusted,
    isVerify,
    isFollowing,
    handleToggleFollowing
  }
}
