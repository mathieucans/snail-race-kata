import {Bet, BetRepository} from "./BetRepository";

export class PlaceBetUseCase {
    constructor(private betRepository: BetRepository) {

    }

    async placeBet(bet: Bet) {
        await this.betRepository.register(bet)
    }
}