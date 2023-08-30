import { useSelector } from 'react-redux'
import './index.css'
import winner from '../../assets/undraw_winners_ao2o 2.svg'
import { RootState } from '../../state/store'
import { useDispatch } from 'react-redux'
import { setGameState } from '../../state/gameStateSlice'
import { resetQuestionState } from '../../state/numberOfQuestionSlice'

export const ResultCard = () => {
  const dispatch = useDispatch()
  const { correctAnswers, totalOfQuestions } = useSelector(
    (state: RootState) => state.numberOfQuestions,
  )

  const handleRestarGame = () => {
    dispatch(setGameState('begin'))
    dispatch(resetQuestionState())
  }

  return (
    <div id='result-card'>
      <header>
        <h1>Country quiz</h1>
      </header>
      <img src={winner} alt='imagen de una copa' />
      <h2>Results</h2>
      <p>
        You got <span> {` ${correctAnswers}/${totalOfQuestions} `} </span>{' '}
        correct answers
      </p>
      <button onClick={handleRestarGame}>Try again</button>
    </div>
  )
}
