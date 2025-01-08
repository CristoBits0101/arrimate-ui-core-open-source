'use client'

// Imports the ThemeButton component for toggling the theme
import ThemeButton from '@/modules/auth/components/buttons/configuration/theme-button'

// Defines the ThemeSection component
export default function ThemeSection() {
  return (
    // Renders the theme section container
    <section className='h-fit w-fit rounded-full'>
      <ThemeButton />
    </section>
  )
}
