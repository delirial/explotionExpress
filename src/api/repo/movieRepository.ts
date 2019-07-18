import { Movie, MovieModel } from '../databases/mongodb/moviesModel';
import { SingleMongo } from '../databases/mongodb/initMongo';
import { MongoRepository } from './MongoRepository';
import MovieDTO from 'MovieDTO';
import { ObjectId } from 'bson';

export class MovieRepository implements MongoRepository<MovieModel,MovieDTO> {

    //private data: MovieDTO;
    private state: number;
    private con: SingleMongo;
    private model = Movie;

    public constructor(databaseURI: string, databaseName: string) {
        this.con = new SingleMongo(databaseURI, databaseName);
        this.con.connection.on('error', console.error.bind(console, 'connection error:'));
        this.con.connection.once('open', () => console.log('We are connected'));
    }
    public async getConnection() {
        return await this.con.connection;
    }

    public async getAll() {
        return await this.model.find({}).limit(10);
    }

    public async create(data: MovieDTO){
        const record = new Movie(data)
        return await record.save()
    }

    public async getById(id: ObjectId | number){
        return await this.model.findById(id)
    }

    public async updateById(id: ObjectId | number,data: {}){
        return await this.model.findByIdAndUpdate(id,data)
    }

    public async deleteById(id: ObjectId | number){
        return await this.model.findByIdAndDelete(id)
    }

    public async giveLikeById(id: ObjectId | number ){
        const likes = 1
        return await this.model.findByIdAndUpdate(id,likes)
    }

    public async getByTitle(title: string){
        return await this.model.findById(title)
    }

    public async updateByTitle(title: string,data: {}){
        return await this.model.findByIdAndUpdate(title,data)
    }
    //TODO: Implements title - years - and all Model and Interfaces Types
}
