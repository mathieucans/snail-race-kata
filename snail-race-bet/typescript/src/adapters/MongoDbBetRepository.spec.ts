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

    test('register a bets', async () => {
        await repository.register(new Bet("me", new PodiumPronostic(2, 4, 6), Date.parse("2021-01-01T00:00:00Z")));
        const result = await repository.findByDateRange(Date.parse("2021-01-01T00:00:00Z"), Date.parse("2021-01-02T00:00:00Z"));
        expect(result).toEqual([new Bet("me", new PodiumPronostic(2, 4, 6), Date.parse("2021-01-01T00:00:00Z"))]);
    })

    test('retrieve only bets inside the time range', async () => {
        await repository.register(new Bet("me", new PodiumPronostic(2, 4, 6), Date.parse("2021-01-01T00:00:00Z")));
        const result = await repository.findByDateRange(Date.parse("2021-01-01T00:00:01Z"), Date.parse("2021-01-02T00:00:00Z"));
        expect(result).toEqual([]);
    })
})