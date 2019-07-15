import { MovieRepository } from '../repo/movieRepository';

export class MoviesController {
    private repo: MovieRepository;


    constructor(Repository){
        
    }

    public initDatabase() {
        this.repo = new MovieRepository();
        return this.repo;
    }

    public async showMovies() {
        return await this.repo.showMovies();
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
