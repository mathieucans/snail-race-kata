export class Bet {
    constructor(
        public gambler : string,
        public pronostic :  PodiumPronostic,
        public timestamp : number
    ) {
    }
}

export class PodiumPronostic {
    constructor(
        public readonly first: Number,
        public readonly second: Number,
        public readonly third: Number
    ) {

    }
}