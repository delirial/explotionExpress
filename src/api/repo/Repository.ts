
export abstract class Repository<Model> {

    public abstract getConnection(): any;

    public abstract async getAllMovies():Promise<Model[]>;

    public abstract async createMovie(data: JSON):Promise<Model>

    public abstract async getMovieById(id: number):Promise<Model>

    public abstract async updateMovieById(id: number,data: string):Promise<Model>

    public abstract async deleteMovieById(id: number):Promise<Model>

}
