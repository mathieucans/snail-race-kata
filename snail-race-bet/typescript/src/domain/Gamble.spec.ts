import {FakeSnailRacesProvider} from "./FakeSnailRacesProvider";
import {FakeBetRepository} from "./FakeBetRepository";
import {Bet, PodiumPronostic} from "./BetRepository";
import {Podium, Snail} from "./SnailRacesArena";
import {Winners} from "./Winners";
import {TestableApplication} from "./TestableApplication";


describe('Gamble', () => {
    it('should not when no Bet is placed', async () => {
        const app = new TestableApplication(new FakeBetRepository(), new FakeSnailRacesProvider())
        const result = await app.getWinners(Date.parse("2021-01-01T00:00:00Z"))
        expect(result).toEqual(new Winners([]))
    });

    it('should win when the podium exactly matches the bet', async () => {
        const app = new TestableApplication(new FakeBetRepository(), new FakeSnailRacesProvider())

        let podium = new Podium(new Snail(1, 'Turbo'), new Snail(2, 'Flash'), new Snail(3, 'Speedy'));
        let betTime = Date.parse("2021-01-01T00:00:00Z");

        await app.placeBet(new Bet("me", new PodiumPronostic(1, 2, 3), betTime));
        let fourMinutesLater = Date.parse("2021-01-01T00:04:00Z");
        app.simulateRaceResult(fourMinutesLater, podium)
        const result = await app.getWinners(fourMinutesLater)

        expect(result).toEqual(new Winners(["me"]))

    });
});