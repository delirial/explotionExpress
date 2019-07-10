import { Router } from 'express';
import { MoviesController } from '../controllers/moviesController';
const router: Router = Router();

MoviesController.initDatabase();


router.get('/get-movies',(req,res) => {
    res.json(MoviesController.showMovies());
})


export const moviesRouter: Router = router;
