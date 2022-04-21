import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import connectDB from './config/database.js'

// routing
import userRoutes from './routes/userRoutes.js'

dotenv.config()

connectDB()

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  res.send('API is running....')
})

app.use('/api/users', userRoutes)

const PORT = process.env.PORT

app.listen(
  PORT,
  console.log(
    `server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
)
