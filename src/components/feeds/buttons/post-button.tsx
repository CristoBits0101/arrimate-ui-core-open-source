import { IoIosHeart } from 'react-icons/io'
import { IoChatbubbleEllipsesSharp } from 'react-icons/io5'
import { IoBookmarkSharp } from 'react-icons/io5'
import { RiShareForwardFill } from 'react-icons/ri'
import { SlOptionsVertical } from 'react-icons/sl'

interface PostButtonProps {
  textDisplay?: string
  textColor?: string
  iconDisplay: string
  iconColor?: string
  iconAlt: string
  iconSize?: number
}

export default function PostButton({
  textDisplay = '',
  textColor = '',
  iconDisplay = '',
  iconColor = '#1D0F0F',
  iconAlt = '',
  iconSize = 28
}: PostButtonProps) {
  // Calculate the text that will be displayed
  switch (iconDisplay) {
    // Likes
    case 'like':
      const likes = parseInt(textDisplay, 10)
      if (likes >= 1_000 && likes < 1_000_000)
        textDisplay = (likes / 1_000).toFixed(1) + ' K'
      else if (likes >= 1_000_000 && likes < 1_000_000_000)
        textDisplay = (likes / 1_000_000).toFixed(1) + ' M'
      else if (likes >= 1_000_000_000)
        textDisplay = (likes / 1_000_000_000).toFixed(1) + ' B'
      break
    // Comments
    case 'comments':
      const comments = parseInt(textDisplay, 10)
      if (comments >= 1_000 && comments < 1_000_000)
        textDisplay = (comments / 1_000).toFixed(1) + ' K'
      else if (comments >= 1_000_000 && comments < 1_000_000_000)
        textDisplay = (comments / 1_000_000).toFixed(1) + ' M'
      else if (comments >= 1_000_000_000)
        textDisplay = (comments / 1_000_000_000).toFixed(1) + ' B'
      break
    // Share
    case 'share':
      break
    // Save
    case 'save':
      break
    // Default
    default:
      break
  }
  return (
    <div className='w-fit h-fit flex flex-col gap-2 justify-center items-center'>
      <button className='w-fit h-fit p-4 rounded-full bg-[#F4F4F4] hover:bg-[#bfbdc050]'>
        {iconDisplay === 'like' && (
          <IoIosHeart
            style={{ fill: iconColor }}
            className='drop-shadow-sm opacity-85 w-7 h-7'
            size={iconSize}
            aria-label={iconAlt}
          />
        )}
        {iconDisplay === 'comments' && (
          <IoChatbubbleEllipsesSharp
            style={{ fill: iconColor }}
            className='drop-shadow-sm opacity-85 w-7 h-7'
            size={iconSize}
            aria-label={iconAlt}
          />
        )}
        {iconDisplay === 'share' && (
          <IoBookmarkSharp
            style={{ fill: iconColor }}
            className='drop-shadow-sm opacity-85 w-7 h-7'
            size={iconSize}
            aria-label={iconAlt}
          />
        )}
        {iconDisplay === 'save' && (
          <RiShareForwardFill
            style={{ fill: iconColor }}
            className='drop-shadow-sm opacity-85 w-7 h-7'
            size={iconSize}
            aria-label={iconAlt}
          />
        )}
        {iconDisplay === 'options' && (
          <SlOptionsVertical
            style={{ fill: iconColor }}
            className='drop-shadow-sm opacity-85 w-7 h-7'
            size={iconSize}
            aria-label={iconAlt}
          />
        )}
      </button>
      <span style={{ color: textColor }} className='text-xs'>
        {textDisplay}
      </span>
    </div>
  )
}
