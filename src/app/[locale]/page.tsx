import '@/styles/globals.css'
import { useTranslations } from 'next-intl'

export default function HomePage() {
  const t = useTranslations('SidebarLayout')
  return (
    <main>
      <h1>{t('trending')}</h1>
    </main>
  )
}
