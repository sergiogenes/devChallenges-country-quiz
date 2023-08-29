export type NumberOfQuestions = 4 | 8 | 12

export interface QuestionsState {
  totalOfQuestions: NumberOfQuestions
  activeQuestion: number
}

export interface Question {
  type: 'capital' | 'flag'
  options: Array<Country>
  win: String
}

export interface Country {
  id: String
  flags: Flag
  capital: String[]
  name: String
}

type CountryWithoutName = Omit<Country, 'name'>

export interface CountryFromAPI extends CountryWithoutName {
  name: {
    official: string
  }
}

export interface Flag {
  png: string
  svg: string
  alt: string
}

export type GameState = 'begin' | 'gaming' | 'end'
