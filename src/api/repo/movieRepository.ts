import { Movie, MovieModel } from '../databases/mongodb/moviesModel';
import { SingleMongo } from '../databases/mongodb/initMongo';
import { Repository } from './Repository';
import MovieDTO from 'MovieDTO';
import { ObjectId } from 'bson';

export class MovieRepository extends Repository<MovieModel,MovieDTO> {

    //private data: MovieDTO;
    private state: number;
    private con: SingleMongo;
    private model = Movie;

    public constructor(databaseURI: string, databaseName: string) {
        super();
        this.con = new SingleMongo(databaseURI, databaseName);
        this.con.connection.on('error', console.error.bind(console, 'connection error:'));
        this.con.connection.once('open', () => console.log('We are connected'));
    }
    public async getConnection() {
        return await this.con.connection;
    }

    public async getAllMovies() {
        return await this.model.find({}).limit(10);
    }

    public async createMovie(data: MovieDTO){
        const record = new Movie(data)
        return await record.save()
    }

    public async getMovieById(id: ObjectId | number){
        return await this.model.findById(id)
    }

    public async updateMovieById(id: ObjectId | number,data: {}){
        return await this.model.findByIdAndUpdate(id,data)
    }

    public async deleteMovieById(id: ObjectId | number){
        return await this.model.findByIdAndDelete(id)
    }

    public async giveLikeById(id: ObjectId | number ){
        const likes = 1
        return await this.model.findByIdAndUpdate(id,likes)
    }

    public async getMovieByTitle(title: string){
        return await this.model.findById(title)
    }

    public async updateMovieByTitle(title: string,data: {}){
        return await this.model.findByIdAndUpdate(title,data)
    }
    //TODO: Implements title - years - and all Model and Interfaces Types
}
