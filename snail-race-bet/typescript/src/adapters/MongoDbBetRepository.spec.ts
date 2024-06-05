import {MongoClient} from "mongodb";
import {MongoDbBetRepository} from "./MongoDbBetRepository";
import {betRepositoryContract} from "../domain/BetRepositoryContract";

describe('MongoDbBetRepository', () => {
    let mongoClient: MongoClient;
    let repository: MongoDbBetRepository;

    beforeEach(async () => {
        mongoClient = new MongoClient('mongodb://localhost:27017');
        await mongoClient.connect()
        const db = mongoClient.db('contract_testing');
        await db.collection("bets").drop();

        repository = new MongoDbBetRepository(db);
    })

    afterEach(() => {
        mongoClient.close()
    })
    betRepositoryContract(() => repository);
})