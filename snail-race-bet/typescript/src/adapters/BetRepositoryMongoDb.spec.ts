import {MongoClient} from "mongodb";
import {BetRepositoryMongoDb} from "./BetRepositoryMongoDb";
import {Bet, BetRepository, PodiumPronostic} from "../domain/BetRepository";

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
        await repository.register(new Bet("me", new PodiumPronostic(2, 4, 6), Date.parse("2021-01-01T00:00:00Z")));

        const result = await repository.findByDateRange(Date.parse("2021-01-01T00:00:00Z"), Date.parse("2021-01-02T00:00:00Z"));

        expect(result).toEqual([new Bet("me", new PodiumPronostic(2, 4, 6), Date.parse("2021-01-01T00:00:00Z"))]);
    })


    test('retrieve only bets inside the time range', async () => {
        const from = Date.parse("2021-01-01T00:00:01Z")
        const to = Date.parse("2021-01-02T00:00:00Z")
        const betBeforeFrom = await registerBetAtTimestamp(repository, from - 1);
        const betOnFrom = await registerBetAtTimestamp(repository, from);
        const betAfterFrom = await registerBetAtTimestamp(repository, from + 1);
        const betBeforeEnd = await registerBetAtTimestamp(repository, to - 1);
        const betOnEnd = await registerBetAtTimestamp(repository, to);
        const betAfterEnd = await registerBetAtTimestamp(repository, to + 1);

        const bets = await repository.findByDateRange(from, to);

        expect(bets).toEqual([betOnFrom, betAfterFrom, betBeforeEnd])
    })

    async function registerBetAtTimestamp(repository: BetRepository, timestamp: number) {
        const bet = new Bet('mathieu', new PodiumPronostic(1, 2, 3), timestamp);
        await repository.register(bet)
        return bet;
    }
})