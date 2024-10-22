import ArrimateFollowCard from '@/components/marketing/user/arrimate-follow-card'

// Función para generar valores booleanos aleatorios
const getRandomBoolean = () => Math.random() < 0.5

// Función para generar un número aleatorio de seguidores
const getRandomFollowers = () =>
  Math.floor(Math.random() * (2000000 - 500 + 1)) + 500

export default function HomePanel() {
  return (
    <section className='w-full h-full flex flex-col justify-between items-center gap-3 overflow-hidden overflow-y-auto no-scrollbar'>
      {/* Asegurar que al menos dos usuarios cumplen todas las condiciones */}
      <ArrimateFollowCard
        avatar='/images/profiles/aspect-ratio-16-9/image1.jpg'
        nickname='Liang Wei'
        description='Shaping tomorrow with cutting-edge AI and robotics.'
        trending={true}
        followers={1000000}
        reliable={true}
        verified={true}
      />
      <ArrimateFollowCard
        avatar='/images/profiles/aspect-ratio-16-9/image2.jpg'
        nickname='Valeria Castillo'
        description='Crafting unforgettable brand experiences worldwide.'
        trending={true}
        followers={1000000}
        reliable={true}
        verified={true}
      />

      {/* Los demás usuarios tienen valores aleatorios */}
      <ArrimateFollowCard
        avatar='/images/profiles/aspect-ratio-16-9/image3.jpg'
        nickname='Ethan Collins'
        description='Accelerating growth with innovative marketing strategies.'
        trending={getRandomBoolean()}
        followers={getRandomFollowers()}
        reliable={getRandomBoolean()}
        verified={getRandomBoolean()}
      />
      <ArrimateFollowCard
        avatar='/images/profiles/aspect-ratio-16-9/image4.jpg'
        nickname='Aarav Sharma'
        description='Building the future, one line of code at a time.'
        trending={getRandomBoolean()}
        followers={getRandomFollowers()}
        reliable={getRandomBoolean()}
        verified={getRandomBoolean()}
      />
      <ArrimateFollowCard
        avatar='/images/profiles/aspect-ratio-16-9/image5.jpg'
        nickname='Zara Al-Faraj'
        description='Transforming data into impactful business decisions.'
        trending={getRandomBoolean()}
        followers={getRandomFollowers()}
        reliable={getRandomBoolean()}
        verified={getRandomBoolean()}
      />
      <ArrimateFollowCard
        avatar='/images/profiles/aspect-ratio-16-9/image6.jpg'
        nickname='Élodie Laurent'
        description='Leading projects to deliver sustainable, efficient results.'
        trending={getRandomBoolean()}
        followers={getRandomFollowers()}
        reliable={getRandomBoolean()}
        verified={getRandomBoolean()}
      />
    </section>
  )
}
