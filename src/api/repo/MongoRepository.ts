
export interface MongoRepository<Model,DataTransferObject> {
    //TODO: Define a return type for getConnection
    getConnection(): any;

    getAll():Promise<Model[]>;

    create(data: DataTransferObject):Promise<Model>

    getById(id: number):Promise<Model>

    updateById(id: number,data: {}):Promise<Model>

    deleteById(id: number):Promise<Model>

}
