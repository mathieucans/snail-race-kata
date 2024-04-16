import {RandomSnailRace, SnailRaceResult} from "./RandomSnailRace";

export class SnailRaceServer {

    races(): Array<SnailRaceResult> {
        let generator = new RandomSnailRace();
        return [
            generator.generateNewRaceResult(),
            generator.generateNewRaceResult(),
            generator.generateNewRaceResult(),
            generator.generateNewRaceResult(),
            generator.generateNewRaceResult(),
        ]
    }
}