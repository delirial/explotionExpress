import { connect, connection } from 'mongoose';

export class SingleMongo {
    private readonly dbURI: string;
    public constructor(url: string, collection: string) {
        this.dbURI = `mongodb://${url}/${collection}`;
    }

    public connectToMongo() {
        connect(this.dbURI);
        console.log('Connection Established');
        return connection;
    }
}
