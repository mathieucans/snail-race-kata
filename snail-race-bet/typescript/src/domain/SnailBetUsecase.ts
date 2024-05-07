import {BetRepository} from "./BetRepository";
import {FakeSnailRaceProvider} from "../adapters/FakeSnailRaceProvider";
import {Bet, PodiumPronostic} from "./Bet";
import {FakeClock} from "./FakeClock";

export class SnailBetUsecase {
    constructor(private repository: BetRepository, private resultProvider: FakeSnailRaceProvider, private clock: FakeClock) {

    }

    async register(gamblerName: string, podiumPronostic: PodiumPronostic) {
        await this.repository.register(new Bet(gamblerName, podiumPronostic, this.clock.now()))

    }

    async findWinners(): Promise<string[]> {
        let allBets = await this.repository.findByDateRange(0, this.clock.now());
        let raceResults = await this.resultProvider.getRaces();
        let raceResult = raceResults.results[0]; // TODO only last race
        return allBets.filter(bet => {
            let isBeforeLimit = bet.timestamp < raceResult.timestamp - 3000;
            return isBeforeLimit && bet.pronostic.first === raceResult.podium[0].number &&
                bet.pronostic.second === raceResult.podium[1].number &&
                bet.pronostic.third === raceResult.podium[2].number;
        }).map(bet => bet.gambler);

    }
}