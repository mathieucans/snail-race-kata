import {Snail, SnailRaceResult} from "./SnailRaceResult";
import {InMemoryBetRepository} from "../adapters/InMemoryBetRepository";
import {PodiumPronostic} from "./Bet";
import {FakeSnailRaceProvider} from "../adapters/FakeSnailRaceProvider";
import {SnailBetUsecase} from "./SnailBetUsecase";
import {FakeClock} from "./FakeClock";
import now = jest.now;

describe('SnailBetUsecase', () => {
    let resultProvider: FakeSnailRaceProvider;

    let snailBetUsecase: SnailBetUsecase;
    let clock: FakeClock;
    let now: number;
    beforeEach(() => {

        clock = new FakeClock(Date.now());
        resultProvider = new FakeSnailRaceProvider();
        snailBetUsecase = new SnailBetUsecase(new InMemoryBetRepository(), resultProvider, clock);
        let longTimeAgo = Date.parse('2020-01-01T00:00:00Z');
        clock.setDate(longTimeAgo) // all bets are registered at this time

        now = Date.now();
    });

    it('should list the gamblers that find the exact podium', async () => {
        // given
        await snailBetUsecase.register('Alice', new PodiumPronostic(1, 2, 3));

        const snailRaceResult = new SnailRaceResult(1, now, [
            new Snail(1, 'Turbo'),
            new Snail(2, 'Flash'),
            new Snail(3, 'Speedy')
        ]);

        resultProvider.addRaceResult(snailRaceResult);


        // when
        const winners = await snailBetUsecase.findWinners();

        // then
        expect(winners).toEqual(['Alice']);
    });

    it("if you dont have the exact podium, you don't win", async () => {
// given

        await snailBetUsecase.register('Frank', new PodiumPronostic(3, 2, 1));
        await snailBetUsecase.register('Bob', new PodiumPronostic(1, 3, 2));
        await snailBetUsecase.register('Charlie', new PodiumPronostic(2, 1, 3));
        await snailBetUsecase.register('David', new PodiumPronostic(2, 3, 1));
        await snailBetUsecase.register('Eve', new PodiumPronostic(3, 1, 2));

        const snailRaceResult = new SnailRaceResult(1, now, [
            new Snail(1, 'Turbo'),
            new Snail(2, 'Flash'),
            new Snail(3, 'Speedy')
        ]);
        resultProvider.addRaceResult(snailRaceResult);

        const winners = await snailBetUsecase.findWinners();
        expect(winners).toEqual([])

    })

    // other snails?
    it("if you register too late, you don't win", async () => {
// given
        //setdate betdate
        let betDate = Date.parse('2020-01-01T00:00:00Z');
        clock.setDate(betDate);
        await snailBetUsecase.register('Alice', new PodiumPronostic(1, 2, 3));

        let raceDate = betDate + 2999;
        const snailRaceResult = new SnailRaceResult(1, raceDate, [
            new Snail(1, 'Turbo'),
            new Snail(2, 'Flash'),
            new Snail(3, 'Speedy')
        ]);
        resultProvider.addRaceResult(snailRaceResult);

        // when
        const winners = await snailBetUsecase.findWinners();

        // then
        expect(winners).toEqual([]);
    })
});