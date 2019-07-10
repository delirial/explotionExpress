import { connect, connection, Connection, createConnection, Mongoose } from 'mongoose';

export class SingleMongo {
    private readonly dbURI: string;
    public connection: Connection;

    public constructor(url: string, collection: string) {
        this.dbURI = `mongodb://${url}/${collection}`;
        connect(
            this.dbURI,
            { useNewUrlParser: true, keepAlive: true, keepAliveInitialDelay: 300000 },
        );
        this.connection = connection;
    }
}
