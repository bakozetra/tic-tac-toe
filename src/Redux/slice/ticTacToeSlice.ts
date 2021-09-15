import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppThunk, RootState } from '../store'

export interface ReturnValue {
  board: string[]
  status: string
  winner: string | null
  players: string[]
  turn: string
}

const initialState: ReturnValue = {
  board: [],
  status: 'created',
  winner: null,
  players: [''],
  turn: 'X',
}

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
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
// export const handleClicks =
//   (state: RootState): AppThunk =>
//   (dispatch, getState) => {
//     if (state.game.status !== 'started') return
//     const winningPositions = [
//       [0, 1, 2],
//       [3, 4, 5],
//       [6, 7, 8],
//       [0, 3, 6],
//       [1, 4, 7],
//       [2, 5, 8],
//       [0, 4, 8],
//       [2, 4, 6],
//     ]
//     let winningPositionsIndex = 0
//     while (
//       winningPositionsIndex < winningPositions.length &&
//       !state.game.winner
//     ) {
//       const boardPositionsToCheck = winningPositions[winningPositionsIndex]
//       const boardValuesToCkeck = boardPositionsToCheck.map(
//         (index) => state.game.board[index]
//       )
//       const checkingValue = boardValuesToCkeck[0]
//       const isFinished = boardValuesToCkeck.every(
//         (value) => value === checkingValue && checkingValue
//       )
//       state.game.winner = !isFinished ? null : checkingValue
//       winningPositionsIndex++
//     }
//     if (state.game.winner) {
//       dispatch(
//         setWinner(
//           state.game.winner === 'X'
//             ? state.game.players[0]
//             : state.game.players[1]
//         )
//       )
//       dispatch(setStatus('finished'))
//       return
//     } else {
//       dispatch(
//         setStatus(
//           state.game.board.filter((value: any) => !value).length
//             ? 'started'
//             : 'finished'
//         )
//       )
//     }

export default gameSlice.reducer
