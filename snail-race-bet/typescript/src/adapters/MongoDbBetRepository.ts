import {Db} from "mongodb";
import {Bet, BetRepository, PodiumPronostic} from "../domain/BetRepository";

export class MongoDbBetRepository implements BetRepository {
    constructor(private db: Db) {
    }

    async register(bet: Bet): Promise<void> {
        await this.getCollection().insertOne({...bet})
    }
    async findByDateRange(from: number, to: number): Promise<Bet[]> {
        const documents = await this.getCollection()
            .find({'timestamp' : {
                $gte:from,
                $lte:to
                }})
            .toArray();
        return documents.map(doc => {
            return new Bet(
                doc.gambler,
                new PodiumPronostic(doc.pronostic.first, doc.pronostic.second, doc.pronostic.third),
                doc.timestamp)
        })
    }

    private getCollection() {
        return this.db.collection('bets');
    }
}