'use client'

// Next
import Link from 'next/link'

// Type properties
interface RedirectButtonProps {
  href: string
  label?: string
  page?: string
}

export default function RedirectButton({
  href,
  label,
  page
}: RedirectButtonProps) {
  return (
    // Renders a styled button element
    <button className='mx-auto font-normal w-full hover:no-underline text-[#1d0f0f]'>
      {/* Wraps the content in a Link component */}
      <Link className='text-base dark:text-[#ececed]' href={href}>
        {/* Renders the label if it exists */}
        {label && label}
        {/* Adds a space if the label exists */}
        {label && <span className='ml-1'> </span>}
        {/* Styles and renders the page name if it exists */}
        <span className='font-medium text-blue-600/75 dark:text-[#FFD700]'>
          {page && page}
        </span>
      </Link>
    </button>
  )
}
