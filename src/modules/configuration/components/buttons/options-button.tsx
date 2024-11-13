import Image from 'next/image'

interface SettingButtonProps {
  icon: string
  label: string
  onClick: () => void
  altText: string
}

const SettingButton: React.FC<SettingButtonProps> = ({
  icon,
  label,
  onClick,
  altText
}) => (
  <button
    className='text-left cursor-pointer px-8 py-4 hover:bg-[#F4F4F4] flex justify-between items-center border-b-[0.05rem] border-[#EBEAEB] border-solid'
    onClick={onClick}
  >
    {label}
    <Image src={icon} alt={altText} className='w-5 object-contain' />
  </button>
)

export default SettingButton
