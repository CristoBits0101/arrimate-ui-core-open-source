'use server'

import { signOut } from '@/lib/auth'

export default async function signOutAction() {
  try {
    await signOut({ redirect: false })
    console.log('User signed out')
    return { success: true }
  } catch (error) {
    console.error('Error en el cierre de sesión:', error)
    return { success: false, error: 'Failed to sign out' }
  }
}
