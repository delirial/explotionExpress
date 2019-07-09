import { mongoose } from 'mongoose';

export class SingleMongo {
    private readonly dbURI: string;
    public constructor(url: string, collection: string) {
        this.dbURI = `mongodb://${url}/${collection}`;
    }

    public connectToMongo() {
        mongoose.connect(this.dbURI);
        console.log('Connection Established');
        return mongoose.connection;
    }
}
