import { IoMdHeart } from 'react-icons/io'
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
  textColor = '#FFFFFF',
  iconDisplay = '',
  iconColor = '#1D0F0F',
  iconAlt = '',
  iconSize = 28
}: PostButtonProps) {
  return (
    <div className='w-fit h-fit flex flex-col gap-2 justify-center items-center'>
      <button className='w-fit h-fit p-4 rounded-full bg-[#F4F4F4]'>
        {iconDisplay === 'like' && (
          <IoMdHeart
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
