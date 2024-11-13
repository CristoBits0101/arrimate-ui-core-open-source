import Image from 'next/image'

interface SectionButtonProps {
  label: string
  isSelected: boolean
  onClick: () => void
  iconSrc: string
  altText: string
}

const SectionButton: React.FC<SectionButtonProps> = ({
  label,
  isSelected,
  onClick,
  iconSrc,
  altText
}) => (
  <button
    className={`text-left cursor-pointer px-8 py-2 hover:bg-[#F4F4F4] flex justify-between items-center gap-2 ${
      isSelected ? 'bg-[#F4F4F4] font-medium' : ''
    }`}
    onClick={onClick}
  >
    {label}
    <Image
      width={24}
      height={24}
      src={iconSrc}
      alt={altText}
      className='object-cover drop-shadow-sm'
    />
  </button>
)

export default SectionButton
