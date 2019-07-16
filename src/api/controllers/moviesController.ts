import { MovieRepository } from '../repo/movieRepository';
import MovieDTO from 'MovieDTO';
import { ObjectId } from 'mongodb';

export class MoviesController {
    private repo: MovieRepository;


    constructor(repository: MovieRepository){
        this.repo = repository
    }

    public async getAllMovies() {
        return await this.repo.getAllMovies();
    }

    public async createMovie(data: MovieDTO){
        return await this.repo.createMovie(data)
    }

    public async getMovieById(id: ObjectId | number){
        return await this.repo.getMovieById(id)
    }

    public async updateMovieById(id: ObjectId | number,data: string){
        return await this.repo.updateMovieById(id,data)
    }

    public async deleteMovieById(id: ObjectId | number){
        return await this.repo.deleteMovieById(id)
    }

    public async giveLikeById(id: ObjectId | number){
        return await this.repo.giveLikeById(id)
    }
}
