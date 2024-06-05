import {Podium, Snail, SnailRace, SnailRaces, RaceResultProvider} from "../domain/RaceResultProvider";

type RawSnail = {
    number: number;
    name: string;
    duration: number;
};
type RawRace = {
    raceId: number;
    timestamp: number;
    snails: RawSnail[];
};
type RawRaces = {
    races: RawRace[];
};

function mapToDomain(data: RawRaces): SnailRaces {
    return new SnailRaces(data.races.map(mapRaceToSnailRace));

    function mapToSnail(snail: RawSnail) {
        return new Snail(snail.number, snail.name);
    }

    function mapRaceToSnailRace(race: RawRace) {
        const sortedSnails = race.snails.sort((a: any, b: any) => a.duration - b.duration).map(mapToSnail);

        const podium = new Podium(sortedSnails[0], sortedSnails[1], sortedSnails[2]);
        return new SnailRace(race.raceId, race.timestamp, podium);
    }
}

export class RaceResultProviderHttp implements RaceResultProvider {
    async races(): Promise<SnailRaces> {
        const response = await fetch('http://localhost:8000/results');
        expect(response.status).toEqual(200);
        let data = await response.json();

        return Promise.resolve(mapToDomain(data));
    }
}