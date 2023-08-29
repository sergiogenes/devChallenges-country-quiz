import { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import logo from '../../assets/undraw_adventure_4hum 1.svg'
import type { Question } from '../../types'
import './index.css'
import { RootState } from '../../state/store'
import {
  addCorrectAnswers,
  setActiveQuestion,
} from '../../state/numberOfQuestionSlice'
import { setGameState } from '../../state/gameStateSlice'

type Props = {
  question: Question
}

export const FlagQuestion: React.FC<Props> = ({ question }) => {
  const [selected, setSelected] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)
  const flag = question.options.find((option) => option.id === question.win)
    ?.flags.svg
  const dispatch = useDispatch()

  const handleClick = (e: React.MouseEvent<HTMLLIElement>): void => {
    if (!selected) {
      const target = e.target as HTMLLIElement
      const idSelected = target.id
      cardRef.current?.classList.add('answered')
      if (idSelected === question.win) {
        target.classList.add('rigth')
        dispatch(addCorrectAnswers())
      } else {
        target.classList.add('wrong')
        const rigth = document.getElementById(
          `${question.win}`,
        ) as HTMLLIElement
        rigth.classList.add('rigth')
      }
      setSelected(true)
    }
  }

  const activeQuestion = useSelector(
    (state: RootState) => state.numberOfQuestions.activeQuestion,
  )
  const totalOfQuestions = useSelector(
    (state: RootState) => state.numberOfQuestions.totalOfQuestions,
  )
  const handleNextQuestion = (
    _e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ): void => {
    console.log('active Question', activeQuestion)
    if (activeQuestion + 1 < totalOfQuestions) {
      dispatch(setActiveQuestion(activeQuestion + 1))
      setSelected(false)
    } else {
      dispatch(setGameState('end'))
    }
  }

  return (
    <div id='flag-question' ref={cardRef}>
      <header>
        <h1>Country quiz</h1>
        <img src={logo} alt='imagen decorativa de la card de preguntas' />
      </header>
      <img src={flag} alt='imagen de la bandera' />
      <p>Which country does this flag belong to?</p>
      <ol>
        {question.options.map((country) => (
          <li key={`${country.id}`} id={`${country.id}`} onClick={handleClick}>
            {country.name}
          </li>
        ))}
      </ol>
      <button onClick={handleNextQuestion}>Next</button>
    </div>
  )
}
