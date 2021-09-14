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
import { addSecondUser } from '../Human-verse-human/secondUser'
import { addfirstUser, setFirstUser } from '../Human-verse-human/firsthuman'
import { useSelector } from 'react-redux'
import { getSubmitUser } from '../Human-verse-human/submitSlice'

export function Counter() {
  const count = useAppSelector(selectCount)
  const dispatch = useAppDispatch()
  const [input, setInput] = useState('')
  const [incrementAmount, setIncrementAmount] = useState('2')

  const incrementValue = Number(incrementAmount) || 0
  // const user = useSelector(selectUser)
  let firstUser = useSelector(addfirstUser)
  let secondUser = useSelector(addSecondUser)
  let submit = useSelector(getSubmitUser)

  const handleChangefinstUser = (e: any) => {
    console.log(e.target.value)
    dispatch(setFirstUser(e.target.value))
  }
  const handleChangesecondUser = (e: any) => {
    dispatch(setFirstUser(e.target.value))
  }
  const handleSubmit = (e: any) => {
    e.preventDefault()
    const names = [firstUser, secondUser]
    console.log(names)
  }
  console.log(handleSubmit)

  const Container = styled.div`
    width: 100%;
    height: 100%;
  `
  const Wrapper = styled.form`
    width: 70%;
    margin: auto;
    display: flex;
    flex-direction: column;
  `
  return (
    <Container>
      <Header title='Tic tac toe' />
      <Wrapper onSubmit={handleSubmit}>
        <Player
          label={firstUser}
          placeholder={'leave empty to use AI or enter player name'}
          inputType={''}
          inputId={'id'}
          inputValue={firstUser}
          onChange={handleChangefinstUser}
          url={Ellipse}
          alt={''}
        />
        <Player
          label={secondUser}
          placeholder={'leave empty to use AI or enter player name'}
          inputType={''}
          inputId={'id'}
          inputValue={secondUser}
          onChange={handleChangesecondUser}
          url={Cross}
          alt={''}
        />
        <Time time={0} secondTime={'turn Time limit in seconds:'} />
        <Button label={'Start'} onClick={() => {}} />
      </Wrapper>
    </Container>
  )
}
