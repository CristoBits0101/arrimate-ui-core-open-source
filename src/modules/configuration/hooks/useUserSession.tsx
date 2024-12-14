'use client'

// Action: Get users information
import getUserSessionAction from '@/modules/configuration/actions/getUserSessionAction'

// React: Hooks
import { useState, useEffect } from 'react'

export const useUserSession = (): { session: any; hydrated: boolean } => {
  // Estado para los datos de la sesión
  const [session, setSession] = useState<any>(null)

  // Estado para manejar la hidratación
  const [hydrated, setHydrated] = useState(false)

  useEffect(() => {
    // Marca que el cliente está hidratado
    setHydrated(true)

    // Obtén los datos de la sesión desde el backend
    getUserSessionAction()
      .then((data) => {
        setSession(data)
      })
      .catch((error) => {
        console.error('Error fetching user session:', error)
      })
  }, [])

  return { session, hydrated }
}
