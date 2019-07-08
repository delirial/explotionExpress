import { MoviesController } from '../moviesController';
import { MovieDTO } from 'MovieDTO';

describe('MoviesController', () => {
    describe('createMovie', () => {
        test('should return path of save', () => {
            const data: MovieDTO = {
                title: 'Matrix',
                duration: 120,
            };
            const movieController = MoviesController.createMovie(data);
            expect(movieController).toBe('Not implemented');
        });
    });
});
