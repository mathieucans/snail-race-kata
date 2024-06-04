import {Bet, BetRepository} from "../domain/BetRepository";

export class InMemoryBetRepository implements BetRepository {
    private bets : Array<Bet> = []
    async register(bet: Bet): Promise<void> {
        this.bets.push(bet)
    }

    async findByDateRange(from: number, to: number): Promise<Bet[]> {
        return this.bets.filter( bet => bet.timestamp >= from && bet.timestamp <= to);
    }
}