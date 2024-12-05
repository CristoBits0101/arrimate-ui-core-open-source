/**
 * Utility Function for Class Name Merging
 *
 * This function combines class names efficiently using `clsx` and `tailwind-merge`
 * It ensures that conditional class names are handled and conflicting Tailwind classes are merged properly
 */

// Import `clsx` for conditional class name handling
// - `clsx` allows combining class names conditionally, filtering out falsy values, and simplifying dynamic class name logic
import { clsx, type ClassValue } from 'clsx'

// Import `twMerge` for handling Tailwind CSS class conflicts
// - `twMerge` intelligently merges conflicting Tailwind class names, ensuring only the most specific or relevant ones are kept
import { twMerge } from 'tailwind-merge'

/**
 * Combines and merges class names.
 *
 * @param {ClassValue[]} inputs - A list of class names or objects with conditional logic
 * @returns {string} - A single string of merged class names
 *
 * This function:
 * - Uses `clsx` to process and filter the class names
 * - Passes the result to `twMerge` to resolve any conflicting Tailwind classes
 * - Ensures clean, efficient class name generation for use in components
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
