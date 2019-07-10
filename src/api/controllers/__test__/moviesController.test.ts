import { MoviesController } from '../moviesController';

describe('MoviesController', () => {
    describe('showMovies', () => {
        test('should return json movies', () => {
            MoviesController.initDatabase();
            const movies = MoviesController.showMovies();
            expect(movies).toBe('Not implemented');
        });
    });
});
