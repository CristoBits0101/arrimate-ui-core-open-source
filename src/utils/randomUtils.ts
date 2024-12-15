// Random test data
export const randomUtils = {
  // Likes
  getRandomLikes: () => Math.floor(Math.random() * (100000 - 1 + 1)) + 10,
  // Interactions
  getRandomInteractions: () => Math.floor(Math.random() * (5000 - 1 + 1)) + 1,
  // Page number
  getRandomPage: () => Math.floor(Math.random() * 5) + 1,
  // True or False
  getRandomBoolean: () => Math.random() < 0.5,
  // Followers
  getRandomFollowers: () =>
    Math.floor(Math.random() * (2000000 - 500 + 1)) + 500,
  // Time
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
  // Capital
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
  // Professions
  getRandomProfession: () => {
    const Professions = [
      'Frontend Developer',
      'Social Media Expert',
      'Pro Gamer',
      'Travel Blogger',
      'E-commerce Specialist',
      'Live Streamer',
      'Data Analyst',
      'Fashion Influencer',
      'IT Support',
      'Content Creator',
      'Product Designer',
      'Digital Nomad',
      'Digital Artist',
      'Mobile Developer',
      'Gaming YouTuber',
      'Full-Stack Developer',
      'Photographer',
      'UX Researcher',
      'Freelance Writer',
      'Cybersecurity Specialist',
      'Travel Photographer',
      'Virtual Host',
      'VR Developer',
      'Music Streamer',
      'SEO Consultant',
      'AI Researcher',
      'Outdoor Enthusiast',
      'Digital Marketer',
      'Voice Actor',
      'Nonprofit Advocate',
      'Frontend Engineer',
      'Esports Host',
      'SaaS Sales',
      'Videographer',
      'Podcast Host',
      'Data Scientist',
      'Game Developer',
      'Wellness Coach',
      'Blockchain Developer',
      'Lifestyle YouTuber',
      'Backend Developer',
      'Fitness Influencer',
      'Financial Analyst'
    ]
    return Professions[Math.floor(Math.random() * Professions.length)]
  },
  // Interests
  getRandomInterests: () => {
    const Interests = [
      'React & Next.js',
      'Strategy & Engagement',
      'FPS & Strategy',
      'Adventure & Culture',
      'SEO & Ads',
      'Gaming & Lifestyle',
      'Python & SQL',
      'Style & Wellness',
      'Network & Security',
      'Vlogs & Lifestyle',
      'Figma & UX',
      'Marketing Anywhere',
      'Streams & Animation',
      'Swift & Kotlin',
      'Reviews & Playthroughs',
      'MERN Stack',
      'Nature & Landscapes',
      'Testing & Insights',
      'Copy & Storytelling',
      'Defense & Protection',
      'Local & Culture',
      'Events & Networking',
      'Unity & Worlds',
      'Covers & Originals',
      'Strategy & Growth',
      'Machine Learning',
      'Hiking & Skills',
      'PPC & Email',
      'Characters & Narration',
      'Outreach & Change',
      'JavaScript & Responsive',
      'Commentary & Analysis',
      'B2B & Solutions',
      'Adventure & Travel',
      'Topics & Trends',
      'AI & Models',
      'C++ & Worlds',
      'Fitness & Mindfulness',
      'DeFi & Smart Contracts',
      'DIY & Ideas',
      'APIs & Architecture',
      'Workouts & Motivation',
      'Trends & Forecasting'
    ]
    return Interests[Math.floor(Math.random() * Interests.length)]
  },
  // Slogans
  getRandomSlogan: () => {
    const slogans = [
      'Crafting Sleek Applications',
      'Growing Brand Presence',
      'Turning Skill into Victories',
      'Exploring the World',
      'Boosting Product Reach',
      'Connecting Live with Fans',
      'Turning Data into Insights',
      'Inspiring Daily Confidence',
      'Keeping Systems Running',
      'Sharing Moments with You',
      'Crafting User-Friendly Apps',
      'Growing Brands Worldwide',
      'Creativity on Every Screen',
      'Building Mobile Solutions',
      'Honest Game Insights',
      'Ideas to Reality',
      'Capturing the World',
      'Improving User Experiences',
      'Words that Connect',
      'Keeping Data Safe',
      'Capturing Unique Places',
      'Unforgettable Online Events',
      'Creating Immersive Spaces',
      'Live Music Experiences',
      'Driving Engagement with Precision',
      'Innovation for Tomorrow',
      'Embracing Nature’s Challenges',
      'Boosting Targeted Campaigns',
      'Stories Brought to Life',
      'Meaningful Community Work',
      'Interactive Designs',
      'Insightful Live Coverage',
      'Client-Centered Growth',
      'Capturing Scenic Thrill',
      'Fresh Perspectives Shared',
      'Data for Actionable Growth',
      'Immersive Gaming Experiences',
      'Helping Others Thrive',
      'Future of Finance',
      'Practical Inspiration',
      'Robust Infrastructures',
      'Inspiring Strength',
      'Data-Driven Strategy'
    ]
    return slogans[Math.floor(Math.random() * slogans.length)]
  },
  // Hashtag
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
      'colombia'
    ]
    return popularHashtags[Math.floor(Math.random() * popularHashtags.length)]
  },
  // Descriptions: Max 64
  getRandomImageDescription: () => {
    const intros = [
      'Check out this amazing capture, a beautiful moment to share.',
      'Here is a snapshot of inspiration, bringing a fresh view.',
      'A moment worth sharing, capturing the beauty around us.',
      'A visual story, telling a tale through color and light.',
      'Another great memory, frozen in time for you to revisit.',
      'Bringing you a glimpse of beauty, a piece of the world.',
      'Captured just for you, a scene resonating with wonder.',
      'A scene that speaks for itself, vivid and full of life.',
      'A perfect moment to share, filled with charm and color.',
      'A picture worth a thousand words, ready to spark ideas.',
      'Enjoy this view, a snapshot capturing the moment’s essence.',
      'Here is a unique scene that tells its story beautifully.',
      'A glimpse of something special, framed just for you.',
      'Take a moment to enjoy this stunning, timeless view.',
      'An image capturing the elegance of simplicity.',
      'Moments like this deserve to be shared and cherished.',
      'A reminder of how beautiful the world truly can be.',
      'Here’s a capture filled with unique charm and elegance.',
      'A stunning scene capturing the spirit of a perfect day.',
      'Here’s a beautiful moment that speaks volumes of life.',
      'An inspiring view, perfectly caught in this snapshot.',
      'A memory preserved in a single, unforgettable shot.',
      'A photo reflecting the beauty in everyday simplicity.',
      'Here’s something special to brighten and uplift you.',
      'Captured in its glory, this image is sure to inspire.',
      'A scene inviting you to pause and deeply appreciate.',
      'The beauty of this moment feels completely timeless.',
      'A photo capturing the essence of nature’s artistry.',
      'An image reminding us of the wonders in the world.',
      'Here’s a peaceful scene bringing calm to your day.',
      'Moments like this are what make life truly beautiful.',
      'Here’s a vibrant scene lifting your spirits today.',
      'A shot that captures the magic of this fleeting moment.',
      'Here’s a beautiful view, full of color and natural life.',
      'A perfect example of nature’s quiet, stunning beauty.',
      'A scene that makes you stop to appreciate it fully.',
      'Here’s a serene moment perfectly captured in time.',
      'A beautiful perspective on a wonderfully familiar scene.',
      'A glimpse of nature’s incredible and delicate artistry.',
      'A simple yet stunning view to brighten your spirit.',
      'A moment of peace forever captured in one frame.',
      'This image captures the elegance of the everyday.',
      'A scene full of color and warmth, created just for you.',
      'A special moment, meant for you to see and share.',
      'Here’s a view that inspires joy and uplifts the soul.',
      'Captured with care, this image tells its own story.',
      'Here’s a lovely view to bring happiness to your day.',
      'A scene reminding us to savor the smallest things.',
      'Here’s a vibrant capture, filled with life and color.',
      'A picture capturing the magic of the world’s wonders.',
      'Here’s a calming image bringing tranquility to life.'
    ]
    // Generate an array with 5 hashtags
    const hashtags = Array.from(
      { length: 5 },
      () => `#${randomUtils.getRandomHashtag()}`
    )
    // Return an object with the description and hashtags array
    return {
      description: intros[Math.floor(Math.random() * intros.length)],
      hashtags: hashtags
    }
  },
  // Countries
  getRandomCountryCode: () => {
    const countryCodes = [
      'US',
      'CN',
      'RU',
      'DE',
      'FR',
      'GB',
      'JP',
      'IN',
      'BR',
      'CA',
      'AU',
      'IT',
      'ES',
      'KR',
      'MX',
      'ID',
      'SA',
      'AR',
      'EG',
      'ZA'
    ]
    const randomIndex = Math.floor(Math.random() * countryCodes.length)
    return countryCodes[randomIndex]
  }
}
