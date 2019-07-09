import { connect } from 'mongoose';

export class SingleMongo {
    private readonly dbURI: string;
    public constructor(url: string, collection: string) {
        this.dbURI = `mongodb://${url}/${collection}`;
    }

    public connectToMongo() {
        return connect(this.dbURI);
    }
}
