import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { NumberOfQuestions, type QuestionsState } from '../types'

const initial_state: QuestionsState = {
  totalOfQuestions: 4,
  activeQuestion: 0,
  correctAnswers: 0,
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
    addCorrectAnswers: (
      state: QuestionsState,
      _action: PayloadAction,
    ): QuestionsState => {
      return { ...state, correctAnswers: state.correctAnswers + 1 }
    },
  },
})

export const { setNumberOfQuestions, setActiveQuestion, addCorrectAnswers } =
  numberOfQuestionsSlice.actions

export default numberOfQuestionsSlice.reducer
