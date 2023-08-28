import { useEffect, useState } from 'react'
import './App.css'
import { CardQuiz } from './componentes/CardQuiz'
import { FlagQuestion } from './componentes/FlagQuestion'
import { ResultCard } from './componentes/ResultCard'
import { Footer } from './componentes/Footer'
import { Home } from './componentes/Home'

interface Country {
  id: String
  flags: Flag
  capital: String[]
  name: String
}

type CountryWithoutName = Omit<Country, 'name'>

interface CountryFromAPI extends CountryWithoutName {
  name: {
    official: string
  }
}

interface Flag {
  png: string
  svg: string
  alt: string
}

function App(): JSX.Element {
  const [countries, SetCountries] = useState<Array<Country>>([])

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all?fields=name,capital,flags')
      .then(async (res) => res.json())
      .then((data: CountryFromAPI[]) => {
        const allCountries = data.map((country) => {
          const id = self.crypto.randomUUID()
          return { ...country, id, name: country.name.official }
        })
        SetCountries(allCountries)
      })
  }, [])

  console.log('Countries ==>>', countries)

  const id = self.crypto.randomUUID()
  console.log('id ==>>', id)
  return (
    <div className='app-container'>
      <Home />
      <Footer />
    </div>
  )
}

export default App
