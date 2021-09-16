import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../Redux/hooks'
import { ReturnValue, selectBoard } from '../Redux/slice/ticTacToeSlice'
import {
  setBoard,
  setStatus,
  setTurn,
  setWinner,
  setPlayers,
} from '../Redux/slice/ticTacToeSlice'

export default (): ReturnValue => {
  const dispatch = useAppDispatch()
  const { board, status, turn, winner, players } = useAppSelector(selectBoard)
  let winningPositionsIndex = 0
  useEffect(() => {
    if (status !== 'started') return
    const winningPositions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]

    let winner: string | null = null
    while (winningPositionsIndex < winningPositions.length && !winner) {
      const boardPositionsToCheck = winningPositions[winningPositionsIndex]
      const boardValuesToCkeck = boardPositionsToCheck.map(
        (index) => board[index]
      )
      const checkingValue = boardValuesToCkeck[0]
      const isFinished = boardValuesToCkeck.every(
        (value) => value === checkingValue && checkingValue
      )
      winner = !isFinished ? null : checkingValue
      winningPositionsIndex++
    }
    if (winner) {
      dispatch(setWinner(winner === 'X' ? players[0] : players[1]))
      dispatch(setStatus('finished'))
      return
    }
    dispatch(
      setStatus(board.filter((value) => !value).length ? 'started' : 'finished')
    )
  }, [board, players, status])
  const handleStart = (players: string[]) => {
    dispatch(setPlayers(players))
    dispatch(setTurn('X'))
    dispatch(setStatus('started'))
  }

  const handleClick = (index: number): void => {
    if (index < 0 || index > 9 || winner) return
    const newBoard = [...board]
    newBoard.splice(index, 1, turn)
    dispatch(setBoard(newBoard))
    const newTurn = turn === 'X' ? 'O' : 'X'
    dispatch(setTurn(newTurn))
  }

  const handleRestart = () => {
    dispatch(setBoard(Array(9).fill('')))
    dispatch(setWinner(''))
    dispatch(setStatus('created'))
  }

  return {
    board,
    status,
    winner,
    players,
    turn,
    handleClick,
    handleRestart,
    handleStart,
  }
}
