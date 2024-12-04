import { useState } from "react"
import { Radio } from "../radio/radio"

export type question = {
  alternativas: {A: string, B: string, C: string, D: string}
  enunciado: string
  numero: number
  resposta_correta: string
}
type exercisesProps = {
  data: {
    questions: Array<question>,
    title: string
  }
}

export function Exercises({data: {questions, title}}: exercisesProps) {
  const [answers, setAnswers] = useState<Array<string>>([])
  const [showAnswers, setShowAnswers] = useState(false)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setShowAnswers(true)
  }

  return (
    <div className="flex flex-col gap-10 items-center">
      <h1>{title}</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-10">
        {questions.map((question, questionIndex) => {
          return (
            <div key={questionIndex} className="flex flex-col gap-3">
              <h2>{question.enunciado}</h2>
              <ul className="flex flex-col gap-1">
                {Object.keys(question.alternativas).map((key, alternativeIndex) => {
                  const isCorrect = question.resposta_correta === answers[questionIndex]
                  const findAnswer = question.resposta_correta === key

                  const getBgColor = () => {
                    if (answers[questionIndex] === key && isCorrect) {
                        return 'bg-green-300'
                    } else if (answers[questionIndex] === key && !isCorrect) {
                        return 'bg-red-300'
                    } else if (findAnswer) {
                        return 'bg-green-200'
                    }
                    return ''
                  }

                  return (
                    <li key={alternativeIndex} className={`${showAnswers ? getBgColor() : ''} flex rounded-md gap-1 px-2`}>
                      <input
                        disabled={showAnswers}
                        type="radio"
                        name={`question-${question.numero}`}
                        onChange={(e)=> {
                          const newAnswers = answers
                          newAnswers[questionIndex] = e.currentTarget.value

                          setAnswers(newAnswers)
                        }}
                        value={key}
                        id={questionIndex + key}
                      />
                      <label htmlFor={questionIndex + key}>{Object.values(question.alternativas)[alternativeIndex]}</label>
                    </li>
                  )
                })}
              </ul>
            </div>
          )
        })}
        <button hidden={showAnswers} className="bg-green-400 py-2 px-4 font-bold text-lg w-fit self-center rounded-lg" type="submit">Enviar</button>

      </form>
    </div>
  )
}