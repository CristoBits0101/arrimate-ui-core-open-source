import '@/styles/globals.css'
import { os } from '@/lib/fonts'
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
      <body
        className={`${os.className} min-w-80 w-full grid grid-cols-[20rem_1fr_20rem] bg-[#ffffff] dark:bg-[#1D0F0F] text-[#1d0f0f] dark:text-[#ffffff]`}
      >
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
