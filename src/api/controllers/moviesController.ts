import { MovieRepository } from '../repo/movieRepository';
import MovieDTO from 'MovieDTO';
import { ObjectId } from 'mongodb';

export class MoviesController {
    private repo: MovieRepository;


    constructor(repository: MovieRepository){
        this.repo = repository
    }

    public async getAllMovies() {
        return await this.repo.getAll();
    }

    public async createMovie(data: MovieDTO){
        return await this.repo.create(data)
    }

    public async getMovieById(id: ObjectId | number){
        return await this.repo.getById(id)
    }

    public async updateMovieById(id: ObjectId | number,data: string){
        return await this.repo.updateById(id,data)
    }

    public async deleteMovieById(id: ObjectId | number){
        return await this.repo.deleteById(id)
    }

    public async giveLikeById(id: ObjectId | number){
        return await this.repo.giveLikeById(id)
    }
}
