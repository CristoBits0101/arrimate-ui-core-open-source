// import { auth } from '@/lib/auth'

export default function UserCard() {
    // const session = await auth()
    return (
        <article className='flex w-full h-10 gap-4 text-sm'>
          <figure className='w-10 h-full flex items-center justify-center'>
            Photo
          </figure>
          <section className='w-full h-full flex flex-col items-start justify-center'>
            {/* <p className=''>{session?.user?.email ?? ''}</p> */}
            <p>Email</p>
          </section>
        </article>
      )
}
