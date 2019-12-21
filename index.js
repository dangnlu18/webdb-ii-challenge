const express = require('express')
const db = require('./utils/db')
const welcomeRouter = require('./routers/welcome')
const carsRouter = require('./routers/cars')


const server = express()
server.use(express.json())

server.use('/', welcomeRouter)
server.use('/api/cars', carsRouter)

const host = process.env.HOST || "0.0.0.0"
const port = process.env.PORT || 4000

server.listen(port, ()=>{
    console.log(`\n*** Server listening on ${host}:${port}`)
})