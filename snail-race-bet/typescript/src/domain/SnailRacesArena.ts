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

export class SnailRaceArena {
    constructor(
        public readonly raceId:number,
        public readonly timestamp:number,
        public readonly podium:Podium
    ) {
    }

}

class SnailRaces {
    constructor(public readonly races:Array<SnailRacesArena>) {
    }
}

export interface SnailRacesArena {
    races(): Promise<SnailRaces>
}