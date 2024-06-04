
import {SnailRaces, RaceResultProvider} from "../domain/RaceResultProvider";
import {parseServerSnailRaceArenaResponse} from "./ParseServerSnailRaceArenaResponse";

export class ServerRaceResultProvider implements RaceResultProvider {
    async races(): Promise<SnailRaces> {
        const response = await fetch('http://localhost:8000/results');

        const jsonresponse = await response.json();

        return parseServerSnailRaceArenaResponse(jsonresponse);
    }
}