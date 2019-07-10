import { Movie, MovieModel, MovieSchema } from '../databases/mongodb/moviesModel';
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
            console.log.bind('console', 'We are connected');
        });
    }
    public getConnectionState() {
        this.state = this.con.connection.readyState;
        return this.state;
    }

    private async parseQuery(query: DocumentQuery<MovieModel[], MovieModel, {}>) {
        return await query.exec((err, res) => {
            if (err) return console.log(err);
            console.log(res);
            return res;
        });
    }

    public async showMovies() {
        const query = this.model.find({});
        return await this.parseQuery(query);
    }
}
