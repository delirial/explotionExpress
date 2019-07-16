import { Router } from 'express';
import { MoviesController } from '../controllers/moviesController';
import  MovieDTO  from "../../types/MovieDTO";
import { MovieRepository } from '../repo/movieRepository';
const router: Router = Router();

const controller = new MoviesController(new MovieRepository('127.0.0.1','movies'));


router.get('/get-movies/:id', (req, res) => {
    controller.getMovieById(req.params.id)
    .then(data => {
        res.json(data);
    })
    .catch(e => res.json({ error: e }))
});

router.get('/get-movies', (req, res) => {
    controller.getAllMovies()
        .then(data => {
            res.json(data)
        })
        .catch(e => res.json({ error: e }));
});

router.post('/', (req, res) => {
    controller.createMovie(req.body)
    .then((data: MovieDTO) => {
        res.json({ message: 'Created' , object: data});
    })
    .catch(e => res.json({ error: e }));
});


router.put('/:id', (req, res) => {
    controller.updateMovieById(req.params.id,req.body)
    .then(data => {
        res.json({ message: 'Updated' , object: data});
    })
    .catch(e => res.json({ error: e }));

});

router.put('/like/:id', (req, res) => {
    controller.giveLikeById(req.params.id)
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
