import { MoviesController } from '../moviesController';

describe('MoviesController', () => {
    const controller = new MoviesController();
    const db = controller.initDatabase();
    describe('initDatabase', () => {
        test('Check Connection to Database', () => {
            return db.getConnection().then(state => {
                expect(state.readyState).toBe(1);
            });
        });
    });
    describe('Parse Data to Json', () => {
        test('Validate Data for Database', () => {
            return controller.showMovies().then(data => {
                expect(data).toMatchSnapshot();
            });
        });
    });
});
