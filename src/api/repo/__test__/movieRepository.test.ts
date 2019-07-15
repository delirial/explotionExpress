import { MovieRepository } from '../movieRepository';

describe('MovieRepository', () => {
    const repo = new MovieRepository();

    describe('getConnectionState', () => {
        test('Check connection to database', () => {
            return repo.getConnection().then(state => {
                expect(state.readyState).toBe(1);
            });
        });
    });
    describe('showMovies', () => {
        test('should return json', () => {
            return repo.getAllMovies().then(data => {
                expect(data).toMatchSnapshot();
            });
        });
    });
});
