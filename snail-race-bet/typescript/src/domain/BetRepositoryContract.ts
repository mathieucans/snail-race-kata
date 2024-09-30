import {Bet, BetRepository, PodiumPronostic} from "./BetRepository";
import {BetBuilder} from "./BetBuilder";

export function betRepositoryContract(getRepository: () => BetRepository) {
    test('register a bets', async () => {
        await getRepository().register(new Bet(
            'Mathieu',
            new PodiumPronostic(20, 12, 4),
            12345));

        const bets = await getRepository().findByDateRange(12345, 12346);
        expect(bets.length).toEqual(1);
        expect(bets).toEqual([new Bet(
            "Mathieu",
            new PodiumPronostic(20, 12, 4),
            12345)
        ]);
    });

    async function registerBetAtTimeStamp(timestamp: number) {
        const bet = new BetBuilder().withTimeStamp(timestamp).build();
        await getRepository().register(bet);
        return bet;
    }

    test('retrieve only bets inside the time range', async () => {
        const from = 12346;
        const to = 12370;
        await registerBetAtTimeStamp(from - 1);
        const betOnFrom = await registerBetAtTimeStamp(from);
        const betAfterFrom = await registerBetAtTimeStamp(from + 1);
        const betBeforeTo = await registerBetAtTimeStamp(to - 1);
        await registerBetAtTimeStamp(to);
        await registerBetAtTimeStamp(to + 1);

        const bets = await getRepository().findByDateRange(from, to);

        expect(bets).toEqual([
            betOnFrom,
            betAfterFrom,
            betBeforeTo
        ]);
    })
}