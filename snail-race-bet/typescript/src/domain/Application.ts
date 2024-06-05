import {BetRepository} from "./BetRepository";
import {SnailRacesArena} from "./SnailRacesArena";

export class Application {
    constructor(private fakeBetRepository: BetRepository, private raceResultProvider: SnailRacesArena) {

    }

    async placeBet(gambler: string, timestamp: number, first: number, second: number, third: number) {

    }

    async getWinners(date: number) {
        return undefined;
    }
}