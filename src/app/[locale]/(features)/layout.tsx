// layouts
import Aside from '@/layouts/aside/components/aside-layout'
import Header from '@/layouts/header/header-layout'

export default function FeaturesLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {/* Header layout */}
      <Header />
      {/* Features pages */}
      <main className='min-w-52 min-h-screen max-h-fit h-auto col-span-1 dark:bg-[#26272C]'>
        {children}
      </main>
      {/* Aside layout  */}
      <Aside />
    </>
  )
}
