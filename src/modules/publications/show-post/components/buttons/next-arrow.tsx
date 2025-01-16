import Image from 'next/image'
import rightArrow from '@/assets/icons/buttons/inactive/light-theme/arrows/arrow-right-light-icon.svg'

type NextArrowProps = {
  onClick: () => void
}

export function NextArrow({ onClick }: NextArrowProps) {
  return (
    <div className='custom-next absolute right-0 top-[calc(50%-14px)] transform -translate-y-1/2 z-10'>
      <button
        onClick={onClick}
        className='p-2 rounded-full text-white opacity-85 hover:opacity-100 focus:outline-none'
      >
        <Image
          src={rightArrow}
          alt='Right arrow'
          width={32}
          height={32}
          loading='lazy'
          className='opacity-85'
        />
      </button>
    </div>
  )
}
