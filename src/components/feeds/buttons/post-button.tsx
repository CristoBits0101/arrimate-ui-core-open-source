import { IoIosHeart } from 'react-icons/io'
import { FaCommentDots } from 'react-icons/fa'
import { IoMdBookmark } from 'react-icons/io'
import { IoIosShareAlt } from 'react-icons/io'
import { SlOptionsVertical } from 'react-icons/sl'

interface PostButtonProps {
  backgroundColor?: string
  textDisplay?: string
  textColor?: string
  iconDisplay: string
  iconColor?: string
  iconAlt: string
  iconSize?: number
}

export default function PostButton({
  backgroundColor = '#FFFFFF',
  textDisplay = '',
  textColor = '#FFFFFF',
  iconDisplay = '',
  iconColor = '#1D0F0F',
  iconAlt = '',
  iconSize = 20,
}: PostButtonProps) {
  return (
    <div className='w-fit h-fit flex flex-col gap-2 justify-center items-center'>
      <button
        style={{ backgroundColor }}
        className='w-fit h-fit p-2 rounded-full'
      >
        {iconDisplay === 'like' && (
          <IoIosHeart size={iconSize} color={iconColor} aria-label={iconAlt} />
        )}
        {iconDisplay === 'comments' && (
          <FaCommentDots
            size={iconSize}
            color={iconColor}
            aria-label={iconAlt}
          />
        )}
        {iconDisplay === 'save' && (
          <IoIosShareAlt
            size={iconSize}
            color={iconColor}
            aria-label={iconAlt}
          />
        )}
        {iconDisplay === 'share' && (
          <IoMdBookmark
            size={iconSize}
            color={iconColor}
            aria-label={iconAlt}
          />
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
