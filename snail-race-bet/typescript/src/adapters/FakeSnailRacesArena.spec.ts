import {snailRaceArenaContract} from "./SnailRaceArenaContract";
import {Podium, Snail, SnailRace, SnailRaces, SnailRacesArena} from "../domain/SnailRacesArena";

class FakeSnailRaceArena implements SnailRacesArena {
    private _races:SnailRace[] = [];

    async races(): Promise<SnailRaces> {
        return new SnailRaces(this._races)
    }


    newRaceRecorded() {

        const race = new SnailRace(
            Math.floor(Math.random()*1000),
        Math.max(...this._races.map(r => r.timestamp), 12345) + 300000,
            new Podium(
                new Snail(11, "Curtis"),
                new Snail(12, "John"),
                new Snail(13, "Bobby"),
            ));
        this._races.push(race)
    }
}

describe('FakeSnailRacesArena', () => {
    const fakeSnailRaceArena = new FakeSnailRaceArena()

    fakeSnailRaceArena.newRaceRecorded();
    fakeSnailRaceArena.newRaceRecorded();


    snailRaceArenaContract(fakeSnailRaceArena)
});