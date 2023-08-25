import logo from '../../assets/undraw_adventure_4hum 1.svg'
import './index.css'

export const FlagQuestion = () => {
  return (
    <div className='flag-question answered'>
      <header>
        <h1>Country quiz</h1>
        <img src={logo} alt='imagen decorativa de la card de proguntas' />
      </header>
      <img src='https://flagcdn.com/za.svg' alt='imagen de la bandera' />
      <p>Which country does this flag belong to?</p>
      <ol>
        <li className='wrong'>Vietnam</li>
        <li className='rigth'>Republic of South Africa</li>
        <li>Sweden</li>
        <li>Austria</li>
      </ol>
      <button>Next</button>
    </div>
  )
}
