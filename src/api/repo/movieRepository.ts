import { MovieDTO } from 'MovieDTO';
import { Movie } from '../databases/mongodb/moviesModel';
import { Model, Schema, Connection } from 'mongoose';

export class MovieRepository {
    private data: MovieDTO;
    private connection: Connection;
    private model = Movie;

    public constructor(data: MovieDTO, connection: Connection) {
        this.data = data;
        this.connection = connection;
    }
    public save(): string {
        console.log('Not implemented');
        return 'Not implemented';
    }
    public showMovies() {
        const connectionState = this.connection.readyState;
        while (connectionState != 1) {
            console.log(connectionState);
            console.log('Waiting Connection...');
        }
        return this.model.find({});
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
