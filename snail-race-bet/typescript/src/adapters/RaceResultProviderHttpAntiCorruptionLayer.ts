import {Podium, Snail, SnailRace, SnailRaces} from "../domain/RaceResultProvider";

export type ApiSnail = {
    number: number;
    name: string;
    duration: number;
};
export type ApiRace = {
    raceId: number;
    timestamp: number;
    snails: ApiSnail[];
};
export type ApiRaces = {
    races: ApiRace[];
};

export class RaceResultProviderHttpAntiCorruptionLayer {
    static mapToDomain(data: ApiRaces): SnailRaces {
        return new SnailRaces(data.races.map(this.mapRaceToSnailRace));

    }

    private static mapRaceToSnailRace(race: ApiRace) {
        return new SnailRace(
            race.raceId,
            race.timestamp,
            RaceResultProviderHttpAntiCorruptionLayer.createPodium(race));
    }

    private static createPodium(race: ApiRace) {
        const sortedSnails = race.snails
            .sort((a: ApiSnail, b: ApiSnail) => a.duration - b.duration)
            .map(this.mapToSnail);

        return new Podium(
            sortedSnails[0],
            sortedSnails[1],
            sortedSnails[2]);
    }

    private static mapToSnail(snail: ApiSnail) {
        return new Snail(snail.number, snail.name);
    }

}