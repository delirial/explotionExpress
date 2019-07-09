import { MovieDTO } from 'MovieDTO';
import { MovieModel } from '../databases/mongodb/moviesModel';
import { mongoose, Model, Schema, Connection } from 'mongoose';

export class MovieRepository {
    private data: MovieDTO;
    private connection: Connection;
    //TODO:Types of Models???!
    private model = MovieModel;

    public constructor(data: MovieDTO, connection: Connection) {
        this.data = data;
        this.connection = connection;
    }
    public save(): string {
        console.log('Not implemented');
        return 'Not implemented';
    }
    public showMovies() {
        if (this.connection.states == 1) {
            this.model.find({});
        }
        return 'Connection lost';
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
