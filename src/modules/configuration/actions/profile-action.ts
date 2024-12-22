'use server'

// Prisma: To consult the database
// import { db } from '@/lib/db'

// Zod: To validate data in backend
import * as z from 'zod'
import { BackendProfileSchema } from '@/modules/configuration/schemas'

export default async function profileAction(
  values: z.infer<typeof BackendProfileSchema>
) {
  if (values) return { success: 'profileUpdated', error: '' }
}
