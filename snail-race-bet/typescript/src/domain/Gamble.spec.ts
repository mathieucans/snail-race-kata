import {FakeSnailRacesProvider} from "../adapters/FakeSnailRacesProvider";
import {FakeBetRepository} from "../adapters/FakeBetRepository";
import {Bet, BetRepository, PodiumPronostic} from "./BetRepository";
import {Podium, Snail, SnailRacesArena} from "./SnailRacesArena";
import {Winners} from "./Winners";


class GetWinnersUsecease {
    constructor(private betRepository: BetRepository, private snailRacesArena: SnailRacesArena) {

    }

    async getWinners(date: number) {
        const bets = await this.betRepository.findByDateRange(0, date)

        return new Winners(bets.map(bet => bet.gambler))
    }
}

class PlaceBetUseCase {
    constructor(private betRepository: BetRepository) {

    }

    async placeBet(bet: Bet) {
        await this.betRepository.register(bet)
    }
}

class TestableApplication {
    private getWinnersUsecase: GetWinnersUsecease;
    private placeBetUseCase: PlaceBetUseCase;
    constructor(betRepository: BetRepository, private snailRacesArena: FakeSnailRacesProvider) {
        this.getWinnersUsecase = new GetWinnersUsecease(betRepository, snailRacesArena)
        this.placeBetUseCase = new PlaceBetUseCase(betRepository)

    }

    async getWinners(date: number) {
        return await this.getWinnersUsecase.getWinners(date)
    }

    async placeBet(bet: Bet) {
        await this.placeBetUseCase.placeBet(bet)
    }

    simulateRaceResult(datetime: number, podium: Podium) {
        this.snailRacesArena.simulateRaceResult(datetime, podium)

    }
}

describe('Gamble', () => {
    it('should not when no Bet is placed', async () => {
        const app = new TestableApplication(new FakeBetRepository(), new FakeSnailRacesProvider())
        const result = await app.getWinners(Date.parse("2021-01-01T00:00:00Z"))
        expect(result).toEqual(new Winners([]))
    });

    it('should win when the podium exactly matches the bet', async () => {
        const app = new TestableApplication(new FakeBetRepository(), new FakeSnailRacesProvider())

        let podium = new Podium(new Snail(1, 'Turbo'), new Snail(2, 'Flash'), new Snail(3, 'Speedy'));
        let betTime = Date.parse("2021-01-01T00:00:00Z");

        await app.placeBet(new Bet("me", new PodiumPronostic(1, 2, 3), betTime));
        let fourMinutesLater = Date.parse("2021-01-01T00:04:00Z");
        app.simulateRaceResult(fourMinutesLater, podium)
        const result = await app.getWinners(fourMinutesLater)

        expect(result).toEqual(new Winners(["me"]))

    });
});