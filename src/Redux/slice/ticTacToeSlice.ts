import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'

export interface ReturnValue {
  board: string[]
  status: string
  winner: string | null
  players: string[]
  turn: string
  handleClick: (index: number) => void
  handleRestart: () => void
  handleStart: (players: string[]) => void
}

const initialState: ReturnValue = {
  board: [],
  status: 'new',
  winner: null,
  players: [],
  turn: 'X',
  handleClick: () => {},
  handleRestart: () => {},
  handleStart: () => {},
}

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setBoard: (state, action) => {
      state.board = action.payload
    },
    setWinner: (state, action) => {
      state.winner = action.payload
    },
    setPlayers: (state, action) => {
      state.players = action.payload
    },
    setStatus: (state, action) => {
      state.status = action.payload
    },
    setTurn: (state, action) => {
      state.turn = action.payload
    },
  },
})

export const { setBoard, setWinner, setPlayers, setTurn, setStatus } =
  gameSlice.actions
export const selectBoard = (state: RootState) => state.game
export default gameSlice.reducer
