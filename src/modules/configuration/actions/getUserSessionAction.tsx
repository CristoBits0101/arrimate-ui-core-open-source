'use server'

// Auth: Función para obtener los datos de la sesión
import { auth } from '@/modules/auth/lib/auth'

export default async function getUserSessionAction() {
  try {
    // Intenta obtener los datos de la sesión
    const session = await auth()

    // Retorna los datos de la sesión si existen
    return session || null
  } catch (error) {
    console.error('Error obteniendo la sesión:', error)

    // En caso de error, retorna null
    return null
  }
}
