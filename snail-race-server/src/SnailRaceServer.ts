import {RandomSnailRace, SnailRaceResult} from "./RandomSnailRace";

const MINUTES = 60*1000;

export class SnailRaceServer {

    private _races: SnailRaceResult[];

    constructor() {
        let generator = new RandomSnailRace();

        this._races = [
            generator.generateNewRaceResult(Date.now()),
            generator.generateNewRaceResult(Date.now() - 5 * MINUTES),
            generator.generateNewRaceResult(Date.now() - 10 * MINUTES),
            generator.generateNewRaceResult(Date.now() - 15 * MINUTES),
            generator.generateNewRaceResult(Date.now() - 20 * MINUTES),
        ];
    }

    races(): Array<SnailRaceResult> {

        return this._races
    }
}