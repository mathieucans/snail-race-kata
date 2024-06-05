import {Podium, SnailRaces, RaceResultProvider} from "./RaceResultProvider";

export class FakeRaceResultProvider implements RaceResultProvider {
    private snailRaces: SnailRaces;

    constructor(snailRaces?: SnailRaces) {
        this.snailRaces = snailRaces || new SnailRaces([]);

    }

    async races(): Promise<SnailRaces> {
        return this.snailRaces;
    }

    simulateRaceResult(datetime: number, podium: Podium) {
        this.snailRaces = SnailRaces.withPodium(this.snailRaces, datetime, podium);
    }
}