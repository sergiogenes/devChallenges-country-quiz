import './index.css'
import worldMap from '../../assets/world-map.svg'

export const Home = () => {
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
        <select name='numberOfQuestions' id='numberOfQuestions'>
          <option value='4'>4</option>
          <option value='8'>8</option>
          <option value='12'>12</option>
        </select>
      </label>
      <button>Start Game</button>
    </div>
  )
}
