import {Snail, SnailRaceResult, SnailRaceResults} from "../domain/SnailRaceResult"
import {ServerSnailRaceProvider} from "./ServerSnailRaceProvider";
import {FakeSnailRaceProvider} from "./FakeSnailRaceProvider";


function snailRaceProviderContract(serverSnailRaceProvider: ServerSnailRaceProvider) {
    test('return', async () => {

        const snailRaceResults = await serverSnailRaceProvider.getRaces()

        expect(snailRaceResults.results).not.toHaveLength(0)
        expect(snailRaceResults).toBeInstanceOf(SnailRaceResults)

    })
}

describe('Snail race result', () => {
    const serverSnailRaceProvider = new ServerSnailRaceProvider();

    snailRaceProviderContract(serverSnailRaceProvider);
});

describe('Fake snail race provider', () => {
    let fakeSnailRaceProvider = new FakeSnailRaceProvider();
    fakeSnailRaceProvider.addRaceResult(new SnailRaceResult(1, 1, [
        new Snail(1, 'a'),
        new Snail(2, 'b'),
        new Snail(3, 'c')
    ]))
    snailRaceProviderContract(fakeSnailRaceProvider)


    it('should be possible to add race results', async () => {
        const fakeSnailRaceProvider = new FakeSnailRaceProvider()

        const snailRaceResult = new SnailRaceResult(1, 1, [
            new Snail(1, 'Turbo'),
            new Snail(2, 'Flash'),
            new Snail(3, 'Speedy')

        ])

        fakeSnailRaceProvider.addRaceResult(snailRaceResult)

        expect(await fakeSnailRaceProvider.getRaces()).toEqual(new SnailRaceResults([snailRaceResult]))
    });
});