import {betRepositoryContactTest} from "./BetRepositoryContactTest";
import {BetRepositoryFake} from "./BetRepositoryFake";

describe('BetRepositoryFake', () => {
    betRepositoryContactTest(() => new BetRepositoryFake());
});