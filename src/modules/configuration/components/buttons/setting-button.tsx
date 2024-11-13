import React from 'react'
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
  <button className='flex items-center gap-2' onClick={onClick}>
    <Image src={icon} alt={altText} className='w-5' />
    {label}
  </button>
)

export default SettingButton
