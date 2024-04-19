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
        public readonly first: number,
        public readonly second: number,
        public readonly third: number
    ) {

    }
}