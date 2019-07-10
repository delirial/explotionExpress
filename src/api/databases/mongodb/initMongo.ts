import { Connection, createConnection } from 'mongoose';

export class SingleMongo {
    private readonly dbURI: string;
    public connection: Connection;

    public constructor(url: string, collection: string) {
        this.dbURI = `mongodb://${url}/${collection}`;
        this.connection = createConnection(this.dbURI);
    }
}
