import {Podium, SnailRaces, SnailRacesArena} from "../domain/SnailRacesArena";

export class FakeSnailRacesProvider implements SnailRacesArena {
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