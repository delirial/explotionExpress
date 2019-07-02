const express = require('express')
const dice = require('./../../dice')
const router = express.Router()

const movies = [{id:0,title:'Titanic',year:1949}]

router.get('/movies', (req, res ) => {
    res.json(movies)
})


router.get('/movies/:id', (req,res ) => {
    const userId = req.params.id
    console.log(userId)
    console.log(movies[0].id)
    const user = movies.find(user => user.id == userId )
    console.log(user)
    res.json(user)
})


router.get('/dice/:n',(req,res) => {
    const number = dice.dice(req.params.n)
    const result = { result : number }
    res.json(result)
})

router.get('/dice/:n/:emoticons', (req, res) => {

})

router.post('/movies',(req, res) => {
    
    if(Object.keys(req.body).length <= 0 ){
        res.status(400).send('Empty body?')
        
    }else{
        const newMovie = req.body;
        movies.push(newMovie)
        res.json(newMovie)
    }
})

module.exports = router