import {BetRepository} from "./BetRepository";
import {RaceResultProvider} from "./RaceResultProvider";
import {Winners} from "./Winners";

export class GetWinnersUseCase {
    constructor(private betRepository: BetRepository, private raceResultProvider: RaceResultProvider) {

    }

    async getWinners(date: number) {
        const bets = await this.betRepository.findByDateRange(0, date)

        return new Winners(bets.map(bet => bet.gambler))
    }
}