export const randomUtils = {
  getRandomLikes: () => Math.floor(Math.random() * (100000 - 1 + 1)) + 10,
  getRandomMessages: () => Math.floor(Math.random() * (5000 - 1 + 1)) + 1,
  getRandomPage: () => Math.floor(Math.random() * 5) + 1,
  getRandomBoolean: () => Math.random() < 0.5,
  getRandomFollowers: () => Math.floor(Math.random() * (2000000 - 500 + 1)) + 500,
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
      'Unstoppable Energy with Focused Drive',
      'Curiosity that Sparks Discovery',
      'Driven by Success Step by Step',
      'Creative Intuition for Brilliant Solutions',
      'Optimism that Unlocks New Opportunities',
      'Confident Decisions with Clarity of Purpose',
      'Agile Adaptability in Every Situation',
      'Thoughtful Collaboration that Makes an Impact',
      'Proactive Actions that Build Trust and Results',
      'Continuous Learning for Constant Growth',
      'Strategic Thinker with Future Vision',
      'Empathy that Connects and Transforms',
      'Focused on Results with Laser Precision',
      'Calm Under Pressure with Controlled Action',
      'Innovative at Heart Always Ahead',
      'Efficient Organization for Higher Productivity',
      'Motivated Leadership that Inspires Others',
      'Passion that Drives Every Action',
      'Detail-Oriented for Guaranteed Success',
      'Kind Collaboration with Deep Impact'
    ]
    const randomIndex = Math.floor(Math.random() * descriptions.length)
    return descriptions[randomIndex]
  },
  getRandomHalloweenWord: () => {
    const halloweenWords = [
      'Pumpkin',
      'Ghost',
      'Witch',
      'Zombie',
      'Vampire',
      'Werewolf',
      'Haunted House',
      'Skeleton',
      'Cemetery',
      'Cauldron',
      'Candy Corn',
      'Trick or Treat',
      'Black Cat',
      'Full Moon',
      'Bat',
      'Graveyard',
      'Spooky',
      'Ghoul',
      'Spider Web',
      'Jack-o\'-lantern'
    ]
    const randomIndex = Math.floor(Math.random() * halloweenWords.length)
    return halloweenWords[randomIndex]
  }
}
