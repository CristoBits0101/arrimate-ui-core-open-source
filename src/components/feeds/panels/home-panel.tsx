import ArrimateFollowCard from '@/components/marketing/user/arrimate-follow-card'

export default function HomePanel() {
  return (
    <section className='w-full h-full flex flex-col justify-between items-center gap-2'>
      <ArrimateFollowCard
        avatar='/images/profiles/aspect-ratio-16-9/image1.jpg'
        nickname='Liang Wei'
        description='AI and robotics innovator leading the future of automation.'
        trending={true}
        followers={1000000}
        reliable={true}
        verified={true}
      />
      <ArrimateFollowCard
        avatar='/images/profiles/aspect-ratio-16-9/image1.jpg'
        nickname='Valeria Castillo'
        description='Creative director shaping global brand experiences.'
        trending={true}
        followers={1000000}
        reliable={true}
        verified={true}
      />
      <ArrimateFollowCard
        avatar='/images/profiles/aspect-ratio-16-9/image1.jpg'
        nickname='Ethan Collins'
        description='Marketing strategist driving growth through digital campaigns.'
        trending={true}
        followers={1000000}
        reliable={true}
        verified={true}
      />
      <ArrimateFollowCard
        avatar='/images/profiles/aspect-ratio-16-9/image1.jpg'
        nickname='Aarav Sharma'
        description='Full-stack developer building scalable software solutions.'
        trending={true}
        followers={1000000}
        reliable={true}
        verified={true}
      />
      <ArrimateFollowCard
        avatar='/images/profiles/aspect-ratio-16-9/image1.jpg'
        nickname='Zara Al-Faraj'
        description='Data scientist turning data into business insights.'
        trending={true}
        followers={1000000}
        reliable={true}
        verified={true}
      />
      <ArrimateFollowCard
        avatar='/images/profiles/aspect-ratio-16-9/image1.jpg'
        nickname='Élodie Laurent'
        description='Project manager delivering efficient, sustainable solutions.'
        trending={true}
        followers={1000000}
        reliable={true}
        verified={true}
      />
    </section>
  )
}
