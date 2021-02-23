import express from 'express'

const server = express()

server.get('/', (request, response) => {
  return response.json({ ok: true })
})

server.listen(3333, () => console.log("Server is running!"))
