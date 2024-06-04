import {betRepositoryContactTest} from "./BetRepositoryContactTest";
import {FakeBetRepository} from "../domain/FakeBetRepository";

describe('FakeBetRepository', () => {
    betRepositoryContactTest(() => new FakeBetRepository());
});