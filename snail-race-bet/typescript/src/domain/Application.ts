import {BetRepository} from "./BetRepository";
import {RaceResultProvider} from "./RaceResultProvider";

export class Application {
    constructor(private betRepository: BetRepository, private raceResultProvider: RaceResultProvider) {

    }

    async placeBet(gambler: string, timestamp: number, first: number, second: number, third: number) {

    }

    async getWinners(date: number) {
        return undefined;
    }
}