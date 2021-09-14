import React, { useState } from 'react'
import { Player } from '../../components/Players'
import Ellipse from '../../svg/Ellipse.svg'
import Cross from '../../svg/cross.svg'
import { Header } from '../../components/Header'
import { Time } from '../../components/Time'
import { Button } from '../../components/button'
import styled from 'styled-components'
import { useAppSelector, useAppDispatch } from '../../app/hooks'
import { selectCount } from './counterSlice'
import styles from './Counter.module.css'

export function Counter() {
  const count = useAppSelector(selectCount)
  const dispatch = useAppDispatch()
  const [incrementAmount, setIncrementAmount] = useState('2')

  const incrementValue = Number(incrementAmount) || 0

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

  return (
    <Container>
      <Header title='Tic tac toe' />
      <Wrapper>
        <Player
          label={''}
          placeholder={'leave empty to use AI or enter player name'}
          inputType={''}
          inputId={'id'}
          inputValue={''}
          onChange={undefined}
          url={Ellipse}
          alt={''}
        />
        <Player
          label={''}
          placeholder={'leave empty to use AI or enter player name'}
          inputType={''}
          inputId={'id'}
          inputValue={''}
          onChange={undefined}
          url={Cross}
          alt={''}
        />
        <Time time={0} secondTime={'turn Time limit in seconds:'} />
        <Button label={'Start'} data-testid={'start'} onClick={() => {}} />
      </Wrapper>
    </Container>
  )
}
