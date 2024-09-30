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

    test('retrieve only bets inside the time range', async () => {
        const betBeforeFrom = new BetBuilder().withTimeStamp(12345).build();
        const betOnFrom = new BetBuilder().withTimeStamp(12346).build();
        const betAfterFrom = new BetBuilder().withTimeStamp(12347).build();
        const betBeforeTo = new BetBuilder().withTimeStamp(12369).build();
        const betOnTo = new BetBuilder().withTimeStamp(12370).build();
        const betAfterTo = new BetBuilder().withTimeStamp(12371).build();
        await getRepository().register(betBeforeFrom);
        await getRepository().register(betOnFrom);
        await getRepository().register(betAfterFrom);
        await getRepository().register(betBeforeTo);
        await getRepository().register(betOnTo);
        await getRepository().register(betAfterTo);

        const bets = await getRepository().findByDateRange(12346, 12370);

        expect(bets).toEqual([
            betOnFrom,
            betAfterFrom,
            betBeforeTo
        ]);
    })
}