// Imports the default user image asset
import defaultUserImage from '@/assets/images/default/default_user_image.png'

// Imports the Next.js Image component
import Image from 'next/image'

// Placeholder for importing the auth library
// import { auth } from '@/lib/auth'

// Defines the UserCard component
export default function UserCard() {
  // Placeholder for session logic
  // const session = await auth()
  return (
    <article className='flex w-full h-14 gap-4'>
      {/* Renders the user profile image */}
      <figure className='w-14 h-full flex items-center justify-center'>
        <Image
          src={defaultUserImage ?? 'Photo'}
          alt='User profile picture'
          width={56}
          height={56}
          className='aspect-square object-cover drop-shadow-sm rounded-full'
        />
      </figure>
      {/* Renders user information */}
      <section className='w-full h-full flex flex-col items-start justify-center'>
        {/* Placeholder for displaying user email */}
        {/* <p className=''>{session?.user?.email ?? ''}</p> */}
        <p>CristoBits0101</p>
      </section>
    </article>
  )
}
