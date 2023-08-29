import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { NumberOfQuestions, type QuestionsState } from '../types'

const initial_state: QuestionsState = {
  totalOfQuestions: 4,
  activeQuestion: 0,
}

const numberOfQuestionsSlice = createSlice({
  name: 'numberOfQuestions',
  initialState: initial_state,
  reducers: {
    setNumberOfQuestions: (
      state: QuestionsState,
      action: PayloadAction<NumberOfQuestions>,
    ): QuestionsState => {
      return { ...state, totalOfQuestions: action.payload }
    },
    setActiveQuestion: (
      state: QuestionsState,
      action: PayloadAction<number>,
    ): QuestionsState => {
      return { ...state, activeQuestion: action.payload }
    },
  },
})

export const { setNumberOfQuestions, setActiveQuestion } =
  numberOfQuestionsSlice.actions

export default numberOfQuestionsSlice.reducer
