import { MovieRepository } from '../repo/movieRepository';
import { MovieDTO } from 'MovieDTO';
import { Connection } from 'mongoose';

export class MoviesController {
    private readonly connection: Connection;
    public constructor(connection: Connection) {
        this.connection = connection;
    }

    private parseInput(data: any): MovieDTO {
        return {
            title: data.title,
            year: data.year,
            genre: data.genre,
            duration: data.duration,
        };
    }

    public createMovie(movie: any) {
        const connectionState = this.connection.readyState;
        while (connectionState != 1) {
            console.log(connectionState);
            console.log('Waiting Connection...');
        }
        const dataTransfer = this.parseInput(movie);
        console.log(dataTransfer);
        const movieRepo = new MovieRepository(dataTransfer, this.connection);
        return movieRepo.save();
    }

    public showMovies(movie: any) {
        const dataTransfer = this.parseInput(movie);
        const movieRepo = new MovieRepository(dataTransfer, this.connection);
        return movieRepo.showMovies();
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
    public findMovieByDuration(movie: any) {
        console.log('Not implemented');
        return 'Not implemented';
    }
}
