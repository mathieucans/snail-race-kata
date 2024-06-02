import {MongoDbBetRepository} from "./MongoDbBetRepository";
import {Bet, BetRepository, PodiumPronostic} from "../domain/BetRepository";

export function betRepositoryContactTest(repoProvider: () => BetRepository) {
    test('register a bets', async () => {
        const repository = repoProvider();
        await repository.register(new Bet("me", new PodiumPronostic(2, 4, 6), Date.parse("2021-01-01T00:00:00Z")));
        const result = await repository.findByDateRange(Date.parse("2021-01-01T00:00:00Z"), Date.parse("2021-01-02T00:00:00Z"));
        expect(result).toEqual([new Bet("me", new PodiumPronostic(2, 4, 6), Date.parse("2021-01-01T00:00:00Z"))]);
    })

    test('retrieve only bets inside the time range', async () => {
        const repository = repoProvider();
        await repository.register(new Bet("me", new PodiumPronostic(2, 4, 6), Date.parse("2021-01-01T00:00:00Z")));
        const result = await repository.findByDateRange(Date.parse("2021-01-01T00:00:01Z"), Date.parse("2021-01-02T00:00:00Z"));
        expect(result).toEqual([]);
    })

}