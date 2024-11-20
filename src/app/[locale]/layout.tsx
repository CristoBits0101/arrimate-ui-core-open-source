import '@/styles/globals.css'
import { standard } from '@/lib/fonts'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { SessionProvider } from 'next-auth/react'

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
        className={`${standard.className} grid sm:place-content-center sm:grid-cols-[100%] md:grid-cols-[20rem_1fr_20rem] min-h-screen max-h-fit h-auto min-w-80 w-full bg-[#ffffff] dark:bg-[#1D0F0F] text-[#1d0f0f] dark:text-[#ffffff] text-base`}
      >
        <SessionProvider>
          <NextIntlClientProvider messages={messages}>
            {children}
          </NextIntlClientProvider>
        </SessionProvider>
      </body>
    </html>
  )
}
