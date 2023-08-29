import { type Country, type Question } from '../types'

export const generateQuestion = (countries: Array<Country>): Question => {
  const randomType = Math.round(Math.random()) === 0 ? 'capital' : 'flag'
  const length = countries.length
  let randomIndexs: Array<number> = []

  while (randomIndexs.length < 4) {
    const index = randomNumber(length - 1)
    if (!randomIndexs.includes(index)) {
      randomIndexs.push(index)
    }
  }
  console.log('random Indexs', randomIndexs)
  const contry1 = countries[randomIndexs[0]]
  const contry2 = countries[randomIndexs[1]]
  const contry3 = countries[randomIndexs[2]]
  const contry4 = countries[randomIndexs[3]]
  const win = randomNumber(3)
  return {
    type: randomType,
    options: [contry1, contry2, contry3, contry4],
    win,
  }
}

const randomNumber = (numMax: number): number => {
  return Math.round(Math.random() * numMax)
}