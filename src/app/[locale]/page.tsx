import '@/styles/globals.css'
import Header from '@/layouts/header'
import Sidebar from '@/layouts/sidebar'
import { useTranslations } from 'next-intl'

export default function HomePage() {
  const t = useTranslations('SidebarLayout')
  return (
    <>
      <Header />
      <Sidebar />
      <main>
        <h1>{t('trending')}</h1>
      </main>
    </>
  )
}
