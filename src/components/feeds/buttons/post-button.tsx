import { GoHeartFill } from 'react-icons/go'
import { IoChatbubbleEllipses } from 'react-icons/io5'
import { HiBookmark } from 'react-icons/hi2'
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
  iconColor = '#FFFFFF',
  iconAlt = '',
  iconSize = 24,
}: PostButtonProps) {
  return (
    <div className='w-fit h-fit flex flex-col gap-2 justify-center items-center'>
      <button className='w-fit h-fit p-2 rounded-full'>
        {iconDisplay === 'like' && (
          <GoHeartFill
            className='fill-white drop-shadow-sm '
            size={iconSize}
            aria-label={iconAlt}
          />
        )}
        {iconDisplay === 'comments' && (
          <IoChatbubbleEllipses
            className='fill-white drop-shadow-sm '
            size={iconSize}
            aria-label={iconAlt}
          />
        )}
        {iconDisplay === 'save' && (
          <PiShareFatFill
            className='fill-white drop-shadow-sm '
            size={iconSize}
            aria-label={iconAlt}
          />
        )}
        {iconDisplay === 'share' && (
          <HiBookmark
            className='fill-white drop-shadow-sm '
            size={iconSize}
            aria-label={iconAlt}
          />
        )}
        {iconDisplay === 'options' && (
          <SlOptionsVertical
            className='fill-white drop-shadow-sm '
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
