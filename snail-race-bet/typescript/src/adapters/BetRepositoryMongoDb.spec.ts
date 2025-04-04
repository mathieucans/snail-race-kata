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
        // register a bet
        // How can we verify the bet is actually inserted ?
        // "Rien n'est plus dangereux qu'une idée quand on en a qu'une" (Emile Chartier)
        // TIPS : Find some (>=3) options before commiting to one
        fail('TODO : write the test, then the implementation😉');
    })

    test('retrieve only bets inside the time range', async () => {
        fail('TODO : write the test, then the implementation😉');
    })
})