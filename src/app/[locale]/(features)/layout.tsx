import Aside from '@/modules/layouts/components/aside'
import Header from '@/modules/layouts/components/header'

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
