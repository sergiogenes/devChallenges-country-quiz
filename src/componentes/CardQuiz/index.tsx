import logo from '../../assets/undraw_adventure_4hum 1.svg'
import './index.css'

export const CardQuiz = () => {
  return (
    <div className='card-container answered'>
      <header>
        <h1>Country quiz</h1>
        <img src={logo} alt='imagen decorativa de la card de proguntas' />
      </header>
      <p>Kuala Lumpur is the capital of</p>
      <ol>
        <li className='wrong'>Vietnam</li>
        <li className='rigth'>Malaysia</li>
        <li>Sweden</li>
        <li>Austria</li>
      </ol>
      <button>Next</button>
    </div>
  )
}
