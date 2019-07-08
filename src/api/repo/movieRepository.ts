import { MovieDTO } from 'MovieDTO';

export class MovieRepository {
    private data: MovieDTO;
    public constructor(data: MovieDTO) {
        this.data = data;
    }
    public save(): string {
        console.log('Not implemented');
        return 'Not implemented';
        /*       return new Promise((resolve,reject) => {
            //TODO
            movies.push(body);
        })*/
    }
    public  load() {
        throw new Error('Not implemented');
    }
    public  findMovieByTitle() {
        throw new Error('Not implemented');
    }
    public  findMovieById() {
        throw new Error('Not implemented');
    }
}
