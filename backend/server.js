const express = require("express")
const cors = require("cors")
const connectDB = require("./config/db")
require("dotenv").config()

const articleRoutes = require("./routes/article.routes")

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(cors())

connectDB()

app.use("/api/articles", articleRoutes)

app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`)
})

