import {Bet} from "./Bet";

export interface BetRepository {
    registerBet(bet: Bet) : Promise<void>
    findByDateRange(from : number, to : number) : Promise<Array<Bet>>
}