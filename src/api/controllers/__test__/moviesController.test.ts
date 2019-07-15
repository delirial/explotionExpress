import { MoviesController } from '../moviesController';
import { MovieRepository } from '../../repo/movieRepository';

describe('MoviesController', () => {
    const controller = new MoviesController(new MovieRepository);
    describe('Parse Data to Json', () => {
        test('Validate Data for Database', () => {
            return controller.showMovies().then(data => {
                expect(data).toMatchSnapshot();
            });
        });
    });
});
