import { Router } from 'express';
import { MoviesController } from '../controllers/moviesController';
import  MovieDTO  from "../../types/MovieDTO";
import { MovieRepository } from '../repo/movieRepository';
const router: Router = Router();

const controller = new MoviesController(new MovieRepository);


router.get('/:id', (req, res) => {
    const moviesId = req.params.id;
    const movie = controller.getMovieById(moviesId)
    .then(data => {
        res.json(data);
    })
    .catch(e => res.json({ error: e }))
});

router.get('/showMovies', (req, res) => {
    controller.showMovies()
        .then(data => {
            res.json(data);
        })
        .catch(e => res.json({ error: e }));
});

router.post('/', (req, res) => {
    controller.createMovie(req.body)
    .then((data: MovieDTO) => {
        res.json(data);
    })
    .catch(e => res.json({ error: e }));
});


router.put('/:id', (req, res) => {
    const moviesId = req.params.id;
    const newMovie = req.body;
    controller.updateMovieById(moviesId,newMovie)
    .then(data => {
        res.json({ message: 'Updated' , object: data});
    })
    .catch(e => res.json({ error: e }));

});

router.put('/like/:id', (req, res) => {
    const movieId = req.params.id;
    controller.giveLikeById(movieId)
    .then(data => {
        res.json({ message: 'Likes', object: data });
    })
    .catch(e => res.json({ error: e }));
});

router.delete('/:id', (req, res) => {
    const moviesId = req.params.id;
    controller.deleteMovieById(moviesId)
    .then(data => {
        res.json({ message: 'Deleted', object: data });
    })
    .catch(e => res.json({ error: e }));
    
});

export const moviesRouter: Router = router;
