const express = require('express')
const app = express()
app.use(express.json())

const moviesRouter = require('./api/movies')
const usersRouter = require('./api/users')
const diceRouter = require('./api/games')

app.use('/users',usersRouter)
app.use('/movies',moviesRouter)
app.use('/games',diceRouter)


app.listen(3000,() => console.log('Example app listening on port 3000!'))
