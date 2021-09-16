import React from 'react'
import styled from 'styled-components'
import { Header } from '../components/Header'
import Game from './Board'
import Finished from './finished'
import Start from './Start'
import tictactoe from './tictactoe'

const Container = styled.div`
  width: 100%;
  height: 100%;
`
const Wrapper = styled.div`
  width: 50%;
  margin: auto;
  display: flex;
  flex-direction: column;
`
const HomePage: any = () => {
  const game = tictactoe()
  return (
    <Container>
      <Header title={'Tic tac toe'} />
      <Wrapper>
        {game.status === 'new' && <Start handleStart={game.handleStart} />}
        {game.status === 'created' && <Start handleStart={game.handleStart} />}
        {game.status === 'started' && (
          <Game board={game.board} handleClick={game.handleClick} />
        )}
        {game.status === 'finished' && (
          <Finished name={game.winner} handleRestart={game.handleRestart} />
        )}
      </Wrapper>
    </Container>
  )
}
export default HomePage
