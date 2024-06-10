import {MongoClient} from "mongodb";
import {BetRepositoryMongoDb} from "./BetRepositoryMongoDb";
import {betRepositoryContract} from "../domain/BetRepositoryContract";

describe('BetRepositoryMongoDb', () => {
    let mongoClient: MongoClient;
    let repository: BetRepositoryMongoDb;

    beforeEach(async () => {
        mongoClient = new MongoClient('mongodb://localhost:27017');
        await mongoClient.connect()
        const db = mongoClient.db('contract_testing');
        await db.collection("bets").drop();

        repository = new BetRepositoryMongoDb(db);
    })

    afterEach(() => {
        mongoClient.close()
    })
    betRepositoryContract(() => repository);
})