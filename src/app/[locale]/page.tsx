import '@/styles/globals.css'
import Header from '@/layouts/header'
import Sidebar from '@/layouts/sidebar'
// import { useTranslations } from 'next-intl'

export default function HomePage() {
  // const t = useTranslations('SidebarLayout')
  return (
    <>
      <Header />
      <Sidebar />
      <main>
        <h2>Novedades</h2>
        <h2>Tendencias</h2>
        <h2>Recomendaciones</h2>
        <h2>Suscripciones</h2>
        <h2>Ranking</h2>
      </main>
    </>
  )
}
