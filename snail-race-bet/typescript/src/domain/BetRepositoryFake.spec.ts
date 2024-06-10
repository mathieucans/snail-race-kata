import {betRepositoryContract} from "./BetRepositoryContract";
import {BetRepositoryFake} from "./BetRepositoryFake";

describe('BetRepositoryFake', () => {
    betRepositoryContract(() => new BetRepositoryFake());
});