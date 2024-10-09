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
      <main>{children}</main>
      <Aside />
    </>
  )
}
