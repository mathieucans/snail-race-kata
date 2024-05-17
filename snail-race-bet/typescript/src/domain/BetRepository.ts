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
export interface BetRepository {
    register(bet: Bet) : Promise<void>
    findByDateRange(from : number, to : number) : Promise<Array<Bet>>
}