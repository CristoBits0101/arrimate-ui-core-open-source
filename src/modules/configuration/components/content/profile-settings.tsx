import UserArticle from '@/modules/configuration/components/articles/user-article'
import ProfileForm from '@/modules/configuration/components/forms/profile-form'

export default function ProfileSettings() {
  return (
    <div className='w-full h-full flex flex-col items-center'>
      <UserArticle />
      <ProfileForm />
    </div>
  )
}
