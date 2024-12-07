import { auth } from '@/modules/auth/lib/auth'

// Settings page
const SettingsPage = async () => {
  const session = await auth()
  return <div>{<h2>{JSON.stringify(session)}</h2>}</div>
}

export default SettingsPage
