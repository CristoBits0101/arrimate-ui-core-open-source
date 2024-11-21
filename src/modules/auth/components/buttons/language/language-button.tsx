'use client'

import Image from 'next/image'

export interface LanguageButtonProps {
  language: 'en' | 'es'
  onClick: (language: 'en' | 'es') => void
  iconSrc: string
  altText: string
}

export default function LanguageButton({
  language,
  onClick,
  iconSrc,
  altText
}: LanguageButtonProps) {
  return (
    <button
      onClick={() => onClick(language)}
      className='w-fit h-fit flex items-center'
    >
      <Image
        src={iconSrc}
        alt={altText}
        className='w-5 aspect-video h-auto object-scale-down'
      />
    </button>
  )
}
