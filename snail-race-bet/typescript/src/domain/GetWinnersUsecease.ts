import {BetRepository} from "./BetRepository";
import {SnailRacesArena} from "./SnailRacesArena";
import {Winners} from "./Winners";

export class GetWinnersUsecease {
    constructor(private betRepository: BetRepository, private snailRacesArena: SnailRacesArena) {

    }

    async getWinners(date: number) {
        const bets = await this.betRepository.findByDateRange(0, date)

        return new Winners(bets.map(bet => bet.gambler))
    }
}