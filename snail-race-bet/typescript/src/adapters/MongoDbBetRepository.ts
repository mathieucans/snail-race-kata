import {Db} from "mongodb";
import {BetRepository} from "../domain/BetRepository";
import { Bet } from "../domain/Bet";

export class MongoDbBetRepository implements BetRepository {
    constructor(private db: Db) {
    }

    async register(bet: Bet): Promise<void> {
        await this.getCollection().insertOne({...bet});

    }
    async findByDateRange(from: number, to: number): Promise<Bet[]> {
        let listOfDocs = await this.getCollection().find().toArray();
        return listOfDocs.map(doc => new Bet(doc.gambler, doc.pronostic, doc.timestamp));
    }

    private getCollection() {
        return this.db.collection('bets');
    }
}