import {BetRepository, PodiumPronostic} from "./BetRepository";
import {Podium, RaceResultProvider} from "./RaceResultProvider";
import {Winners} from "./Winners";

function matchExactly(pronostic: PodiumPronostic, podium: Podium) : boolean {
    return pronostic.first === podium.first.number
        && pronostic.second === podium.second.number
        && pronostic.third === podium.third.number;
}

const noWinner = new Winners([]);
const threeSeconds = 3000

export class GetWinnersUseCase {
    constructor(private betRepository: BetRepository, private raceResultProvider: RaceResultProvider) {

    }

    async getWinners(date: number) {
        const bets = await this.betRepository.findByDateRange(0, date)
        const results = await this.raceResultProvider.races();

        if(results.races.length ===0 ){
            return noWinner;
        }
        const lastRace = results.races[0];
        const lastRacePodium = lastRace.podium;

        return new Winners(bets
            .filter(bet => bet.timestamp <= lastRace.timestamp - threeSeconds)
            .filter(bet => matchExactly(bet.pronostic, lastRacePodium))
            .map(bet => bet.gambler))
    }
}