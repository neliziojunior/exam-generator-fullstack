import express from "express"
import cors from "cors"
import { questionRoutes } from "./routes/question.routes"

const app = express()

app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
  res.send("API de Gerador de Provas 🚀")
})

app.use("/questions", questionRoutes)

const PORT = process.env.PORT || 3333

app.listen(PORT, () => {
  console.log(`🔥 Server rodando na porta ${PORT}`)
})
