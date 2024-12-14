// next/image
import Image from 'next/image'

// next-intl
import { useTranslations } from 'next-intl'

// React
import { FC, useState } from 'react'

// SVG
import cancel from '@/modules/marketing/assets/icons/cancel.svg'
import follow from '@/modules/marketing/assets/icons/follow.svg'
import followHover from '@/modules/marketing/assets/icons/follow_hover.svg'
import following from '@/modules/marketing/assets/icons/following.svg'

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
    if (isFollowing && hoverState) return cancel // Show cancel icon on hover
    if (!isFollowing && hoverState) return followHover // Show followHover icon if not following and on hover
    if (isFollowing) return following // Show following icon if already following
    return follow // Show follow icon otherwise
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
