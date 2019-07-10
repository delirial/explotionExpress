import { Movie } from '../databases/mongodb/moviesModel';
import { Mongoose, ConnectionStates, Connection } from 'mongoose';
import { SingleMongo } from '../databases/mongodb/initMongo';

export class MovieRepository {
    //private data: MovieDTO;
    private state: number;
    private con: SingleMongo;
    private model = Movie;

    public constructor() {
        this.con = new SingleMongo('127.0.0.1', 'moviesCollection');
        this.state = this.con.connection.readyState;
    }

    public static save(): string {
        console.log('Not implemented');
        return 'Not implemented';
    }

    public showMovies() {
        if (this.state == 1) return this.model.find();
    }

    public findMovieByName(movie: any) {
        console.log('Not implemented');
        return 'Not implemented';
    }

    public findMovieByTitle(movie: any) {
        console.log('Not implemented');
        return 'Not implemented';
    }

    public findMovieById(movie: any) {
        console.log('Not implemented');
        return 'Not implemented';
    }

    public findMoviesByYear(movie: any) {
        console.log('Not implemented');
        return 'Not implemented';
    }

    public findMoviesByGenre(movie: any) {
        console.log('Not implemented');
        return 'Not implemented';
    }

    public findMoviesByDuration(movie: any) {
        console.log('Not implemented');
        return 'Not implemented';
    }
}
