import {GetWinnersUsecease} from "./GetWinnersUsecease";
import {PlaceBetUseCase} from "./PlaceBetUseCase";
import {Bet, BetRepository} from "./BetRepository";
import {FakeSnailRacesProvider} from "../adapters/FakeSnailRacesProvider";
import {Podium} from "./SnailRacesArena";

export class TestableApplication {
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