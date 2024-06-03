import {MongoClient} from "mongodb";
import {MongoDbBetRepository} from "./MongoDbBetRepository";
import {Bet, PodiumPronostic} from "../domain/BetRepository";

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

    test('register a bet', async () => {
        const betToRegister = new Bet('mathieu', new PodiumPronostic(1, 2, 3), 123456);

        await repository.register(betToRegister)

        const bets = await repository.findByDateRange(123455, 123457);
        const registeredBet = new Bet('mathieu', new PodiumPronostic(1, 2, 3), 123456);
        expect(bets).toEqual([registeredBet])
    })

    test('retrieve only bets inside the time range', async () => {
        const from = 12340
        const to = 12350
        const betBeforeFrom = new Bet('mathieu', new PodiumPronostic(1, 2, 3), from-1);
        const betOnFrom = new Bet('mathieu', new PodiumPronostic(1, 2, 3), from);
        const betOnEnd = new Bet('mathieu', new PodiumPronostic(1, 2, 3), to);
        const betAfterEnd = new Bet('mathieu', new PodiumPronostic(1, 2, 3), to+1);

        await repository.register(betBeforeFrom)
        await repository.register(betOnFrom)
        await repository.register(betOnEnd)
        await repository.register(betAfterEnd)

        const bets = await repository.findByDateRange(from, to);
        expect(bets).toEqual([betOnFrom, betOnEnd])
    })
})