import { MovieRepository } from '../movieRepository';
import { MovieDTO } from 'MovieDTO';

describe('MovieRepository', () => {
    describe('save()', () => {
        test('should return path of data', () => {
            const data: MovieDTO = {
                title: 'Matrix',
                duration: 120,
            };
            const movie = new MovieRepository(data);
            expect(movie.save()).toBe('Not implemented');
        });
    });
});
