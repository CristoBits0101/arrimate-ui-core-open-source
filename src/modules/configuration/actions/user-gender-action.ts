'use server'

import { db } from '@/lib/db'

export async function getGenders() {
  try {
    const genders = await db.genders.findMany({
      select: {
        id: true,
        name: true
      }
    })
    return genders.sort((a, b) => a.name.localeCompare(b.name))
  } catch (error) {
    console.error('Error fetching genders:', error)
    throw error
  } finally {
    await db.$disconnect()
  }
}
