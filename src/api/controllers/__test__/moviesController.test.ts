import { MoviesController } from '../moviesController';
import { MovieRepository } from '../../repo/movieRepository';

describe('MoviesController', () => {
    const controller = new MoviesController(new MovieRepository('127.0.0.1','movies'));
    describe('Parse Data to Json', () => {
        test('Validate Data for Database', () => {
            return controller.getAllMovies().then(data => {
                expect(data).toMatchSnapshot();
            });
        });
    });
});
