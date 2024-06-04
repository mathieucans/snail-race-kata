import {snailRacesContractTest} from "./SnailRacesContractTest";
import {Podium, Snail, SnailRace, SnailRaces} from "../domain/SnailRacesArena";
import {FakeSnailRacesProvider} from "./FakeSnailRacesProvider";

describe('FakeSnailRacesProvider', () => {
    let fakeSnailRacesProvider: FakeSnailRacesProvider;
    beforeEach(() => {
        const snailRaces = new SnailRaces([
            new SnailRace(1, Date.parse('2021-01-01'), new Podium(new Snail(1, 'Turbo'), new Snail(2, 'Flash'), new Snail(3, 'Speedy'))),
            new SnailRace(2, Date.parse('2021-01-01'), new Podium(new Snail(4, 'The good one'), new Snail(5, 'The bad one'), new Snail(6, 'The ugly one'))),
        ]);
        fakeSnailRacesProvider = new FakeSnailRacesProvider(snailRaces);

    });
    snailRacesContractTest(() => fakeSnailRacesProvider);
});