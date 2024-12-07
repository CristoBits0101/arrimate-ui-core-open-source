// Utility for merging class names with clsx and tailwind-merge
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

// Combine and merge class names
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
