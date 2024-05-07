import {SnailRaceResults} from "./SnailRaceResult";

export interface SnailRaceProvider {
    getRaces(): Promise<SnailRaceResults>;
}