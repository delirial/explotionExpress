import { MovieRepository } from '../movieRepository';
import { MovieDTO } from 'MovieDTO';
import { SingleMongo } from '../../databases/mongodb/initMongo';

describe('MovieRepository', () => {
    describe('save()', () => {
        test('should return path of data', () => {
            const data: MovieDTO = {
                title: 'Glass',
                year: 2019.0,
                genre: ['Terror', 'Suspense'],
                duration: 129.0,
            };
            const connection = new SingleMongo('127.0.0.1', 'movies').connectToMongo();
            const movie = new MovieRepository(data, connection);
            expect(movie.save()).toBe('Not implemented');
        });
    });
});
