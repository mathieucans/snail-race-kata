import {RaceResultProvider} from "./RaceResultProvider";
import {RaceResultProviderFake} from "./RaceResultProviderFake";
import {BetRepositoryFake} from "./BetRepositoryFake";
import {Application} from "./Application";
import {Winners} from "./Winners";

describe('SnailGamblingApplication', () => {
    let raceResultProvider: RaceResultProviderFake;
    let app: Application;

    beforeEach(() => {
        raceResultProvider = new RaceResultProviderFake()
        app = new Application(new BetRepositoryFake(), raceResultProvider);

    });
    it('no winners when no Bet is placed', async () => {
        expect(await app.getWinners(Date.now())).toEqual(new Winners([]));
    });

    it('win when the podium exactly matches the bet', () => {

    });
});