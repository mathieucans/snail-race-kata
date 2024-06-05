import {FakeRaceResultProvider} from "./FakeRaceResultProvider";
import {FakeBetRepository} from "./FakeBetRepository";
import {Podium, Snail} from "./RaceResultProvider";
import {Winners} from "./Winners";
import {Application} from "./Application";


describe('Gambler', () => {

    it('should not win when no Bet is placed', async () => {
        const app = new Application(new FakeBetRepository(), new FakeRaceResultProvider())
        const result = await app.getWinners(Date.parse("2021-01-01T00:00:00Z"))
        expect(result).toEqual(new Winners([]))
    });

    it('should win when the podium exactly matches the bet', async () => {
        const raceResultProvider = new FakeRaceResultProvider();
        const app = new Application(new FakeBetRepository(), raceResultProvider)

        let podium = new Podium(new Snail(1, 'Turbo'), new Snail(2, 'Flash'), new Snail(3, 'Speedy'));
        let betTime = Date.parse("2021-01-01T00:00:00Z");

        await app.placeBet("me",betTime, 1, 2, 3);
        let fourMinutesLater = Date.parse("2021-01-01T00:04:00Z");
        raceResultProvider.simulateRaceResult(fourMinutesLater, podium)
        const result = await app.getWinners(fourMinutesLater)

        expect(result).toEqual(new Winners(["me"]))
    });

    it(`should not win when the podium don't match exactly the bet`, async () => {
        const raceResultProvider = new FakeRaceResultProvider();
        const app = new Application(new FakeBetRepository(), raceResultProvider)

        let podium = new Podium(new Snail(1, 'Turbo'), new Snail(2, 'Flash'), new Snail(3, 'Speedy'));
        let betTime = Date.parse("2021-01-01T00:00:00Z");

        await app.placeBet("me",betTime, 1, 2, 4);
        let fourMinutesLater = Date.parse("2021-01-01T00:04:00Z");
        raceResultProvider.simulateRaceResult(fourMinutesLater, podium)
        const result = await app.getWinners(fourMinutesLater)

        expect(result).toEqual(new Winners([]))

    });
});