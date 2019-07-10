import { Movie } from '../databases/mongodb/moviesModel';
import { SingleMongo } from '../databases/mongodb/initMongo';
import { DocumentQuery, model, Query } from 'mongoose';

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
        return await this.model.find();
    }
}
