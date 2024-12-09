'use client'

// next/image
import Image from 'next/image'

/**
 * Props interface
 * 
 * Supported languages
 * Click handler
 * Icon source
 * Accessible alt text
 */
export interface LanguageButtonProps {
  language: 'en' | 'es'
  onClick: (language: 'en' | 'es') => void
  iconSrc: string
  altText: string
}

// Functional component
export default function LanguageButton({
  language,
  onClick,
  iconSrc,
  altText
}: LanguageButtonProps) {
  return (
    // Button
    <button
      onClick={() => onClick(language)}
      className='w-fit h-fit flex items-center justify-end border-0 outline-0'
    >
      {/* Icon */}
      <Image
        src={iconSrc}
        alt={altText}
        className='w-[1.125rem] h-[1.125rem] aspect-square object-cover border-0 outline-0 drop-shadow-sm'
      />
    </button>
  )
}
