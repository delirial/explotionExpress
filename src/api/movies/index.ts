
const movies = [{id:0,title:'Titanic',year:1949,likes:0}]

//CREATE
router.post('/',(req, res) => {  
    if(Object.keys(req.body).length <= 0 ){
        res.status(400).send('Empty body?')
        
    }else{
        const newMovie = req.body;
        movies.push(newMovie)
        res.json(newMovie)
    }
})

//REQUEST
router.get('/:id', (req,res ) => {
    const moviesId = req.params.id
    const movie = movies.find(movie => movie.id == moviesId )
    res.json(movie)
})
//UPDATE
router.put('/:id',(req, res) => {
    const moviesId = req.params.id
    const newMovie = req.body
    const oldMovie = movies.find(movie => movie.id == moviesId )
    const movie2Insert = {...oldMovie,...newMovie,id: req.params.id}
    
    res.json(movie)

})
//DELETE
router.delete('/:id',(req,res) => {
    const moviesId = req.params.id
    const index = movies.findIndex(movie => movie.id == moviesId )
    delete movies[index]
    res.json({message:'OK'})
})


router.put('/like/:title',(req,res) => {
    const movieTitle = req.params.title
    const index = movies.findIndex(movie => movie.title == movieTitle)
    movies[index] = { likes:0, ...movies[index]}
    movies[index].likes += 1
    res.json(movies[index])
})
module.exports = router