import { useState, useMemo, FormEvent } from 'react'
import { Button } from '../components/button'
import { Player } from '../components/Players'
import { Time } from '../components/Time'
import Cross from '../svg/cross.svg'
import Ellipse from '../svg/Ellipse.svg'
interface Props {
  handleStart(players: string[]): void
}
const Start = (props: Props) => {
  const { handleStart } = props
  const [players, setPlayers] = useState(['', ''])
  const handleInput = (event: FormEvent<HTMLInputElement>, index: number) => {
    const newPlayers = [...players]
    newPlayers.splice(index, 1, event.currentTarget.value)
    setPlayers(newPlayers)
  }
  const canStart = useMemo(
    () => players.every((player) => player && player.length > 0),
    [players]
  )
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!canStart) return
    handleStart(players)
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <Player
            placeholder={'leave empty to use AI or enter player name'}
            inputType={'text'}
            inputValue={players[0]}
            onChange={(e) => handleInput(e, 0)}
            url={Cross}
            alt={'crose-image'}
          />
        </div>
        <div>
          <Player
            placeholder={'leave empty to use AI or enter player name'}
            inputType={'text'}
            inputValue={players[1]}
            onChange={(e) => handleInput(e, 1)}
            url={Ellipse}
            alt={'ellipse-image'}
          />
        </div>
        <Time time={0} secondTime={'turn Time limit in seconds:'} />
        <Button label={'Start'} disable={!canStart} />
      </form>
    </div>
  )
}
export default Start
