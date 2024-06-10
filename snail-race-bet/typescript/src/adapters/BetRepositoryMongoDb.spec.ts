import {MongoClient} from "mongodb";
import {BetRepositoryMongoDb} from "./BetRepositoryMongoDb";

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

    test('register a bets', async () => {
        expect('TODO implement BetRepositoryMongoDb').toEqual('to be implemented');
    })

    test('retrieve only bets inside the time range', async () => {
        expect('TODO implement BetRepositoryMongoDb').toEqual('to be implemented');
    })
})