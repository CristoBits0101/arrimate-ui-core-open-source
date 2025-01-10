'use client'

// Button
import FollowButton from '@/layouts/aside/panels/components/user/components/buttons/follow-button'

// Custom hook
import { useMounted } from '@/layouts/aside/panels/components/user/hooks/useMounted'

// Span
import CountrySpan from '@/layouts/aside/panels/components/user/components/span/country-span'
import HeaderSpan from '@/layouts/aside/panels/components/user/components/span/header-span'

// Sections
import UserInfoSection from '@/layouts/aside/panels/components/user/components/sections/user-info-section'

interface ArrimateFollowCardProps {
  src?: string
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
  connection: boolean
  countryCode?: string
}

export default function ArrimateFollowCard({
  src,
  nickname,
  profesion,
  intereses,
  slogan,
  trending,
  followers,
  reliable,
  verified,
  follower,
  connection,
  countryCode
}: ArrimateFollowCardProps) {
  const {
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
  } = useMounted({
    src,
    nickname,
    profesion,
    intereses,
    slogan,
    followers,
    reliable,
    verified,
    follower,
    trending,
    connection
  })

  return (
    <article className='relative border-solid border-[0.05rem] border-[#EBEAEB] rounded-xl w-full min-h-52 max-h-fit h-auto flex flex-col p-3 justify-between items-center'>
      <HeaderSpan src={userImage} connection={isOnline} />
      {userName && (
        <UserInfoSection
          userName={userName}
          userProfession={userProfession}
          userInterests={userInterests}
          userSlogan={userSlogan}
          isMounted={isMounted}
          isTrending={isTrending}
          isPopular={isPopular}
          isTrusted={isTrusted}
          isVerified={isVerified}
        />
      )}
      <footer className='w-full h-fit flex justify-between items-center p-2'>
        {countryCode && <CountrySpan countryCode={countryCode} />}
        <FollowButton
          isFollowing={isFollowing}
          onToggleFollow={handleToggleFollowing}
        />
      </footer>
    </article>
  )
}
