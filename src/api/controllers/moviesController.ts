import { MovieRepository } from '../repo/movieRepository';
import { MovieDTO } from 'MovieDTO';

export class MoviesController {
    private static parseInput(data: any): MovieDTO {
        //TODO: Parse Request on MovieDTO
        return {
            title: data.title,
            duration: data.duration,
        };
    }

    public static createMovie(movie: any) {
        const dataTransfer = this.parseInput(movie);
        console.log(dataTransfer)
        const movieRepo = new MovieRepository(dataTransfer);
        return movieRepo.save();
    }
}
