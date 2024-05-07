import {SnailRaceProvider} from "../domain/SnailRaceProvider";
import {Snail, SnailRaceResult, SnailRaceResults} from "../domain/SnailRaceResult";

export class FakeSnailRaceProvider implements SnailRaceProvider {
    private snailRaceResults: any  = [];


    async getRaces(): Promise<SnailRaceResults> {
        return new SnailRaceResults(this.snailRaceResults)
    }

    addRaceResult(snailRaceResult: SnailRaceResult) {
        this.snailRaceResults.push(snailRaceResult)

    }
}