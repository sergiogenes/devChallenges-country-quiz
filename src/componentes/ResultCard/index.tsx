import './index.css'
import winner from '../../assets/undraw_winners_ao2o 2.svg'

export const ResultCard = () => {
  return (
    <div id='result-card'>
      <header>
        <h1>Country quiz</h1>
      </header>
      <img src={winner} alt='imagen de una copa' />
      <h2>Results</h2>
      <p>
        You got <span>4</span> correct answers
      </p>
      <button>Try again</button>
    </div>
  )
}
