import {GetWinnersUseCase} from "./GetWinnersUseCase";
import {PlaceBetUseCase} from "./PlaceBetUseCase";
import {Bet, BetRepository} from "./BetRepository";
import {FakeRaceResultProvider} from "./FakeRaceResultProvider";
import {Podium} from "./RaceResultProvider";

export class TestableApplication {
    private getWinnersUsecase: GetWinnersUseCase;
    private placeBetUseCase: PlaceBetUseCase;

    constructor(betRepository: BetRepository, private raceResultProvider: FakeRaceResultProvider) {
        this.getWinnersUsecase = new GetWinnersUseCase(betRepository, raceResultProvider)
        this.placeBetUseCase = new PlaceBetUseCase(betRepository)

    }

    async getWinners(date: number) {
        return await this.getWinnersUsecase.getWinners(date)
    }

    async placeBet(bet: Bet) {
        await this.placeBetUseCase.placeBet(bet)
    }

    simulateRaceResult(datetime: number, podium: Podium) {
        this.raceResultProvider.simulateRaceResult(datetime, podium)

    }
}