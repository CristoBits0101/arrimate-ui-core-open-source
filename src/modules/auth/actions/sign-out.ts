'use server'

import { signOut } from '@/lib/auth'

export async function signOutAction() {
  await signOut()
  console.log('User signed out')
  window.location.href = '/sign-in'
}
