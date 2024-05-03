import {MongoClient} from "mongodb";
import {MongoDbBetRepository} from "./MongoDbBetRepository";
import {ContractTest} from "./BetRepositoryContractTest";

describe('MongoDbBetRepository', () => {
    let mongoClient: MongoClient;

    let  contractTest = new ContractTest(

    )

    beforeEach(async () => {
        mongoClient = new MongoClient('mongodb://localhost:27017');
        await mongoClient.connect()
        const db = mongoClient.db('contract_testing');
        await db.collection("bets").drop();

        const repository = new MongoDbBetRepository(db);

        contractTest.withRepo(repository)
    })

    afterEach(() => {
        mongoClient.close()

    })

    contractTest.registerTests()


})