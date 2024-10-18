import Aside from '@/layouts/aside'
import Header from '@/layouts/header'

export default function FeaturesLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      <main className='min-w-52 col-span-1' >{children}</main>
      <Aside />
    </>
  )
}
