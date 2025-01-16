import Image from 'next/image'
import leftArrow from '@/assets/icons/buttons/inactive/light-theme/arrows/arrow-left-light-icon.svg'

type PreviousArrowProps = {
  onClick: () => void
}

export function PreviousArrow({ onClick }: PreviousArrowProps) {
  return (
    <div className='custom-prev absolute left-0 top-[calc(50%-14px)] transform -translate-y-1/2 z-10'>
      <button
        onClick={onClick}
        className='p-2 rounded-full text-white opacity-85 hover:opacity-100 focus:outline-none'
      >
        <Image
          src={leftArrow}
          alt='Left arrow'
          width={32}
          height={32}
          loading='lazy'
          className='opacity-85'
        />
      </button>
    </div>
  )
}
