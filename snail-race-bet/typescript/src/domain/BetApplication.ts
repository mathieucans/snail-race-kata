import {BetRepository} from "./BetRepository";
import {RaceResultProvider} from "./RaceResultProvider";
import {Winners} from "./Winners";

export class BetApplication {
    constructor(
        private betRepository: BetRepository,
        private raceResultProvider: RaceResultProvider) {

    }

    async placeBet(gambler: string, timestamp: number, first: number, second: number, third: number) : Promise<void> {
        throw 'Not yet implemented'
    }

    async getWinnersForLastRace() : Promise<Winners> {
        throw 'Not yet implemented'
    }
}