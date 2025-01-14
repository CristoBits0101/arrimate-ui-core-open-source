// Merge class names using clsx and tailwind-merge
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

// Combine class names
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
