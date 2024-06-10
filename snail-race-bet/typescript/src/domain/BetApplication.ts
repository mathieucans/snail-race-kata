import {BetRepository} from "./BetRepository";
import {RaceResultProvider} from "./RaceResultProvider";

export class BetApplication {
    constructor(
        private betRepository: BetRepository,
        private raceResultProvider: RaceResultProvider) {

    }

    async placeBet(gambler: string, timestamp: number, first: number, second: number, third: number) {

    }

    async getWinnersForLastRace() {
        return undefined;
    }
}