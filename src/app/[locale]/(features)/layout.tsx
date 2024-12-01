// layouts
import Aside from '@/layouts/components/aside'
import Header from '@/layouts/components/header'

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
      <main className='min-w-52 col-span-1 h-fit'>{children}</main>
      {/* Aside layout  */}
      <Aside />
    </>
  )
}
