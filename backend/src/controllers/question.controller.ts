import { Request, Response } from "express";
import { questions } from "../database/questions";
import { randomUUID } from "crypto";
import { Question } from "../types/question"


export const createQuestion = (req: Request, res: Response) => {

  const { title, subject, difficulty, alternatives, correctAnswer } = req.body

  if (!title || !subject) {
    return res.status(400).json({
      error: "Dados incompletos"
    })
  }

  const newQuestion: Question = {
    id: randomUUID(),
    title,
    subject,
    difficulty,
    alternatives,
    correctAnswer
  }

  questions.push(newQuestion)

  return res.status(201).json(newQuestion)
}

export const getQuestions = (req: Request, res: Response) => {

  return res.json(questions)

}

export const generateExam = (req: Request, res: Response) => {

  const shuffled = [...questions].sort(() => 0.5 - Math.random())

  const exam = shuffled.slice(0, 5)

  return res.json(exam)

}
