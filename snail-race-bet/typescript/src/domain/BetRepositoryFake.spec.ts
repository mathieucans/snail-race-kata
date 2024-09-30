import {betRepositoryContract} from "./BetRepositoryContract";
import {BetRepositoryFake} from "./BetRepositoryFake";

describe('BetRepositoryFake', () => {
    let repository: BetRepositoryFake;
    beforeEach(() => {
        repository = new BetRepositoryFake();
    });

    betRepositoryContract(() => repository)
});