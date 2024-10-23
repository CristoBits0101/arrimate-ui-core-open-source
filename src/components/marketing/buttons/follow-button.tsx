import { FC } from 'react'

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
  text,
  bgColor,
  hoverBgColor,
  textColor,
  isRound
}) => {
  const handleClick = () => {
    const newState = !isFollowing
    onToggleFollow(newState)
  }

  return (
    <button
      className={`outline-none w-full h-fit flex justify-center items-center py-1.5 mx-1.5 transition-colors duration-300 ${
        isRound ? 'rounded-full' : 'rounded-md'
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
      <span className='w-full flex justify-center items-center text-xs'>
        {text}
      </span>
    </button>
  )
}

export default FollowButton
