import {Podium, SnailRaces, RaceResultProvider} from "./RaceResultProvider";

export class RaceResultProviderFake implements RaceResultProvider {
    private snailRaces: SnailRaces;

    constructor(snailRaces?: SnailRaces) {
        this.snailRaces = snailRaces || new SnailRaces([]);

    }

    async races(): Promise<SnailRaces> {
        return this.snailRaces;
    }

    simulateRaceResult(raceId: number, datetime: number, podium: Podium) {
        this.snailRaces = SnailRaces.withAdditionalResult(this.snailRaces, raceId, datetime, podium);
    }
}