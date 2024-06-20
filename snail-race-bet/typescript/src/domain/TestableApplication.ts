import {BetApplication} from "./BetApplication";
import {RaceResultProviderFake} from "./RaceResultProviderFake";
import {BetRepositoryFake} from "./BetRepositoryFake";
import {Podium} from "./RaceResultProvider";

export class TestableApplication {
    private readonly app: BetApplication;
    private readonly fakeRaceResultProvider: RaceResultProviderFake;

    constructor() {
        this.fakeRaceResultProvider = new RaceResultProviderFake();
        this.app = new BetApplication(new BetRepositoryFake(), this.fakeRaceResultProvider);
    }

    async getWinnersForLastRace() {
        return this.app.getWinnersForLastRace()
    }

    async placeBet(gambler: string, timestamp: number, first: number, second: number, third: number) {
        return this.app.placeBet(gambler, timestamp, first, second, third)
    }

    simulateRaceResult(date: number, podium: Podium) {
        this.fakeRaceResultProvider.simulateRaceResult(594,date, podium)
    }
}