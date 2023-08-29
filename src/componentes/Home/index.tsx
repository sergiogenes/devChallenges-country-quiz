import './index.css'
import worldMap from '../../assets/world-map.svg'
import { type NumberOfQuestions } from '../../types'
import { useSelector } from 'react-redux'
import { RootState } from '../../state/store'
import { useDispatch } from 'react-redux'
import { setNumberOfQuestions } from '../../state/numberOfQuestionSlice'
import { setGameState } from '../../state/gameStateSlice'

export const Home: React.FC = () => {
  const numberOfQuestions = useSelector(
    (state: RootState) => state.numberOfQuestions.totalOfQuestions,
  )
  const dispatch = useDispatch()

  const handleNumberOfQuestios = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ): void => {
    dispatch(
      setNumberOfQuestions(Number(event.target.value) as NumberOfQuestions),
    )
  }

  const changeStateGame = () => {
    dispatch(setGameState('gaming'))
  }

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
          onChange={handleNumberOfQuestios}
        >
          <option value='4'>4</option>
          <option value='8'>8</option>
          <option value='12'>12</option>
        </select>
      </label>
      <button onClick={changeStateGame}>Start Game</button>
    </div>
  )
}
