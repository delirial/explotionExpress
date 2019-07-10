import { Router } from 'express';
import { MoviesController } from '../controllers/moviesController';
const router: Router = Router();

const controller = new MoviesController();
const db = controller.initDatabase();

router.get('/get-movies', (req, res) => {
    controller
        .showMovies()
        .then(data => {
            res.json(data);
        })
        .catch(e => res.json({ error: e }));
});

export const moviesRouter: Router = router;
