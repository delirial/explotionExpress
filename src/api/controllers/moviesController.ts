import { MovieRepository } from '../repo/movieRepository';
import { MovieDTO } from 'MovieDTO';
import { Connection, Mongoose } from 'mongoose';

export class MoviesController {
    private readonly connection: Promise<Mongoose>;
    public constructor(connection: Promise<Mongoose>) {
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
        const dataTransfer = this.parseInput(movie);
        console.log(dataTransfer);
        const movieRepo = new MovieRepository(this.connection);
        return movieRepo.save();
    }

    public showMovies() {
        const movieRepo = new MovieRepository(this.connection);
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
