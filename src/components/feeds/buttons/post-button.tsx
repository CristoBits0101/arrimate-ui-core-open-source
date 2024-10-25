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
  iconSize = 26
}: PostButtonProps) {
  return (
    <div className='w-fit h-fit flex flex-col gap-2 justify-center items-center'>
      <button className='w-fit h-fit p-2 rounded-full'>
        {iconDisplay === 'like' && (
          <GoHeartFill
            style={{ fill: iconColor }}
            className='drop-shadow-sm opacity-85'
            size={iconSize}
            aria-label={iconAlt}
          />
        )}
        {iconDisplay === 'comments' && (
          <IoChatbubbleEllipses
            style={{ fill: iconColor }}
            className='drop-shadow-sm opacity-85'
            size={iconSize}
            aria-label={iconAlt}
          />
        )}
        {iconDisplay === 'save' && (
          <PiShareFatFill
            style={{ fill: iconColor }}
            className='drop-shadow-sm opacity-85'
            size={iconSize}
            aria-label={iconAlt}
          />
        )}
        {iconDisplay === 'share' && (
          <HiBookmark
            style={{ fill: iconColor }}
            className='drop-shadow-sm opacity-85'
            size={iconSize}
            aria-label={iconAlt}
          />
        )}
        {iconDisplay === 'options' && (
          <SlOptionsVertical
            style={{ fill: iconColor }}
            className='drop-shadow-sm opacity-85'
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
