import {betRepositoryContactTest} from "./BetRepositoryContactTest";
import {FakeBetRepository} from "./FakeBetRepository";

describe('FakeBetRepository', () => {
    betRepositoryContactTest(() => new FakeBetRepository());
});