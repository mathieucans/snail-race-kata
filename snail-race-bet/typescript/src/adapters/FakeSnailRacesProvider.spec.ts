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

    it('should allow for simulation even after instantiation', async () => {
        fakeSnailRacesProvider.simulateRaceResult(3, Date.parse('2021-01-02'), new Podium(new Snail(10, 'The winner'), new Snail(11, 'The loser'), new Snail(12, 'The cheater')));
        let races = await fakeSnailRacesProvider.races();
        expect(races.races).toHaveLength(3)
    });
});