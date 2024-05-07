import {Snail, SnailRaceResult} from "./SnailRaceResult";
import {InMemoryBetRepository} from "../adapters/InMemoryBetRepository";
import {Bet, PodiumPronostic} from "./Bet";
import {BetRepository} from "./BetRepository";

class SnailBetUsecase {
    constructor(private repository: BetRepository) {

    }

    register(gamblerName: string, podiumPronostic: PodiumPronostic) {

    }

    findWinners(): string[] {
        return ["Alice"]

    }
}

describe('SnailBetUsecase', () => {
    it('should list the gamblers that find the exact podium', () => {
        // given
        const snailRaceResult = new SnailRaceResult(1, 1, [
            new Snail(1, 'Turbo'),
            new Snail(2, 'Flash'),
            new Snail(3, 'Speedy')
        ]);
        const snailBetUsecase = new SnailBetUsecase(new InMemoryBetRepository());
        snailBetUsecase.register('Alice', new PodiumPronostic(1, 2, 3));

        // when
        const winners = snailBetUsecase.findWinners();

        // then
        expect(winners).toEqual(['Alice']);
    });

    it("if you dont have the exact podium, you don't win", () => {
// given
        const snailRaceResult = new SnailRaceResult(1, 1, [
            new Snail(1, 'Turbo'),
            new Snail(2, 'Flash'),
            new Snail(3, 'Speedy')
        ]);
        const snailBetUsecase = new SnailBetUsecase(new InMemoryBetRepository());
        snailBetUsecase.register('Frank', new PodiumPronostic(3, 2, 1));
        snailBetUsecase.register('Bob', new PodiumPronostic(1, 3, 2));
        snailBetUsecase.register('Charlie', new PodiumPronostic(2, 1, 3));
        snailBetUsecase.register('David', new PodiumPronostic(2, 3, 1));
        snailBetUsecase.register('Eve', new PodiumPronostic(3, 1, 2));

        const winners = snailBetUsecase.findWinners();
        expect(winners).toEqual([])

    })
    it.todo("if you register too late, you don't win")
});