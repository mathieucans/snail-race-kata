import {Snail, SnailRaceResult, SnailRaceResults} from "../domain/SnailRaceResult"
import {parseSnailRaceResult, ServerSnailRaceProvider} from "./ServerSnailRaceProvider";


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

