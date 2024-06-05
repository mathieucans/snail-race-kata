import {Db} from "mongodb";
import {Bet, BetRepository, PodiumPronostic} from "../domain/BetRepository";

export class MongoDbBetRepository implements BetRepository {
    constructor(private db: Db) {
    }

    async register(bet: Bet): Promise<void> {
        await this.getCollection().insertOne({...bet});
    }
    async findByDateRange(from: number, to: number): Promise<Bet[]> {
        return this.getCollection().find({
            timestamp: {
                $gte: from,
                $lt: to
            }
        }, ).map((d) => new Bet(d.gambler, d.pronostic, d.timestamp)).toArray()
    }

    private getCollection() {
        return this.db.collection('bets');
    }
}