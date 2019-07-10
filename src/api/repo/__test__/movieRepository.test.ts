import { MovieRepository } from '../movieRepository';
import { MovieDTO } from 'MovieDTO';

describe('MovieRepository', () => {
    const data: MovieDTO = {
        title: 'Glass',
        year: 2019.0,
        genre: ['Terror', 'Suspense'],
        duration: 129.0,
    };
    const repo = new MovieRepository();
    const state = () => repo.getConnectionState();
    describe('getConnectionState', () => {
        test('Check connection to database', () => {
            if (state() == 1) {
                console.log(state());
                expect(state()).toBe(1);
            }
        });
    });
    describe('showMovies', () => {
        test('should return json', () => {
            expect(repo.showMovies()).toBe('Unexpected');
        });
    });
});
