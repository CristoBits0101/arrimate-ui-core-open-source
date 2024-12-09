import Image from 'next/image'

// Defines the props expected by the SettingButton component
interface SettingButtonProps {
  icon: string
  label: string
  onClick: () => void
  altText: string
  isActive?: boolean
}

// Defines the SettingButton functional component
const SettingButton: React.FC<SettingButtonProps> = ({
  icon,
  label,
  onClick,
  altText,
  isActive = false
}) => (
  // Renders a button with dynamic styles based on the isActive prop
  <button
    className={`w-full text-left cursor-pointer px-8 py-4 flex justify-between items-center border-b-[0.05rem] border-[#EBEAEB] border-solid ${
      isActive ? 'bg-black text-white' : 'bg-white text-black'
    }`}
    onClick={onClick}
  >
    {label}
    <Image src={icon} alt={altText} width={20} height={20} />
  </button>
)

export default SettingButton
