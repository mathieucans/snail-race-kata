import {Bet, BetRepository, PodiumPronostic} from "./BetRepository";
import {RaceResultProvider} from "./RaceResultProvider";
import {GetWinnersUseCase} from "./GetWinnersUseCase";
import {PlaceBetUseCase} from "./PlaceBetUseCase";

export class Application {
    private getWinnersUseCase: GetWinnersUseCase;
    private placeBetUseCase: PlaceBetUseCase;
    constructor(private betRepository: BetRepository, private raceResultProvider: RaceResultProvider) {
        this.getWinnersUseCase = new GetWinnersUseCase(betRepository, raceResultProvider)
        this.placeBetUseCase = new PlaceBetUseCase(betRepository)

    }

    async placeBet(gambler: string, timestamp: number, first: number, second: number, third: number) {
        await this.placeBetUseCase.placeBet(new Bet(gambler, new PodiumPronostic(first, second, third), timestamp))
    }

    async getWinners() {
        return await this.getWinnersUseCase.getWinners()
    }


}