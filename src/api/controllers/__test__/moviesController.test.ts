import { MoviesController } from '../moviesController';
import { MovieDTO } from 'MovieDTO';
import { SingleMongo } from '../../databases/mongodb/initMongo';
import { Connection, Mongoose } from 'mongoose';

describe('MoviesController', () => {
    const data: MovieDTO = {
        title: 'Glass',
        year: 2019.0,
        genre: ['Terror', 'Suspense'],
        duration: 129.0,
    };
    describe('createMovie', () => {
        test('should return ID of save', () => {});
    });
    describe('showMovies', () => {
        test('should return json movies', () => {
            async function dbConnect(): Promise<Mongoose> {
                return await new SingleMongo('127.0.0.1', 'movies').connectToMongo();
            }
            const dbConnection = dbConnect();
            const controller = new MoviesController(dbConnection);
            const movies = controller.showMovies();
            expect(movies).toBe('Not implemented');
        });
    });
    describe('findMovieByName', () => {
        test('', () => {});
    });
    describe('findMovieByTitle', () => {
        test('', () => {});
    });
    describe('findMovieById', () => {
        test('', () => {});
    });
    describe('findMoviesByYear', () => {
        test('', () => {});
    });
    describe('findMoviesByGenre', () => {
        test('', () => {});
    });
    describe('findMoviesByDuration', () => {
        test('', () => {});
    });
});
