import { useSelector } from 'react-redux'
import './index.css'
import winner from '../../assets/undraw_winners_ao2o 2.svg'
import { RootState } from '../../state/store'

export const ResultCard = () => {
  const correctAnswers = useSelector(
    (state: RootState) => state.numberOfQuestions.correctAnswers,
  )

  return (
    <div id='result-card'>
      <header>
        <h1>Country quiz</h1>
      </header>
      <img src={winner} alt='imagen de una copa' />
      <h2>Results</h2>
      <p>
        You got <span>{correctAnswers}</span> correct answers
      </p>
      <button>Try again</button>
    </div>
  )
}
