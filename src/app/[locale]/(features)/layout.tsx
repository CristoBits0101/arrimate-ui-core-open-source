import Header from '@/layouts/header'
import Sidebar from '@/layouts/left-sidebar'

export default function FeaturesLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      <Sidebar />
      <main>{children}</main>
    </>
  )
}
