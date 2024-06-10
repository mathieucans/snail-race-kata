import {Application} from "./Application";
import {FakeRaceResultProvider} from "./FakeRaceResultProvider";
import {BetRepositoryFake} from "./BetRepositoryFake";
import {Podium} from "./RaceResultProvider";

export class TestableApplication {
    private readonly app: Application;
    private readonly fakeRaceResultProvider: FakeRaceResultProvider;

    constructor() {
        this.fakeRaceResultProvider = new FakeRaceResultProvider();
        this.app = new Application(new BetRepositoryFake(), this.fakeRaceResultProvider);
    }

    async getWinners() {
        return this.app.getWinners()
    }

    async placeBet(gambler: string, timestamp: number, first: number, second: number, third: number) {
        return this.app.placeBet(gambler, timestamp, first, second, third)
    }

    simulateRaceResult(date: number, podium: Podium) {
        this.fakeRaceResultProvider.simulateRaceResult(date, podium)
    }
}