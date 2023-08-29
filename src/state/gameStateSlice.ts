import { createSlice, PayloadAction } from '@reduxjs/toolkit'
4
import { type GameState } from '../types'

const initial_state: GameState = 'begin'

export const gameStateSlice = createSlice({
  name: 'gameState',
  initialState: initial_state as GameState,
  reducers: {
    setGameState: (
      _state: GameState,
      action: PayloadAction<GameState>,
    ): GameState => {
      return action.payload
    },
  },
})

export const { setGameState } = gameStateSlice.actions

export default gameStateSlice.reducer
