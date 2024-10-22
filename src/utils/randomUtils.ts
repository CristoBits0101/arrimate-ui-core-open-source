export const randomUtils = {
  getRandomPage: () => Math.floor(Math.random() * 5) + 1,
  getRandomBoolean: () => Math.random() < 0.5,
  getRandomFollowers: () => Math.floor(Math.random() * (2000000 - 500 + 1)) + 500,
  getRandomTime: () => {
    const minutesInHour = 60;
    const minutesInDay = minutesInHour * 24;
    const minutesInWeek = minutesInDay * 7;
    const randomCategory = Math.random();
    let randomMinutes;
    if (randomCategory < 0.33) {
      randomMinutes = Math.floor(Math.random() * (23 * minutesInHour)) + minutesInHour;
      return `${Math.round(randomMinutes / minutesInHour)} hours`;
    } else if (randomCategory < 0.66) {
      randomMinutes = Math.floor(Math.random() * (6 * minutesInDay)) + minutesInDay;
      return `${Math.round(randomMinutes / minutesInDay)} days`;
    } else {
      randomMinutes = Math.floor(Math.random() * (3 * minutesInWeek)) + minutesInWeek;
      return `${Math.round(randomMinutes / minutesInWeek)} weeks`;
    }
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
