import Image from 'next/image'

interface OptionButtonProps {
  label: string
  isSelected: boolean
  onClick: () => void
  iconSrc: string
  altText: string
}

const SectionButton: React.FC<OptionButtonProps> = ({
  label,
  isSelected,
  onClick,
  iconSrc,
  altText
}) => (
  <button
    className={`text-left cursor-pointer px-8 py-4 hover:bg-[#F4F4F4] flex justify-between items-center border-b-[0.05rem] border-[#EBEAEB] border-solid ${
      isSelected ? 'bg-[#F4F4F4] font-medium' : ''
    }`}
    onClick={onClick}
  >
    {label}
    <Image
      src={iconSrc}
      alt={altText}
      className='w-5 object-contain'
    />
  </button>
)

export default SectionButton
