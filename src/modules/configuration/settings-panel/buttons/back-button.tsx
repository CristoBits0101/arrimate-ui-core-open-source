'use client'

// Image
import Image from 'next/image'
import backIcon from '@/assets/icons/buttons/inactive/light-theme/windows/back-light-icon.svg'

// Type props
interface BackButtonProps {
  onClick: () => void
}

const BackButton: React.FC<BackButtonProps> = ({ onClick }) => {
  return (
    <button
      className='w-6 absolute left-8 top-1/2 transform -translate-y-1/2 flex items-center bg-[#F4F4F4] aspect-square rounded-full border-[0.05rem] border-[#EBEAEB] border-solid'
      onClick={onClick}
    >
      <Image
        width={24}
        height={24}
        src={backIcon}
        alt='Back button icon'
        className='aspect-square object-contain'
      />
    </button>
  )
}

export default BackButton
