'use server'

// Auth: Import the sign-out function from the backend logic
import { signOut } from '@/modules/auth/lib/auth'

// Action: Handles the server-side logic for user sign-out
export default async function signOutAction() {
  try {
    // Attempt to sign out the user without redirecting
    await signOut({ redirect: false })

    // Return success status if the operation is completed
    return { success: true }
  } catch (error) {
    // Log any error that occurs during the sign-out process
    console.error('Error en el cierre de sesión: ', error)
    
    // Return failure status with an error message
    return { success: false, error: 'notifyDisconnection' }
  }
}
