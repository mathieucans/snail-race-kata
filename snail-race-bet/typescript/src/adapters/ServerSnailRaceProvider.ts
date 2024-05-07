import {Snail, SnailRaceResult, SnailRaceResults} from "../domain/SnailRaceResult";
import {SnailRaceProvider} from "../domain/SnailRaceProvider";


export interface SnailRaceResultBody {
    races: Race[]
}

export interface Race {
    podium: Podium[]
    raceId: number
    timestamp: number
}

export interface Podium {
    name: string
    number: number
}

export function parseSnailRaceResult(input: SnailRaceResultBody): SnailRaceResult[] {
    return input.races.map((race) => {
        return new SnailRaceResult(race.raceId, race.timestamp, race.podium.map((snail) => {
            return new Snail(snail.number, snail.name)
        }))
    })

}

export class ServerSnailRaceProvider implements SnailRaceProvider {
    async getRaces() : Promise<SnailRaceResults> {
        const response = await fetch('http://localhost:8000/results')

        let result: any = await response.json();

        return new SnailRaceResults(parseSnailRaceResult(result))

    }
}