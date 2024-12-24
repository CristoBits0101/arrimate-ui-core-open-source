// Custom context
import { PostProvider  } from '@/modules/feeds/contexts/PostContext'

// fonts
import { figtree } from '@/lib/fonts'

// next
import type { Metadata } from 'next'

// next-auth
import { SessionProvider } from 'next-auth/react'

// next-intl
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'

// styles
import '@/styles/globals.css'

// Metadata
export const metadata: Metadata = {
  title: 'Arrímate',
  description: '',
  icons: {
    icon: '/arrimate.ico'
  }
}

export default async function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  // Example: messages/en.json/objects
  const messages = await getMessages()
  return (
    // HTML
    <html lang={locale} data-mode=''>
      {/* Body */}
      <body
        className={`${figtree.className} grid sm:place-content-center sm:grid-cols-[100%] md:grid-cols-[20rem_1fr_20rem] min-h-screen max-h-fit h-auto min-w-80 w-full bg-[#ffffff] dark:bg-[#1B1A1F] text-[#1d0f0f] dark:text-[#ececed] text-base`}
      >
        {/* Providers */}
        <SessionProvider>
          <NextIntlClientProvider messages={messages}>
            <PostProvider>
              {/* Pages */}
              {children}
            </PostProvider>
          </NextIntlClientProvider>
        </SessionProvider>
      </body>
    </html>
  )
}
