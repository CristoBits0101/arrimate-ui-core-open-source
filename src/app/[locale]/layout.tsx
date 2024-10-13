import '@/styles/globals.css'
import { op } from '@/lib/fonts'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'

export default async function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  const messages = await getMessages()
  return (
    <html lang={locale}>
      <head>{/* <link rel='icon' href='/favicon.ico' /> */}</head>
      <body className={`${op.className} dark:bg-[#1D0F0F] dark:text-[#ffffff]`}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
