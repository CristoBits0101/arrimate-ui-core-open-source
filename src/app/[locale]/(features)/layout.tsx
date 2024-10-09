import Header from '@/layouts/header'
import LeftSidebar from '@/layouts/left-sidebar'
import RightSidebar from '@/layouts/aside'

export default function FeaturesLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      <LeftSidebar />
      <main>{children}</main>
      <RightSidebar />
    </>
  )
}
