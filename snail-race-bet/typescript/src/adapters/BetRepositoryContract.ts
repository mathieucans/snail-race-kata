import {Bet, BetRepository, PodiumPronostic} from "../domain/BetRepository";

export function betRepositoryContract(repositoryProvider: () => BetRepository) {

    let betRepository: BetRepository;

    beforeEach(() => {
        betRepository = repositoryProvider();
    })

    test('register a bet', async () => {
        const betToRegister = new Bet('mathieu', new PodiumPronostic(1, 2, 3), 123456);

        await betRepository.register(betToRegister)

        const bets = await betRepository.findByDateRange(123455, 123457);
        const registeredBet = new Bet('mathieu', new PodiumPronostic(1, 2, 3), 123456);
        expect(bets).toEqual([registeredBet])
    })

    test('retrieve only bets inside the time range', async () => {
        const from = 12340
        const to = 12350
        const betBeforeFrom = new Bet('mathieu', new PodiumPronostic(1, 2, 3), from - 1);
        const betOnFrom = new Bet('mathieu', new PodiumPronostic(1, 2, 3), from);
        const betOnEnd = new Bet('mathieu', new PodiumPronostic(1, 2, 3), to);
        const betAfterEnd = new Bet('mathieu', new PodiumPronostic(1, 2, 3), to + 1);

        await betRepository.register(betBeforeFrom)
        await betRepository.register(betOnFrom)
        await betRepository.register(betOnEnd)
        await betRepository.register(betAfterEnd)

        const bets = await betRepository.findByDateRange(from, to);
        expect(bets).toEqual([betOnFrom, betOnEnd])
    })
}