import {BetRepository} from "../domain/BetRepository";
import {Bet} from "../domain/Bet";

export class InMemoryBetRepository implements BetRepository {
    private bets: Bet[] = [];

    async findByDateRange(from: number, to: number): Promise<Array<Bet>> {
        return this.bets.filter(bet => bet.timestamp >= from && bet.timestamp <= to)
    }

    async register(bet: Bet): Promise<void> {
        this.bets.push(bet)
    }
}