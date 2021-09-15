import React, { useState, useMemo, FormEvent } from 'react'
import { Button } from '../components/button'
import { Player } from '../components/Players'
import { Time } from '../components/Time'
import { useAppDispatch, useAppSelector } from '../Redux/hooks'
import { ReturnValue, selectBoard } from '../Redux/slice/ticTacToeSlice'
import { setPlayers } from '../Redux/slice/ticTacToeSlice'
import Cross from '../svg/cross.svg'
import Ellipse from '../svg/Ellipse.svg'
interface Props {
  handleStart(players: string[]): void
  players: string[]
}
const Start = (props: Props) => {
  const dispatch = useAppDispatch()
  const { handleStart, players } = props
  const handleInput = (event: FormEvent<HTMLInputElement>, index: number) => {
    const newPlayers = [...players]
    newPlayers.splice(index, 1, event.currentTarget.value)
    dispatch(setPlayers(newPlayers))
  }
  const canStart = useMemo(
    () => players.every((player) => player && player.length > 0),
    [players]
  )
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!canStart) return
    handleStart && handleStart(players)
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Player
          label={players[0]}
          placeholder={'leave empty to use AI or enter player name'}
          inputType={'text'}
          inputId={players[0]}
          inputValue={players[0]}
          onChange={(e) => handleInput(e, 0)}
          url={Cross}
          alt={'crose-image'}
        />
        <Player
          label={players[1]}
          placeholder={'leave empty to use AI or enter player name'}
          inputType={'text'}
          inputId={players[1]}
          inputValue={players[1]}
          onChange={(e) => handleInput(e, 1)}
          url={Ellipse}
          alt={'ellipse-image'}
        />

        <Time time={0} secondTime={'turn Time limit in seconds:'} />
        <Button label={'Start'} onClick={() => {}} disable={!canStart} />
      </form>
    </div>
  )
}
export default Start
