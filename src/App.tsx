import { useEffect, useState } from 'react'
import './App.css'
import { CardQuiz } from './componentes/CardQuiz'

interface Country {
  id: String
  flags: Flag
  capital: Array<String>
  name: String
}
type CountryWithoutName = Omit<Country, 'name'>

interface CountryFromAPI extends CountryWithoutName {
  name: {
    official: String
  }
}

interface Flag {
  png: String
  svg: String
  alt: String
}

function App() {
  const [countries, SetCountries] = useState<Country[]>([])

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all?fields=name,capital,flags')
      .then((res) => res.json())
      .then((data: CountryFromAPI[]) => {
        const allCountries = data.map((country) => {
          const id = self.crypto.randomUUID()
          return { ...country, id, name: country.name.official }
        })
        SetCountries(allCountries)
      })
  }, [])

  console.log('Countries ==>>', countries)

  let id = self.crypto.randomUUID()
  console.log('id ==>>', id)
  return (
    <div className='app-container'>
      <CardQuiz />
    </div>
  )
}

export default App
