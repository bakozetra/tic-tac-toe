import Square from '../components/Square/square'
interface Props {
  board: string[]
  handleClick(index: number): void
}
const Game = (props: Props) => {
  const { board, handleClick } = props

  const styles = {
    board: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      width: '300px',
      gridGap: '4px',
      background: 'black',
      margin: 'auto',
    },
  }
  return (
    <div style={styles.board}>
      {board.map((value, index) => {
        return (
          <Square
            key={index}
            value={value}
            index={index}
            handleClick={handleClick}
          />
        )
      })}
    </div>
  )
}
export default Game
