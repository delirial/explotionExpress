
export abstract class Repository<Model> {
    public getConnection(): any{};

    public async getAll():Promise<Model>;

    public async create(data: JSON):Promise<Model>

    public async getById(id: number):Promise<Model>

    public async updateById(id: number,data: string):Promise<Model>

    public async deleteById(id: number):Promise<Model>

}
