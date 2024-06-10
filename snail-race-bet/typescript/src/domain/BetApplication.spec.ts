import {RaceResultProviderFake} from "./RaceResultProviderFake";
import {BetRepositoryFake} from "./BetRepositoryFake";
import {BetApplication} from "./BetApplication";
import {Winners} from "./Winners";

describe('BetApplication', () => {
    let raceResultProvider: RaceResultProviderFake;
    let app: BetApplication;

    beforeEach(() => {
        raceResultProvider = new RaceResultProviderFake()
        app = new BetApplication(new BetRepositoryFake(), raceResultProvider);

    });
    it('no winners when no Bet is placed', async () => {
        expect(await app.getWinnersForLastRace()).toEqual(new Winners([]));
    });

    it('win when the podium exactly matches the bet', () => {

    });
});