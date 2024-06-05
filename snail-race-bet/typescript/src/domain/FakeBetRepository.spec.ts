import {betRepositoryContract} from "./BetRepositoryContract";
import {FakeBetRepository} from "./FakeBetRepository";

describe('FakeBetRepository', () => {
    betRepositoryContract(() => new FakeBetRepository());
});