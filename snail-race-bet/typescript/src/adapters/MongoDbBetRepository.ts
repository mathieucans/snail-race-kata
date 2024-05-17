import {Db} from "mongodb";
import {Bet, BetRepository} from "../domain/BetRepository";

export class MongoDbBetRepository implements BetRepository {
    constructor(private db: Db) {
    }

    register(bet: Bet): Promise<void> {
        throw new Error("Method not implemented.");
    }
    findByDateRange(from: number, to: number): Promise<Bet[]> {
        throw new Error("Method not implemented.");
    }

    private getCollection() {
        return this.db.collection('bets');
    }
}