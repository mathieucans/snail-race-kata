import {Snail, SnailRaceResult} from "./SnailRaceResult";
import {InMemoryBetRepository} from "../adapters/InMemoryBetRepository";
import {Bet, PodiumPronostic} from "./Bet";
import {BetRepository} from "./BetRepository";
import {FakeSnailRaceProvider} from "../adapters/FakeSnailRaceProvider";

class SnailBetUsecase {
    constructor(private repository: BetRepository) {

    }

    async register(gamblerName: string, podiumPronostic: PodiumPronostic) {
        await this.repository.register(new Bet(gamblerName, podiumPronostic, Date.now()))

    }

    async findWinners(): Promise<string[]> {
        let allBets = await this.repository.findByDateRange(0, Date.now());
        return allBets.filter(bet => {
            return bet.pronostic.first === 1 && bet.pronostic.second === 2 && bet.pronostic.third === 3;
        }).map(bet => bet.gambler);

    }
}

describe('SnailBetUsecase', () => {
    it('should list the gamblers that find the exact podium', async () => {
        // given
        const snailRaceResult = new SnailRaceResult(1, 1, [
            new Snail(1, 'Turbo'),
            new Snail(2, 'Flash'),
            new Snail(3, 'Speedy')
        ]);

        const resultProvider = new FakeSnailRaceProvider()
        resultProvider.addRaceResult(snailRaceResult);
        const snailBetUsecase = new SnailBetUsecase(new InMemoryBetRepository());
        await snailBetUsecase.register('Alice', new PodiumPronostic(1, 2, 3));

        // when
        const winners = await snailBetUsecase.findWinners();

        // then
        expect(winners).toEqual(['Alice']);
    });

    it("if you dont have the exact podium, you don't win", async () => {
// given
        const snailRaceResult = new SnailRaceResult(1, 1, [
            new Snail(1, 'Turbo'),
            new Snail(2, 'Flash'),
            new Snail(3, 'Speedy')
        ]);
        const snailBetUsecase = new SnailBetUsecase(new InMemoryBetRepository());
        await snailBetUsecase.register('Frank', new PodiumPronostic(3, 2, 1));
        await snailBetUsecase.register('Bob', new PodiumPronostic(1, 3, 2));
        await snailBetUsecase.register('Charlie', new PodiumPronostic(2, 1, 3));
        await snailBetUsecase.register('David', new PodiumPronostic(2, 3, 1));
        await snailBetUsecase.register('Eve', new PodiumPronostic(3, 1, 2));

        const winners = await snailBetUsecase.findWinners();
        expect(winners).toEqual([])

    })

    // other snails?
    it.todo("if you register too late, you don't win")
});