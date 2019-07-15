import { Movie, MovieModel } from '../databases/mongodb/moviesModel';
import { SingleMongo } from '../databases/mongodb/initMongo';
import { Repository } from './Repository';

export class MovieRepository {
    //private data: MovieDTO;
    private state: number;
    private con: SingleMongo;
    private model = Movie;

    public constructor() {
        this.con = new SingleMongo('127.0.0.1', 'movies');
        this.con.connection.on('error', console.error.bind(console, 'connection error:'));
        this.con.connection.once('open', function() {
            console.log('We are connected');
        });
    }
    public async getConnection() {
        return await this.con.connection;
    }

    public async showMovies() {
        return await this.model.find().limit(10);
    }

    public async createMovie(data: JSON){
        const record = new Movie(data)
        return await record.save()
    }

    public async getMovieById(id: number){
        return await this.model.findById(id)
    }

    public async updateMovieById(id: number,data: string){
        return await this.model.findByIdAndUpdate(id,data)
    }

    public async deleteMovieById(id: number){
        return await this.model.deleteOne(id)
    }

    public async giveLikeById(id: number){
        const likes = 1
        return await this.model.findByIdAndUpdate(id,likes)
    }
}
