import { auth } from '@/lib/auth'

const SettingsPage = async () => {
  const session = await auth()

  return <h2>{JSON.stringify(session)}</h2>
}

export default SettingsPage
