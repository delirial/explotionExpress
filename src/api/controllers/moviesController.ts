import { MovieRepository } from '../repo/movieRepository';
import { MovieDTO } from 'MovieDTO';

export class MoviesController {
    private repo: MovieRepository;
    /**
     * Init Repository for Movies
     * @returns MovieRepository
     */
    public initDatabase() {
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

    public async showMovies() {
        return await this.repo.showMovies();
    }
}
