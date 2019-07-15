import { MovieRepository } from '../repo/movieRepository';

export class MoviesController {
    private repo: MovieRepository;


    constructor(repository: MovieRepository){
        this.repo = repository
    }

    public async showMovies() {
        return await this.repo.getAllMovies();
    }

    public async createMovie(data: JSON){
        return await this.repo.
    }

    public async getMovieById(id: number){
        return await this.repo.getMovieById(id)
    }

    public async updateMovieById(id: number,data: string){
        return await this.repo.updateMovieById(id,data)
    }

    public async deleteMovieById(id: number){
        return await this.repo.deleteMovieById(id)
    }

    public async giveLikeById(id: number){
        return await this.repo.giveLikeById(id)
    }
}
