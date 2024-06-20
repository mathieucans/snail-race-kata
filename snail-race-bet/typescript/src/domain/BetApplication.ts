import {Bet, BetRepository, PodiumPronostic} from "./BetRepository";
import {RaceResultProvider} from "./RaceResultProvider";
import {GetWinnersForLastRaceUseCase} from "./GetWinnersForLastRaceUseCase";
import {PlaceBetUseCase} from "./PlaceBetUseCase";

export class BetApplication {
    private getWinnersUseCase: GetWinnersForLastRaceUseCase;
    private placeBetUseCase: PlaceBetUseCase;
    constructor(private betRepository: BetRepository, private raceResultProvider: RaceResultProvider) {
        this.getWinnersUseCase = new GetWinnersForLastRaceUseCase(betRepository, raceResultProvider)
        this.placeBetUseCase = new PlaceBetUseCase(betRepository)

    }

    async placeBet(gambler: string, timestamp: number, first: number, second: number, third: number) {
        await this.placeBetUseCase.placeBet(new Bet(gambler, new PodiumPronostic(first, second, third), timestamp))
    }

    async getWinnersForLastRace() {
        return await this.getWinnersUseCase.getWinnersForLastRace()
    }


}