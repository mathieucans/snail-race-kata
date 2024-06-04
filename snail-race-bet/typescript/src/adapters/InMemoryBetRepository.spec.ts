import {betRepositoryContract} from "./BetRepositoryContract";
import {InMemoryBetRepository} from "./InMemoryBetRepository";

describe('InMemoryBetRepository', () => {
    let repository: InMemoryBetRepository;

    beforeEach(async () => {
        repository = new InMemoryBetRepository();
    })

    betRepositoryContract(() => repository)

})