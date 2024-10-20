import Image from 'next/image'
import { useState } from 'react'

export default function ArrimateFollowCard() {
  // Indicates if the content is trending based on interactions
  const [isTrending, setIsTrending] = useState(false)
  // Indicates if the user has more than 1 million followers
  const [isPopular, setIsPopular] = useState(false)
  // Indicates if the user's identity is verified
  const [isVerify, setIsVerify] = useState(false)
  // Indicates if the user is trusted for transactions and business deals
  const [isTrusted, setIsTrusted] = useState(false)

  //
  const handleToggleFollowing = ({ user }) => {
    setIsFollowing(!isFollowing)
  }
  return (
    <article className='w-fit h-fit flex bg-red-300'>
      <header className='w-fit h-fit'>
        <Image src='' alt='User avatar' />
      </header>
      <div className=''>
        <section className=''>Información del usuario</section>
        <section className=''>Descripción adicional o estadísticas</section>
      </div>
      <footer className=''>
        <button className=''>Seguir</button>
      </footer>
    </article>
  )
}
