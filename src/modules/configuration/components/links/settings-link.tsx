// Auth: User information
import { auth } from '@/modules/auth/lib/auth'

// Image: Default image
import defaultUserImage from '@/modules/auth/assets/images/default_user_image.png'

// next/image
import Image from 'next/image'

// next/link
import Link from 'next/link'

const SettingsLink = async () => {
  // Get user session
  const session = await auth()
  console.log(JSON.stringify(session))

  return (
    <li className='flex items-center justify-center w-fit h-fit hover:cursor-pointer'>
      <Link
        className='flex items-center justify-center h-fit w-fit dark:text-[#ecece]'
        href='/settings'
      >
        <Image
          className='w-7 h-7 object-contain aspect-square'
          src={defaultUserImage}
          alt='Settings'
        />
      </Link>
    </li>
  )
}

export default SettingsLink
