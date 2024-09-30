import {Db} from "mongodb";
import {Bet, BetRepository, PodiumPronostic} from "../domain/BetRepository";

export class BetRepositoryMongoDb implements BetRepository {
    constructor(private db: Db) {
    }

    async register(bet: Bet): Promise<void> {
        await this.getCollection().insertOne({
            ...bet
        })
    }

    async findByDateRange(from: number, to: number): Promise<Bet[]> {
        return await this.getCollection()
            .find({
                timestamp: {$gte : from, $lt:to}
            })
            .map(doc => new Bet(
                doc.gambler,
                new PodiumPronostic(doc.pronostic.first, doc.pronostic.second, doc.pronostic.third),
                doc.timestamp
            ))
            .toArray()
    }

    private getCollection() {
        return this.db.collection('bets');
    }
}