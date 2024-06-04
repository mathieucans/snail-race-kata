import {raceResultProviderContract} from "./RaceResultProviderContract";
import {Podium, Snail, SnailRace, SnailRaces, RaceResultProvider} from "../domain/RaceResultProvider";
import {sortFromMoreRecentToLessRecent} from "./SortFromMoreRecentToLessRecent";

class FakeRaceResultProvider implements RaceResultProvider {
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
        this._races.sort(sortFromMoreRecentToLessRecent)
    }
}

describe('FakeSnailRacesArena', () => {
    const fakeSnailRaceArena = new FakeRaceResultProvider()

    fakeSnailRaceArena.newRaceRecorded();
    fakeSnailRaceArena.newRaceRecorded();


    raceResultProviderContract(fakeSnailRaceArena)
});