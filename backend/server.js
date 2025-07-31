const express = require("express")
const cors = require("cors")
const connectDB = require("./config/db")
require("dotenv").config()

const articleRoutes = require("./routes/article.routes")

const app = express()
const PORT = process.env.PORT || 3000

// Configuration CORS plus permissive
app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:5174', 'http://localhost:3000'],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}))

// Augmenter la limite de taille pour les requêtes
app.use(express.json({ limit: '10mb' }))
app.use(express.urlencoded({ limit: '10mb', extended: true }))

connectDB()

app.use("/api/articles", articleRoutes)

app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`)
})

