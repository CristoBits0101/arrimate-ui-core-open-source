'use client'

import { signOutAction } from '@/modules/auth/actions/sign-out'

export function SignOutButton() {
  return (
    <form action={signOutAction}>
      <button type='submit'>Sign Out</button>
    </form>
  )
}
