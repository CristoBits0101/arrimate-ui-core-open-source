export const randomUtils = {
  getRandomPage: () => Math.floor(Math.random() * 5) + 1,
  getRandomBoolean: () => Math.random() < 0.5,
  getRandomFollowers: () => Math.floor(Math.random() * (2000000 - 500 + 1)) + 500,
  getRandomTime: () => {
    const maxMinutesInMonth = 60 * 24 * 30
    const randomMinutes = Math.floor(Math.random() * (maxMinutesInMonth + 1))
    const minutesInHour = 60
    const minutesInDay = 60 * 24
    const minutesInWeek = minutesInDay * 7
    if (randomMinutes >= minutesInWeek)
      return `${Math.round(randomMinutes / minutesInWeek)} weeks`
    else if (randomMinutes >= minutesInDay)
      return `${Math.round(randomMinutes / minutesInDay)} days`
    else if (randomMinutes >= minutesInHour)
      return `${Math.round(randomMinutes / minutesInHour)} hours`
    else return `${randomMinutes} minutes`
  },
  getImportantCapital: () => {
    const capitals = [
      'Washington D.C.',
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
  }
}
