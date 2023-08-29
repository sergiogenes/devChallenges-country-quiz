import { configureStore } from '@reduxjs/toolkit'
import gameStateReducer from './gameStateSlice'
import numberOfQuestionReducer from './numberOfQuestionSlice'
import questionReducer from './questionSlice'

const store = configureStore({
  reducer: {
    gameState: gameStateReducer,
    numberOfQuestions: numberOfQuestionReducer,
    question: questionReducer,
  },
})

export default store

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
