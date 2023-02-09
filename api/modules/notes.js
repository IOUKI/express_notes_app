import pool from "./pool.js";

// get all note
export async function getNotes() {
    const [rows] = await pool.query('select * from notes')
    return rows 
}

// get a note
export async function getNote(id) {
    const [rows] = await pool.query(`
    select * 
    from notes
    where id = ?
    `, [id])
    return rows
}

// create new note
export async function createNote(title, content) {
    const result = await pool.query(`
    insert into notes (title, content)
    values (?, ?)
    `, [title, content])
    const id = result[0].insertId
    return getNote(id)
}

// delete a note
export async function deleteNote(id) {
    const result = await pool.query(`
    delete from notes where id = ?
    `, [id])
    return getNotes()
}