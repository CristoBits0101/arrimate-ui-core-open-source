import { useState, useEffect } from 'react'

interface UseMountedProps {
  nickname: string
  src?: string
  profesion: string
  intereses: string
  slogan: string
  followers: number
  reliable?: boolean
  verified?: boolean
  follower?: boolean
  trending?: boolean
  connection: boolean
}

export function useMounted({
  nickname,
  src,
  profesion,
  intereses,
  slogan,
  followers,
  reliable = false,
  verified = false,
  follower = false,
  trending = false,
  connection
}: UseMountedProps) {
  const [isMounted, setIsMounted] = useState(false)
  const [userImage, setUserImage] = useState<string | undefined>(src)
  const [userName, setUserName] = useState(nickname)
  const [userProfession, setUserProfession] = useState(profesion)
  const [userInterests, setUserInterests] = useState(intereses)
  const [userSlogan, setUserSlogan] = useState(slogan)
  const [isFollowing, setIsFollowing] = useState(follower)
  const [isTrending, setIsTrending] = useState(trending)
  const [isTrusted, setIsTrusted] = useState(reliable)
  const [isVerified, setIsVerified] = useState(verified)
  const [isOnline, setIsOnline] = useState(connection)
  const [isPopular, setIsPopular] = useState(followers > 1000000)

  useEffect(() => {
    setIsMounted(true)
    setUserName(nickname)
    setUserImage(src)
    setUserProfession(profesion)
    setUserInterests(intereses)
    setUserSlogan(slogan)
    setIsFollowing(follower)
    setIsTrending(trending)
    setIsTrusted(reliable)
    setIsVerified(verified)
    setIsOnline(connection)
    setIsPopular(followers > 1000000)
  }, [
    nickname,
    src,
    profesion,
    intereses,
    slogan,
    followers,
    reliable,
    verified,
    follower,
    trending,
    connection
  ])

  const handleToggleFollowing = (newState: boolean) => {
    setIsFollowing(newState)
  }

  return {
    isMounted,
    userImage,
    userName,
    userProfession,
    userInterests,
    userSlogan,
    isFollowing,
    handleToggleFollowing,
    isTrending,
    isTrusted,
    isVerified,
    isOnline,
    isPopular
  }
}
