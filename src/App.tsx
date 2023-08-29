import { useEffect, useState } from 'react'
import './App.css'
import { CardQuiz } from './componentes/CardQuiz'
import { FlagQuestion } from './componentes/FlagQuestion'
import { ResultCard } from './componentes/ResultCard'
import { Footer } from './componentes/Footer'
import { Home } from './componentes/Home'
import { useSelector } from 'react-redux'
import { RootState } from './state/store'
import type { Country, CountryFromAPI } from './types'
import { generateQuestion } from './services/questions'
import { useDispatch } from 'react-redux'
import { setQuestion } from './state/questionSlice'

function App(): JSX.Element {
  const [countries, SetCountries] = useState<Array<Country>>([])
  const gameState = useSelector((store: RootState) => store.gameState)
  const activeQuestion = useSelector(
    (store: RootState) => store.numberOfQuestions.activeQuestion,
  )
  const question = useSelector((store: RootState) => store.question)
  const dispatch = useDispatch()

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all?fields=name,capital,flags')
      .then(async (res) => res.json())
      .then((data: CountryFromAPI[]) => {
        const allCountries = data.map((country) => {
          const id = self.crypto.randomUUID()
          return { ...country, id, name: country.name.common }
        })
        SetCountries(allCountries)
      })
  }, [])

  useEffect(() => {
    if (countries.length) {
      const newQuestion = generateQuestion(countries)
      console.log('newQuestions  ==>>', newQuestion)
      dispatch(setQuestion(newQuestion))
    }
  }, [activeQuestion, countries, activeQuestion])

  const id = self.crypto.randomUUID()
  console.log('id ==>>', id)
  return (
    <div className='app-container'>
      {gameState === 'begin' ? (
        <Home />
      ) : gameState === 'gaming' && question.type === 'capital' ? (
        <CardQuiz question={question} />
      ) : gameState === 'gaming' && question.type === 'flag' ? (
        <FlagQuestion question={question} />
      ) : (
        <ResultCard />
      )}
      <Footer />
    </div>
  )
}

export default App
