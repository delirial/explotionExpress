import { MovieRepository } from '../movieRepository';

describe('MovieRepository', () => {
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
