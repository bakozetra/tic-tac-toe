import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../Redux/hooks'
import { selectBoard } from '../Redux/slice/ticTacToeSlice'
import {
  setBoard,
  setStatus,
  setTurn,
  setWinner,
  setPlayers,
} from '../Redux/slice/ticTacToeSlice'
import Start from './Start'
import Finished from './finished'
import Game from './Board'
import { Header } from '../components/Header'
import { Player } from '../components/Players'
import styled from 'styled-components'

export const Name = () => {
  const dispatch = useAppDispatch()
  const { board, status, turn, winner, players } = useAppSelector(selectBoard)

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
    let winningPositionsIndex = 0
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
    setStatus(board.filter((value) => !value).length ? 'started' : 'finished')
  }, [board, players, status])

  const handleClick = (index: number): void => {
    if (index < 0 || index > 9 || winner) return
    const newBoard = [...board]
    newBoard.splice(index, 1, turn)
    dispatch(setBoard(newBoard))
    const newTurn = turn === 'X' ? 'O' : 'X'
    dispatch(setTurn(newTurn))
  }
  const handleStart = (players: string[]) => {
    dispatch(setPlayers(players))
    dispatch(setTurn('X'))
    dispatch(setStatus('started'))
  }
  const handleRestart = () => {
    dispatch(setBoard(Array(9).fill('')))
    dispatch(setWinner(''))
    dispatch(setStatus('created'))
  }

  console.log(status)

  return (
    <Container>
      <Header title={'Tic tac toe'} />
      <Wrapper>
        {status === 'created' && (
          <Start handleStart={handleStart} players={players} />
        )}
        {status === 'finished' && (
          <Finished name={winner} handleRestart={handleRestart} />
        )}
        {status === 'started' && (
          <Game board={board} handleClick={handleClick} />
        )}
      </Wrapper>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  height: 100%;
`
const Wrapper = styled.div`
  width: 70%;
  margin: auto;
  display: flex;
  flex-direction: column;
`
