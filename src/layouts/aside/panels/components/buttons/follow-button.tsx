// Context
import { useThemeContext } from '@/modules/configuration/settings-panel/hooks/useThemeContext'

// Intl
import { useTranslations } from 'next-intl'

// Image
import Image from 'next/image'

// React
import { FC, useState } from 'react'

// SVG
import cancelIcon from '@/assets/icons/buttons/inactive/light-theme/follow/cancel-light-icon.svg'
import followDarkIcon from '@/assets/icons/buttons/inactive/dark-theme/follow/follow-dark-icon.svg'
import followLightIcon from '@/assets/icons/buttons/inactive/light-theme/follow/follow-light-icon.svg'
import followHoverDarkIcon from '@/assets/icons/buttons/inactive/dark-theme/follow/follow-hover-dark-icon.svg'
import followHoverLightIcon from '@/assets/icons/buttons/inactive/light-theme/follow/follow-hover-light-icon.svg'
import followingIcon from '@/assets/icons/buttons/inactive/light-theme/follow/following-light-icon.svg'

// Props interface
interface FollowButtonProps {
  isFollowing: boolean
  onToggleFollow: (newState: boolean) => void
}

const FollowButton: FC<FollowButtonProps> = ({
  isFollowing,
  onToggleFollow
}) => {
  // Context
  const { activeTheme } = useThemeContext()

  // Translations
  const t = useTranslations('Button')

  // Hover
  const [hoverState, setHoverState] = useState(false)

  const handleClick = () => {
    const newState = !isFollowing
    onToggleFollow(newState)
    // Reset hover state on click
    setHoverState(false)
  }

  const getIcon = () => {
    // Show cancel icon on hover
    if (isFollowing && hoverState) return cancelIcon
    // Show followHover icon if not following and on hover
    if (!isFollowing && hoverState) return activeTheme === 'light' ? followHoverLightIcon : followHoverDarkIcon
    // Show following icon if already following
    if (isFollowing) return followingIcon
    // Show follow icon otherwise
    return activeTheme === 'light' ? followLightIcon : followDarkIcon
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
