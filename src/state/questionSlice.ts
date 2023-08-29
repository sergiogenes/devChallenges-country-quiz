import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { Question } from '../types'

const initial_state = {}

const questionSlice = createSlice({
  name: 'question',
  initialState: initial_state as Question,
  reducers: {
    setQuestion: (
      _state: Question,
      action: PayloadAction<Question>,
    ): Question => {
      return action.payload
    },
  },
})

export const { setQuestion } = questionSlice.actions

export default questionSlice.reducer
