export const randomUtils = {
  getRandomLikes: () => Math.floor(Math.random() * (100000 - 1 + 1)) + 10,
  getRandomInteractions: () => Math.floor(Math.random() * (5000 - 1 + 1)) + 1,
  getRandomPage: () => Math.floor(Math.random() * 5) + 1,
  getRandomBoolean: () => Math.random() < 0.5,
  getRandomFollowers: () =>
    Math.floor(Math.random() * (2000000 - 500 + 1)) + 500,
  getRandomTime: () => {
    const minutesInHour = 60
    const minutesInDay = minutesInHour * 24
    const minutesInWeek = minutesInDay * 7
    const randomCategory = Math.random()
    let randomMinutes
    if (randomCategory < 0.33) {
      randomMinutes =
        Math.floor(Math.random() * (23 * minutesInHour)) + minutesInHour
      return `${Math.round(randomMinutes / minutesInHour)} hours`
    } else if (randomCategory < 0.66) {
      randomMinutes =
        Math.floor(Math.random() * (6 * minutesInDay)) + minutesInDay
      return `${Math.round(randomMinutes / minutesInDay)} days`
    } else {
      randomMinutes =
        Math.floor(Math.random() * (3 * minutesInWeek)) + minutesInWeek
      return `${Math.round(randomMinutes / minutesInWeek)} weeks`
    }
  },
  getRandomCapital: () => {
    const capitals = [
      'Washington D.C',
      'Beijing',
      'Moscow',
      'Berlin',
      'Paris',
      'London',
      'Tokyo',
      'New Delhi',
      'Brasilia',
      'Ottawa',
      'Canberra',
      'Rome',
      'Madrid',
      'Seoul',
      'Mexico City',
      'Jakarta',
      'Riyadh',
      'Buenos Aires',
      'Cairo',
      'Pretoria'
    ]
    const randomIndex = Math.floor(Math.random() * capitals.length)
    return capitals[randomIndex]
  },
  getRandomDescription: () => {
    const descriptions = [
      'E-commerce Visionary | Redefining Online Selling with Strategic Brilliance',
      'Digital Story Architect | Building Immersive Narratives that Captivate Audiences',
      'Event Maestro | Crafting Unforgettable Experiences for Global Connections',
      'Video Sorcerer | Transforming Moments into Viral Masterpieces',
      'Live Engagement Specialist | Amplifying Brands in Real-Time Interactions',
      'Marketplace Innovator | Turning Clicks into Conversions with Authentic Connection',
      'Content Virtuoso | Capturing Attention with Scroll-Stopping Creativity',
      'Influential Connector | Blending Authenticity with Impactful Reach',
      'Community Catalyst | Igniting Engagement and Fostering True Connections',
      'Customer Journey Curator | Delivering Remarkable Experiences that Resonate',
      'Trend Leader | Setting the Pulse for What’s Next in Commerce and Connection',
      'Creative Commerce Pro | Where Strategy Meets Passion for Unforgettable Sales',
      'Social Commerce Engineer | Building Bridges Between People and Products',
      'Audience Whisperer | Uncovering Insights that Drive Lasting Loyalty',
      'Authenticity Advocate | Building Brands People Trust and Love',
      'Impactful Storyteller | Crafting Narratives that Sell and Inspire',
      'Network Navigator | Expanding Reach Through Strategic Alliances',
      'Passion-Driven Seller | Elevating Brands with Every Interaction',
      'Insightful Content Designer | Shaping Visuals that Speak Volumes',
      'Conversion Alchemist | Turning Ideas into Impactful Purchases'
    ]    
    const randomIndex = Math.floor(Math.random() * descriptions.length)
    return descriptions[randomIndex]
  },
  getRandomHashtag: () => {
    const popularHashtags = [
      'love',
      'instagood',
      'fashion',
      'photooftheday',
      'beautiful',
      'art',
      'photography',
      'happy',
      'picoftheday',
      'follow',
      'nature',
      'like4like',
      'travel',
      'instagram',
      'style',
      'repost',
      'summer',
      'instadaily',
      'selfie',
      'me',
      'friends',
      'fitness',
      'food',
      'fun',
      'beauty',
      'life',
      'amazing',
      'cool',
      'smile',
      'family',
      'music',
      'ootd',
      'followme',
      'bestoftheday',
      'sunset',
      'makeup',
      'lifestyle',
      'sky',
      'beach',
      'f4f',
      'photo',
      'ootn',
      'sun',
      'model',
      'workout',
      'wedding',
      'dog',
      'girl',
      'travelgram',
      'cute',
      'amor',
      'felicidad',
      'moda',
      'fotodeldia',
      'arte',
      'fotografia',
      'paisaje',
      'like',
      'familia',
      'viaje',
      'belleza',
      'salud',
      'fiesta',
      'musica',
      'amistad',
      'sonrisa',
      'autoestima',
      'naturaleza',
      'perro',
      'gato',
      'instamoment',
      'ciudad',
      'cultura',
      'deporte',
      'comida',
      'vida',
      'trabajo',
      'frases',
      'motivacion',
      'éxito',
      'celebracion',
      'verano',
      'playa',
      'sol',
      'cielo',
      'inspiracion',
      'emprendedores',
      'musicos',
      'cine',
      'tecnologia',
      'aventura',
      'familiafeliz',
      'ocio',
      'sueños',
      'historias',
      'fotografiaurbana',
      'amorpropio',
      'instachile',
      'mexico',
      'colombia',
    ]
    return popularHashtags[Math.floor(Math.random() * popularHashtags.length)]
  }
}
