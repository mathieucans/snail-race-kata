import {BetRepository} from "../domain/BetRepository";
import {MongoClient} from "mongodb";
import {Bet, PodiumPronostic} from "../domain/Bet";

export class ContractTest {
    private repository!: BetRepository;

    withRepo(repository: BetRepository) {
        this.repository = repository;
    }

    registerTests() {

        test('get a bet within the time range', async () => {
            let middleOfDay = new Date(2020, 1, 1, 12, 0, 0).getTime();
            let registeredBet = new Bet("trump", new PodiumPronostic(1, 2, 3), middleOfDay);
            await this.repository.register(registeredBet)

            let startOfDay = new Date(2020, 1, 1, 0, 0, 0).getTime();
            let endOfDay = new Date(2020, 1, 1, 23, 59, 59).getTime();
            const bets = await this.repository.findByDateRange(startOfDay, endOfDay)

            expect(bets).toHaveLength(1)
            expect(bets).toContainEqual(registeredBet)
        })

        // TODO rename with do not retrive bets outside date range
        test('retrieve bet by time range', async () => {
            let nextDay = new Date(2020, 1, 2, 0, 0, 0).getTime();
            let registeredBet = new Bet("trump", new PodiumPronostic(1, 2, 3), nextDay);
            await this.repository.register(registeredBet)

            let startOfDay = new Date(2020, 1, 1, 0, 0, 0).getTime();
            let endOfDay = new Date(2020, 1, 1, 23, 59, 59).getTime();
            const bets = await this.repository.findByDateRange(startOfDay, endOfDay)

            expect(bets).toHaveLength(0)


        })
    }
}