import {Bet} from "./Bet";

export interface BetRepository {
    register(bet: Bet) : Promise<void>
    findByDateRange(from : number, to : number) : Promise<Array<Bet>>
}