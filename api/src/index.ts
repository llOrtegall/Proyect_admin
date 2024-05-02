import { RouterMetas } from './routes/metas.routes'
import morgan from 'morgan'
import express from 'express'
import cors from 'cors'
import 'dotenv/config'

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(morgan('dev'))
app.use(cors())

app.use('/api', RouterMetas)

app.listen(port, () => {
  console.log(`Server running on: http://localhost:${port}`)
})
