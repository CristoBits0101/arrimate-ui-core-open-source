import defaultUserImage from '@/modules/auth/assets/images/default_user_image.png'
import Image from 'next/image'
// import { auth } from '@/lib/auth'

export default function UserCard() {
  // const session = await auth()
  return (
    <article className='flex w-full h-12 gap-4'>
      <figure className='w-10 h-full flex items-center justify-center'>
        <Image
          src={defaultUserImage ?? 'Photo'}
          alt='User profile picture'
          width={40}
          height={40}
          className='aspect-square object-cover drop-shadow-sm rounded-full'
        />
      </figure>
      <section className='w-full h-full flex flex-col items-start justify-center'>
        {/* <p className=''>{session?.user?.email ?? ''}</p> */}
        <p>CristoBits0101</p>
      </section>
    </article>
  )
}
