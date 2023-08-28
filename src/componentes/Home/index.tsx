import './index.css'
import worldMap from '../../assets/world-map.svg'
import type { GameState } from '../../App'

interface Props {
  handleNumberOfQuestios: (number: number) => void
  numberOfQuestions: number
  changeStateGame: (gameState: GameState) => void
}

export const Home: React.FC<Props> = ({
  numberOfQuestions,
  handleNumberOfQuestios,
  changeStateGame,
}) => {
  return (
    <div id='home'>
      <header>
        <h1>Country quiz</h1>
      </header>
      <h2>Welcome to Country Quiz!</h2>
      <img src={worldMap} alt='Imagen de un mapa mundial.' />
      <p>
        Answer 4, 8, or 12 geography-related questions. Test your knowledge of
        capitals and flags from countries around the world. Good luck!
      </p>
      <label htmlFor='numberOfQuestions'>
        <p>Questions: </p>
        <select
          name='numberOfQuestions'
          id='numberOfQuestions'
          value={numberOfQuestions}
          onChange={(e) => handleNumberOfQuestios(Number(e.target.value))}
        >
          <option value='4'>4</option>
          <option value='8'>8</option>
          <option value='12'>12</option>
        </select>
      </label>
      <button onClick={() => changeStateGame('gaming')}>Start Game</button>
    </div>
  )
}
