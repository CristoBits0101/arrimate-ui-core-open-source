import Image from 'next/image'
import { useState, useEffect } from 'react'

interface ArrimateFollowCardProps {
  userName: string
  trending: boolean
  followers: number
  reliable: boolean
  verified: boolean
  follower: boolean
}

export default function ArrimateFollowCard({
  userName,
  trending,
  followers,
  reliable,
  verified,
  follower
}: ArrimateFollowCardProps) {
  //
  const [isTrending, setIsTrending] = useState(trending)
  const [isPopular, setIsPopular] = useState(followers > 1000000)
  const [isTrusted, setIsTrusted] = useState(reliable)
  const [isVerify, setIsVerify] = useState(verified)
  const [isFollowing, setIsFollowing] = useState(follower)

  //
  useEffect(() => {
    setIsTrending(trending)
    setIsPopular(followers > 1000000)
    setIsTrusted(reliable)
    setIsVerify(verified)
    setIsFollowing(follower)
  }, [trending, followers, reliable, verified, follower])

  const handleToggleFollowing = () => {
    setIsFollowing(!isFollowing)
  }

  return (
    <article className='w-fit h-fit flex bg-red-300'>
      <header className='w-fit h-fit'>
        <Image src='' alt='User avatar' />
      </header>
      <div className=''>
        <section className=''>{userName ?? 'Unknown'}</section>
        <section className=''>
          {isTrending && <span>📈</span>}
          {isPopular && <span>🔥</span>}
          {isTrusted && <span>🛡️</span>}
          {isVerify && <span>✔ </span>}
        </section>
      </div>
      <footer className=''>
        <button className='' onClick={handleToggleFollowing}>
          {isFollowing ? 'Siguiendo' : 'Seguir'}
        </button>
      </footer>
    </article>
  )
}
