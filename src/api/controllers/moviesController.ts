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

    public static showMovies() {
        return this.repo.showMovies();
    }
}
