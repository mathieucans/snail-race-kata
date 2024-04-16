import {Db} from "mongodb";
import {BetRepository} from "../domain/BetRepository";
import { Bet } from "../domain/Bet";

export class MongoDbBetRepository implements BetRepository {
    constructor(private db: Db) {
    }

    registerBet(bet: Bet): Promise<void> {
        throw new Error("Method not implemented.");
    }
    findByDateRange(from: number, to: number): Promise<Bet[]> {
        throw new Error("Method not implemented.");
    }

    private getCollection() {
        return this.db.collection('bets');
    }
}