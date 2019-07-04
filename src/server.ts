import express from 'express'
const app: express.Application = express();

import { usersRouter, moviesRouter, gamesRouter } from './api/routers'

app.use('/users',usersRouter)
app.use('/movies',moviesRouter)
app.use('/games',gamesRouter)


app.listen(3000,() => console.log('Example app listening on port 3000'))
