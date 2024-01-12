import express from 'express'
import morgan from 'morgan'
import { authRouter, phrasesRouter, userRouter, routineRouter } from './router/index.js'
import cors from 'cors'

const app = express()

// config json
app.use(express.json())

// config cors
app.use(cors())

app.use(morgan('dev'))

app.use('/auth', authRouter)
app.use('/phrase', phrasesRouter)
app.use('/user', userRouter)
app.use('/routine', routineRouter)

export default app
