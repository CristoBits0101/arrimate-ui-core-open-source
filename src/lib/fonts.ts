import { Dancing_Script } from 'next/font/google'
import { Roboto } from 'next/font/google'

export const ds = Dancing_Script({
  display: 'swap',
  subsets: ['latin'],
  weight: ['400', '500', '700']
})

export const roboto = Roboto({
  display: 'swap',
  subsets: ['latin'],
  weight: ['300', '400', '500', '700']
})
