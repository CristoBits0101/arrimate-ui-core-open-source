// Custom hook
import useThemeSection from '@/modules/configuration/hooks/sections/useThemeSection'

// Auth layout
export default function AuthLayout({
  children
}: {
  children: React.ReactNode
}) {
  const { getTheme } = useThemeSection()
  getTheme()
  return (
    // General main element for auth pages
    <main className='min-w-52 col-span-3 flex justify-center items-center h-fit'>
      {/* Auth pages */}
      {children}
    </main>
  )
}
