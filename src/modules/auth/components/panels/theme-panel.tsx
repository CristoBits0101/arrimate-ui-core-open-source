'use client'

import ThemeButton from '@/modules/auth/components/buttons/configuration/theme-button'

export default function ThemePanel() {
  return (
    <div className='absolute w-fit h-fit flex gap-2 top-4 left-4 z-10'>
      <ThemeButton />
    </div>
  )
}
