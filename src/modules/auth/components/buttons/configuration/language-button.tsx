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
      className='w-fit h-fit flex items-center border-0 outline-0'
    >
      <Image
        src={iconSrc}
        alt={altText}
        className='w-auto h-3.5 aspect-video object-fill border-0 outline-0 drop-shadow-sm'
      />
    </button>
  )
}
