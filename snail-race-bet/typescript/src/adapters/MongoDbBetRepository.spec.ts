import {MongoClient} from "mongodb";
import {MongoDbBetRepository} from "./MongoDbBetRepository";
import {Bet, PodiumPronostic} from "../domain/Bet";

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


    // TODO
    // change

    test('get a bet within the time range', async () => {
        let middleOfDay = new Date(2020, 1, 1, 12, 0, 0).getTime();
        let registeredBet = new Bet("trump", new PodiumPronostic(1, 2, 3),middleOfDay);
        await repository.register(registeredBet)

        let startOfDay = new Date(2020, 1, 1, 0, 0, 0).getTime();
        let endOfDay = new Date(2020, 1, 1, 23, 59, 59).getTime();
        const bets = await repository.findByDateRange(startOfDay, endOfDay)

        expect(bets).toHaveLength(1)
        expect(bets).toContainEqual(registeredBet)
    })

    // TODO rename with do not retrive bets outside date range
    test('retrieve bet by time range', async () => {
        let nextDay = new Date(2020, 1, 2, 0, 0, 0).getTime();
        let registeredBet = new Bet("trump", new PodiumPronostic(1, 2, 3),nextDay);
        await repository.register(registeredBet)

        let startOfDay = new Date(2020, 1, 1, 0, 0, 0).getTime();
        let endOfDay = new Date(2020, 1, 1, 23, 59, 59).getTime();
        const bets = await repository.findByDateRange(startOfDay, endOfDay)

        expect(bets).toHaveLength(0)


    })
})