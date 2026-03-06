import { useEffect, useState } from "react"
import { getQuestions, createQuestion, generateExam } from "./services/api"

function App() {

  const [question, setQuestion] = useState("")
  const [questions, setQuestions] = useState<any[]>([])
  const [exam, setExam] = useState<any[]>([])

  async function loadQuestions() {
    const data = await getQuestions()
    setQuestions(data)
  }

  async function addQuestion() {
    if (!question) return

    await createQuestion(question)

    setQuestion("")
    loadQuestions()
  }

  async function handleGenerateExam() {
    const data = await generateExam()
    setExam(data)
  }

  useEffect(() => {
    loadQuestions()
  }, [])

  return (
    <div className="min-h-screen bg-zinc-900 text-white flex flex-col items-center p-10">

      <h1 className="text-4xl font-bold mb-10">
        Gerador de Provas
      </h1>

      <div className="flex gap-4 mb-10">
        <input
          className="px-4 py-2 rounded bg-zinc-800 border border-zinc-700"
          placeholder="Digite uma pergunta"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />

        <button
          onClick={addQuestion}
          className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-500"
        >
          Adicionar
        </button>
      </div>

      <div className="w-full max-w-xl mb-10">
        <h2 className="text-xl mb-4">Perguntas cadastradas</h2>

        {questions.map((q, index) => (
          <div
            key={index}
            className="bg-zinc-800 p-4 rounded mb-3"
          >
            {q.title}
          </div>
        ))}
      </div>

      <button
        onClick={handleGenerateExam}
        className="bg-green-600 px-6 py-3 rounded hover:bg-green-500 mb-6"
      >
        Gerar Prova
      </button>

      <div className="w-full max-w-xl">
        {exam.map((q, index) => (
          <div
            key={index}
            className="bg-zinc-800 p-4 rounded mb-3"
          >
            {index + 1} - {q.title}
          </div>
        ))}
      </div>

    </div>
  )
}

export default App
