/**
 * Font Configuration with Google Fonts via Next.js
 *
 * This code configures and imports two custom Google Fonts using the `next/font/google` utility
 * The fonts are set up with specific styles and options for use in a Next.js application
 */

// Import the `Dancing_Script` and `Figtree` fonts from Google Fonts via Next.js utilities
import { Dancing_Script } from 'next/font/google'
import { Figtree } from 'next/font/google'

// Configure the `Dancing_Script` font
// - `display: 'swap'`: Ensures text remains visible while the font is loading
// - `subsets: ['latin']`: Specifies the character set to include for the font
// - `weight: ['400', '500', '700']`: Includes regular, medium, and bold font weights
export const ds = Dancing_Script({
  display: 'swap',
  subsets: ['latin'],
  weight: ['400', '500', '700']
})

// Configure the `Figtree` font with similar options
// - This font can serve as a more standard, versatile option for text in the application
export const standard = Figtree({
  display: 'swap',
  subsets: ['latin'],
  weight: ['400', '500', '700']
})
