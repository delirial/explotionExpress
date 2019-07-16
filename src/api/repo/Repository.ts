
export abstract class Repository<Model,DataTransferObject> {

    public abstract getConnection(): any;

    public abstract async getAllMovies():Promise<Model[]>;

    public abstract async createMovie(data: DataTransferObject):Promise<Model>

    public abstract async getMovieById(id: number):Promise<Model>

    public abstract async updateMovieById(id: number,data: {}):Promise<Model>

    public abstract async deleteMovieById(id: number):Promise<Model>

}
