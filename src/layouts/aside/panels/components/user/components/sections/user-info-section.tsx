'use client'

interface UserInfoSectionProps {
  userName: string
  userProfession?: string
  userInterests?: string
  userSlogan?: string
  isMounted: boolean
  isTrending: boolean
  isPopular: boolean
  isTrusted: boolean
  isVerified: boolean
}

export default function UserInfoSection({
  userName,
  userProfession,
  userInterests,
  userSlogan,
  isMounted,
  isTrending,
  isPopular,
  isTrusted,
  isVerified
}: UserInfoSectionProps) {
  return (
    <section className='w-full h-fit flex flex-col justify-center items-center mb-1'>
      <p className='truncate w-full h-fit text-center font-medium'>
        {userName}
      </p>
      <p className='truncate w-full h-fit text-center text-[#453C41] text-sm mb-1'>
        {userProfession && userProfession}
        {userProfession && userInterests && ' | '}
        {userInterests && userInterests}
        {(userProfession || userInterests) && userSlogan && ' | '}
        {userSlogan && userSlogan}
      </p>
      {isMounted && (isTrending || isPopular || isTrusted || isVerified) ? (
        <p className='truncate w-full h-fit flex justify-center items-start gap-1'>
          {isTrending && <span>🔥</span>}
          {isPopular && <span>⭐</span>}
          {isTrusted && <span>💸</span>}
          {isVerified && <span>✔️</span>}
        </p>
      ) : (
        <p className='truncate w-full h-fit flex justify-center items-start gap-1'>
          ㅤ
        </p>
      )}
    </section>
  )
}
