import {
    ApiRace,
    ApiSnail,
    RaceResultProviderHttpAntiCorruptionLayer
} from './RaceResultProviderHttpAntiCorruptionLayer';
import {Podium, Snail, SnailRace, SnailRaces} from "../domain/RaceResultProvider";

describe('RaceResultProviderHttpAntiCorruptionLayer', () => {

    it('should convert infrastructure data with the right podium', () => {
        const notOnPodium = aApiSnail().withDuration(15.0).build();
        const third = aApiSnail().withDuration(12.5).build();
        const second = aApiSnail().withDuration(10.3).build();
        const first = aApiSnail().withDuration(5.0).build();
        const firstRace = anApiRace().withSnails(third, first, second, notOnPodium).build();
        const raceData = anApiRaces(firstRace);

        const snailRaces = RaceResultProviderHttpAntiCorruptionLayer.mapToDomain(raceData);

        const expectedRace = new SnailRace(
            firstRace.raceId,
            firstRace.timestamp,
            createPodium(first, second, third)
        );
        const expectedSnailRace = new SnailRaces([expectedRace]);

        expect(snailRaces).toEqual(expectedSnailRace);
    });

    function createPodium(
        first: ApiSnail,
        second: ApiSnail,
        third: ApiSnail): Podium {
        return new Podium(
            new Snail(first.number, first.name),
            new Snail(second.number, second.name),
            new Snail(third.number, third.name)
        );
    }

    function anApiRace() {
        return RaceBuilder.aRace();
    }

    function anApiRaces(firstRace: ApiRace) {
        return {races: [firstRace]};
    }

    function aApiSnail() {
        return SnailBuilder.aSnail();
    }

});

class RaceBuilder {
    private raceId: number = Math.floor(Math.random() * 10000 + 1);
    private timestamp: number = Math.floor(Math.random() * 100000 * 100000);
    private snails: ApiSnail[] = [
        SnailBuilder.aSnail().build(),
        SnailBuilder.aSnail().build(),
        SnailBuilder.aSnail().build(),
        SnailBuilder.aSnail().build()
    ];

    static aRace() {
        return new RaceBuilder();
    }

    withSnails(...snails: ApiSnail[]) {
        this.snails = snails;
        return this;
    }

    build(): ApiRace {
        return {
            raceId:this.raceId,
            timestamp:this.timestamp,
            snails: this.snails};
    }
}

class SnailBuilder {
    private number: number = Math.floor(Math.random() * 10000);
    private duration: number = Math.random() * 1000;

    static aSnail() {
        return new SnailBuilder();
    }

    withDuration(duration: number) {
        this.duration = duration;
        return this;
    }

    build(): ApiSnail {
        return {
            number: this.number,
            name: `Snail name ${this.number}`,
            duration: this.duration
        };
    }
}