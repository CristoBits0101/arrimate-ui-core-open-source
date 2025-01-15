// next/image
import Image from 'next/image'

// next-intl
import { useTranslations } from 'next-intl'

// React
import { FC, useState } from 'react'

// SVG
import cancel from '@/assets/icons/buttons/inactive/light-theme/follow/cancel-light-icon.svg'
import follow from '@/assets/icons/buttons/inactive/light-theme/follow/follow-light-icon.svg'
import followHover from '@/assets/icons/buttons/inactive/light-theme/follow/follow-hover-light-icon.svg'
import following from '@/assets/icons/buttons/inactive/light-theme/follow/following-light-icon.svg'

// Props interface
interface FollowButtonProps {
  isFollowing: boolean
  onToggleFollow: (newState: boolean) => void
}

const FollowButton: FC<FollowButtonProps> = ({
  isFollowing,
  onToggleFollow
}) => {
  const t = useTranslations('Button')
  const [hoverState, setHoverState] = useState(false)

  const handleClick = () => {
    const newState = !isFollowing
    onToggleFollow(newState)
    // Reset hover state on click
    setHoverState(false)
  }

  const getIcon = () => {
    // Show cancel icon on hover
    if (isFollowing && hoverState) return cancel
    // Show followHover icon if not following and on hover
    if (!isFollowing && hoverState) return followHover
    // Show following icon if already following
    if (isFollowing) return following
    // Show follow icon otherwise
    return follow
  }

  return (
    <button
      className='outline-none w-7 h-7 flex justify-center items-center py-1.5 transition-transform duration-300 transform-none border-none bg-transparent'
      onClick={handleClick}
      onMouseOver={() => setHoverState(true)}
      onMouseOut={() => setHoverState(false)}
    >
      <Image
        src={getIcon()}
        alt={t(isFollowing ? 'following' : 'follow')}
        className='w-7 h-7 aspect-square object-contain'
      />
    </button>
  )
}

export default FollowButton
