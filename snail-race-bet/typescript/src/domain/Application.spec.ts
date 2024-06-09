import {RaceResultProvider} from "./RaceResultProvider";
import {FakeSnailRacesProvider} from "./FakeSnailRacesProvider";
import {FakeBetRepository} from "./FakeBetRepository";
import {Application} from "./Application";
import {Winners} from "./Winners";

describe('SnailGamblingApplication', () => {
    let raceResultProvider: FakeSnailRacesProvider;
    let app: Application;

    beforeEach(() => {
        raceResultProvider = new FakeSnailRacesProvider()
        app = new Application(new FakeBetRepository(), raceResultProvider);

    });
    it('no winners when no Bet is placed', async () => {
        expect(await app.getWinners(Date.now())).toEqual(new Winners([]));
    });

    it('win when the podium exactly matches the bet', () => {

    });
});