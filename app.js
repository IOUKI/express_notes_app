import express from 'express'
import morgan from 'morgan'
import cors from 'cors'

const app = express()

// cors
app.use(
    cors({
        origin: '*',
        methods: ['GET', 'POST', 'PATCH', 'DELETE']
    })
)

// app use
app.use(morgan('dev'))
app.use(express.json())

// routes
import notesRoutes from './api/routes/notes.js'
app.use('/notes', notesRoutes)

// route exception handling
app.use((req, res, next) => {
    const error = new Error('Not found')
    error.status = 404
    next(error)
})
app.use((error, req, res, next) => {
    res.status(error.status || 500)
    res.json({
        error: {
            message: error.message
        }
    })
})

export default app