import {Podium, RaceResultProvider, Snail, SnailRace, SnailRaces} from "../domain/RaceResultProvider";

interface SnailResponse {
    name: string
    number: number,
    duration: number
}

interface RaceResponse {
    raceId: number,
    timestamp: number,
    snails: SnailResponse[],
}

interface RacesResponse {
    races: RaceResponse[]
}

function sortByDuration(a: SnailResponse, b: SnailResponse) {
    if (a.duration < b.duration) return -1
    if (a.duration > b.duration) return 1
    return 0
}

export function parseResponse(jsonresponse: RacesResponse) {
    return new SnailRaces(jsonresponse.races.map(race => {
            const snailRaceOrder = race.snails.sort(sortByDuration);
            return new SnailRace(race.raceId,
                race.timestamp,
                new Podium(
                    new Snail(snailRaceOrder[0].number, snailRaceOrder[0].name),
                    new Snail(snailRaceOrder[1].number, snailRaceOrder[1].name),
                    new Snail(snailRaceOrder[2].number, snailRaceOrder[2].name),
                )
            );
        }
    ));
}

export class ServerRaceResultProvider implements RaceResultProvider {
    async races(): Promise<SnailRaces> {
        const response = await fetch('http://localhost:8000/results');

        const jsonresponse = await response.json();

        return parseResponse(jsonresponse);
    }
}