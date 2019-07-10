import { MovieRepository } from '../repo/movieRepository';
import { MovieDTO } from 'MovieDTO';

export class MoviesController {
    private static repo: MovieRepository;
    /**
     * Init Repository for Movies
     * @returns MovieRepository
     */
    public static initDatabase() {
        this.repo = new MovieRepository();
        return this.repo;
    }

    private static parseInput(data: any): MovieDTO {
        return {
            title: data.title,
            year: data.year,
            genre: data.genre,
            duration: data.duration,
        };
    }

    public static createMovie(body: any) {
        const movie: MovieDTO = this.parseInput(body);
        console.log(movie);
        return MovieRepository.save();
    }

    public static showMovies() {
        return this.repo.showMovies();
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
