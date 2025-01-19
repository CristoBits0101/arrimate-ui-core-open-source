'use client'

// Context
import { useSearchContext } from '@/modules/navigation/searcher/hooks/useSearchContext'

// Hooks
import { useState } from 'react'

// Spinners
import { PuffLoader } from 'react-spinners'

export default function LoupeButton() {
  // Context
  const { isTyping, updateFocus } = useSearchContext()

  // States
  const [isFocused, setIsFocused] = useState(false)

  // Handlers
  const handleOnClick = () => {
    setIsFocused(false)
    updateFocus(false)
  }

  const handleOnMouseEnter = () => {
    setIsFocused(true)
  }

  const handleOnMouseLonMouseLeave = () => {
    setIsFocused(false)
  }

  return (
    <div
      tabIndex={0}
      onMouseEnter={handleOnMouseEnter}
      onMouseLeave={handleOnMouseLonMouseLeave}
      onClick={handleOnClick}
      className='bg-[#F4F4F4] hover:bg-[#ececed] dark:bg-[#26272C] dark:hover:bg-[#3b3b40] border border-[#EBEAEB] dark:border-[#3b3b40] flex items-center justify-center aspect-square w-11 rounded-full cursor-pointer'
    >
      {!isFocused && !isTyping ? (
        <button className='w-fit h-fit'>
          <svg
            className='w-5 h-5 fill-current text-[#1d0f0f] dark:text-[#ececed]'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 -960 960 960'
            fill='currentColor'
          >
            <path d='M781.69-136.92 530.46-388.16q-30 24.77-69 38.77-39 14-80.69 14-102.55 0-173.58-71.01-71.03-71.01-71.03-173.54 0-102.52 71.01-173.6 71.01-71.07 173.54-71.07 102.52 0 173.6 71.03 71.07 71.03 71.07 173.58 0 42.85-14.38 81.85-14.39 39-38.39 67.84l251.23 251.23-42.15 42.16ZM380.77-395.38q77.31 0 130.96-53.66 53.66-53.65 53.66-130.96t-53.66-130.96q-53.65-53.66-130.96-53.66t-130.96 53.66Q196.15-657.31 196.15-580t53.66 130.96q53.65 53.66 130.96 53.66Z' />
          </svg>
        </button>
      ) : isFocused ? (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          height='24px'
          viewBox='0 -960 960 960'
          width='24px'
          className='w-5 h-5 fill-current text-[#1d0f0f] dark:text-[#ececed]'
          fill='currentColor'
        >
          <path d='m249-207-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z' />
        </svg>
      ) : isTyping ? (
        <PuffLoader size={25} />
      ) : null}
    </div>
  )
}
