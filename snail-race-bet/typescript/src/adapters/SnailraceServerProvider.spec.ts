import {Snail, SnailRaceResult, SnailRaceResults} from "../domain/SnailRaceResult"
import {ServerSnailRaceProvider} from "./ServerSnailRaceProvider";
import {SnailRaceProvider} from "../domain/SnailRaceProvider";


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

class FakeSnailRaceProvider implements SnailRaceProvider {
    async getRaces(): Promise<SnailRaceResults> {
        return new SnailRaceResults([new SnailRaceResult(123, 123456, [
            new Snail(5,'jo'),
            new Snail(8,'arthur'),
            new Snail(10,'iris'),
        ])])
    }
}

describe('Fake snail race provider', () => {
    snailRaceProviderContract(new FakeSnailRaceProvider())
});