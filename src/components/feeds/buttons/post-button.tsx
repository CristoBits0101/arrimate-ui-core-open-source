import { GoHeartFill } from 'react-icons/go'
import { FaCommentDots } from 'react-icons/fa'
import { FaBookmark } from 'react-icons/fa'
import { PiShareFatFill } from 'react-icons/pi'
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
  textColor = '#FFFFFF',
  iconDisplay = '',
  iconColor,
  iconAlt = '',
  iconSize = 24
}: PostButtonProps) {
  return (
    <div className='w-fit h-fit flex flex-col gap-2 justify-center items-center'>
      <button className='w-fit h-fit p-2 rounded-full'>
        {iconDisplay === 'like' && (
          <GoHeartFill size={iconSize} color={iconColor} aria-label={iconAlt} />
        )}
        {iconDisplay === 'comments' && (
          <FaCommentDots
            size={iconSize}
            color={iconColor}
            aria-label={iconAlt}
          />
        )}
        {iconDisplay === 'save' && (
          <PiShareFatFill size={iconSize} color={iconColor} aria-label={iconAlt} />
        )}
        {iconDisplay === 'share' && (
          <FaBookmark size={iconSize} color={iconColor} aria-label={iconAlt} />
        )}
        {iconDisplay === 'options' && (
          <SlOptionsVertical
            size={iconSize}
            color={iconColor}
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
