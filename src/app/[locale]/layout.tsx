import '@/styles/globals.css'
import Header from '@/layouts/header'
import Sidebar from '@/layouts/sidebar'
import { roboto } from '@/lib/fonts'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  const messages = await getMessages()
  return (
    <html lang={locale}>
      <head>{/* <link rel='icon' href='/favicon.ico' /> */}</head>
      <body className={roboto.className}>
        <NextIntlClientProvider messages={messages}>
          <Header />
          <Sidebar />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
