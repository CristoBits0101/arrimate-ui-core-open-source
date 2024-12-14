import { FC } from 'react'
import { useTranslations } from 'next-intl'

interface FollowButtonProps {
  isFollowing: boolean
  onToggleFollow: (newState: boolean) => void
  text: string
  bgColor: string
  hoverBgColor: string
  textColor: string
  isRound: boolean
}

const FollowButton: FC<FollowButtonProps> = ({
  isFollowing,
  onToggleFollow,
  bgColor,
  hoverBgColor,
  textColor,
  isRound
}) => {
  const t = useTranslations('Button')
  const handleClick = () => {
    const newState = !isFollowing
    onToggleFollow(newState)
  }
  return (
    <button
      className={`outline-none w-full h-fit flex justify-center items-center py-1.5 transition-colors duration-300 transform-none border-none ${
        isRound ? '' : 'rounded-md'
      }`}
      style={{
        backgroundColor: bgColor,
        color: textColor
      }}
      onClick={handleClick}
      onMouseOver={(e) =>
        (e.currentTarget.style.backgroundColor = hoverBgColor)
      }
      onMouseOut={(e) => (e.currentTarget.style.backgroundColor = bgColor)}
    >
      <span className='w-full flex justify-center items-center text-sm'>
        {isFollowing ? t('following') : t('follow')}
      </span>
    </button>
  )
}

export default FollowButton
