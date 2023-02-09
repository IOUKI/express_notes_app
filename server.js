import http from 'http'
import app from './app.js'

const port = process.env.LISTEN_PORT || 3000

const server = http.createServer(app)

server.listen(port)
