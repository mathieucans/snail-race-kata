export class Snail {
    constructor(
        public readonly number: number,
        public readonly name: string,
    ) {
    }
}

export class Podium {
    constructor(
        public readonly first: Snail,
        public readonly second: Snail,
        public readonly third: Snail
    ) {
    }
}

export class SnailRace {
    constructor(
        public readonly raceId:number,
        public readonly timestamp:number,
        public readonly podium:Podium
    ) {
    }

}

export class SnailRaces {
    constructor(public readonly races:Array<SnailRace>) {
    }

    static withPodium(snailRaces: SnailRaces, datetime: number, podium: Podium) {
        return new SnailRaces([...snailRaces.races, new SnailRace(999, datetime, podium)]);
    }
}

export interface RaceResultProvider {
    races(): Promise<SnailRaces>
}