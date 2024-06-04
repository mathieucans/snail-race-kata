import {Podium, SnailRaces, SnailRacesArena} from "./SnailRacesArena";

export class FakeSnailRacesProvider implements SnailRacesArena {
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