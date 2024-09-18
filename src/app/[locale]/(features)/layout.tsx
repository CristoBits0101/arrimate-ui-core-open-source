import Header from '@/layouts/header'
import Sidebar from '@/layouts/sidebar'

export default function features({
  children,
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  return (
    <>
      <Header />
      <Sidebar />
      <main>{children}</main>
    </>
  )
}
