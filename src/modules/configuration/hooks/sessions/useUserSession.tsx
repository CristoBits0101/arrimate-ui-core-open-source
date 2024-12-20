'use client'

// Action: Get users information
import getUserSessionAction from '@/modules/configuration/actions/userSessionAction'

// React: Hooks
import { useState, useEffect } from 'react'

export const useUserSession = (): { session: any; hydrated: boolean } => {
  // Manage session data
  const [session, setSession] = useState<any>(null)

  // Manage hydrated
  const [hydrated, setHydrated] = useState(false)

  useEffect(() => {
    // Set hydrated for current session
    setHydrated(true)

    // Get user session
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
