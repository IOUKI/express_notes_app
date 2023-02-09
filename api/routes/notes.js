import express from 'express'
import * as note_db_func from '../modules/notes.js'
const router = express.Router()

// get all notes
router.get('/', async (req, res, next) => {
    try {
        const notes = await note_db_func.getNotes()
        res.status(200).json(notes)
    } catch (e) {
        next(e)
    }
})

// create a note
router.post('/', async (req, res, next) => {
    try {
        const { title, content } = req.body
        const note = await note_db_func.createNote(title, content)
        res.status(201).send(note)
    } catch (e) {
        next(e)
    }
})

// get a note by note id
router.get('/:noteId', async (req, res, next) => {
    try {
        const id = req.params.noteId
        const note = await note_db_func.getNote(id)
        res.status(200).send(note)
    } catch (e) {
        next(e)
    }
})

// delete a note by note id
router.delete('/:noteId', async (req, res, next) => {
    try {
        const id = req.params.noteId
        const notes = await note_db_func.deleteNote(id)
        res.status(200).send(notes)
    } catch (e) {
        next(e)
    }
})

export default router 