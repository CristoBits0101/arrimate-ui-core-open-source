import { auth } from '@/lib/auth'
import SignOutButton from '@/modules/auth/components/buttons/sign-out/sign-out-button'

const SettingsPage = async () => {
  const session = await auth()

  return (
    <div>
      <h2>{JSON.stringify(session)}</h2>
      <SignOutButton />
    </div>
  )
}

export default SettingsPage
