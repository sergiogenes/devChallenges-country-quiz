import { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  addCorrectAnswers,
  setActiveQuestion,
} from '../../state/numberOfQuestionSlice'
import logo from '../../assets/undraw_adventure_4hum 1.svg'
import { Question } from '../../types'
import './index.css'
import { RootState } from '../../state/store'
import { setGameState } from '../../state/gameStateSlice'

type Props = {
  question: Question
}

export const CardQuiz: React.FC<Props> = ({ question }) => {
  const [selected, setSelected] = useState(false)
  const capital = question.options.find((option) => option.id === question.win)
    ?.capital
  const dispatch = useDispatch()
  const cardRef = useRef<HTMLDivElement>(null)

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
    <div id='card-container' ref={cardRef}>
      <header>
        <h1>Country quiz</h1>
        <img src={logo} alt='imagen decorativa de la card de proguntas' />
      </header>
      <p>{`${capital} is the capital of`} </p>
      <ol>
        {question.options.map((option) => (
          <li
            key={`${option.id}`}
            id={`${option.id}`}
            onClick={handleClick}
          >{`${option.name}`}</li>
        ))}
      </ol>
      <button onClick={handleNextQuestion}>Next</button>
    </div>
  )
}
