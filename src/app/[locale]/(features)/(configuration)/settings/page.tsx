import { auth } from '@/lib/auth'
import SignOutForm from '@/modules/auth/components/forms/sign-out-form'

const SettingsPage = async () => {
  const session = await auth()

  return (
    <div>
      <h2>{JSON.stringify(session)}</h2>
      <SignOutForm />
    </div>
  )
}

export default SettingsPage
