import { Router } from 'express'
const router : Router = Router()

const movies = [{id:0,title:'Titanic',year:1949,likes:0}]

router.post('/',(req, res) => {  
    if(Object.keys(req.body).length <= 0 )
        return res.status(400).send('Empty body?')

    const newMovie = req.body;
    movies.push(newMovie)
    res.json({message:'Added',newMovie})
})

router.get('/:id', (req,res ) => {
    const moviesId = req.params.id
    const movie = movies.find(movie => movie.id == moviesId )
    res.json(movie)
})

router.put('/:id',(req, res) => {
    const moviesId = req.params.id
    const newMovie = req.body
    const oldMovie = movies.find(movie => movie.id == moviesId )
    const index = movies.findIndex(movie => movie.id == moviesId)
    const movie2Insert = {...oldMovie,...newMovie,id: req.params.id}
    movies[index] = movie2Insert
    res.json({message:'Updated'})

})

router.delete('/:id',(req,res) => {
    const moviesId = req.params.id
    const index = movies.findIndex(movie => movie.id == moviesId )
    delete movies[index]
    res.json({message:'Deleted'})
})


router.put('/like/:title',(req,res) => {
    const movieTitle = req.params.title
    const index = movies.findIndex(movie => movie.title == movieTitle)
    movies[index] = { likes:0, ...movies[index]}
    movies[index].likes += 1
    res.json(movies[index])
})

export const moviesRouter: Router = router;