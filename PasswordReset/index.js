import express from 'express'
import 'dotenv/config.js'
import Routes from './src/routes/index.js'
import cors from 'cors'

const PORT = process.env.PORT
const app = express()
app.use(cors())
app.use(express.json())
app.use(Routes)

app.listen(PORT, ()=>console.log(`Server is listening to port ${PORT}`))

