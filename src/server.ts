import express from 'express';
const app: express.Application = express();

import { usersRouter, moviesRouter, gamesRouter } from './api/routers';

//Added CORS middleware
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.use('/users', usersRouter);
app.use('/movies', moviesRouter);
app.use('/games', gamesRouter);

const port = process.env.PORT || 3000;
/*
he web process must listen for HTTP traffic on $PORT,
which is set by Heroku. EXPOSE in Dockerfile is not respected,
but can be used for local testing. Only HTTP requests are
supported.*/

app.listen(port, () => console.log(`Example app listening on port ${port}`));
