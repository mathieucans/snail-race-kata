import example from './example.json'
import {SnailRace, SnailRaces} from "../domain/RaceResultProvider";

interface SnailResponse {
    name: string
    number:number,
    duration:number
}

interface RaceResponse {
    raceId:number,
    timestamp:number,
    snails:SnailResponse[],
}

interface RacesResponse {
    races : RaceResponse[]
}

function sortByDuration(a : SnailResponse, b : SnailResponse) {
    if (a.duration < b.duration ) return -1
    if (a.duration > b.duration ) return 1
    return 0
}

function parseResponse(jsonresponse: RacesResponse) {
    return new SnailRaces(jsonresponse.races.map(race =>
    new SnailRace(race.raceId,
        race.snails.sort(sortByDuration),
        race.timestamp)
    ));
}

describe('RestSnailraceArena', () => {
    test.skip('discover api', async () => {
        const response = await fetch('http://localhost:8000/results');

        const jsonresponse = await response.json();
        expect(parseResponse(jsonresponse)).toBeInstanceOf(SnailRaces)

        expect(jsonresponse).toEqual(example)
    });


    test('parsing', () => {
        const races = parseResponse(example);
        expect(races).toBeInstanceOf(SnailRaces)
        expect(races.races[1]).toEqual(new SnailRace(989376, 1716821785381, new Podium(
            new Snail(6, "Black Caviar"),
            new Snail(3, "Seabiscuit"),
            new Snail(19, "Winx"),
        )))

    })

});