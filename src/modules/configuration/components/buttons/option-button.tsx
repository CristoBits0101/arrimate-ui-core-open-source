import Image from 'next/image'

// Defines the props expected by the SectionButton component
interface OptionButtonProps {
  label?: string // Optional label text for the button
  isSelected: boolean // Indicates whether the button is selected
  onClick: () => void // Function to handle button click
  iconSrc: string // Source URL or path for the button icon
  altText: string // Alternative text for the button icon
}

// Defines the SectionButton functional component
const SectionButton: React.FC<OptionButtonProps> = ({
  label,
  isSelected,
  onClick,
  iconSrc,
  altText
}) => (
  // Renders a button with dynamic styles and icon
  <button
    className={`text-left cursor-pointer px-8 py-4 hover:bg-[#F4F4F4] flex justify-between items-center border-b-[0.05rem] border-[#EBEAEB] border-solid ${
      isSelected ? 'bg-[#F4F4F4] font-medium' : ''
    }`}
    onClick={onClick}
  >
    {label}
    <Image src={iconSrc} alt={altText} className='w-5 h-auto object-contain' />
  </button>
)

export default SectionButton
