import { Router } from "express"
import { createQuestion, getQuestions, generateExam } from "../controllers/question.controller"

export const questionRoutes = Router()

questionRoutes.post("/", createQuestion)

questionRoutes.get("/", getQuestions)

questionRoutes.get("/generate", generateExam)
