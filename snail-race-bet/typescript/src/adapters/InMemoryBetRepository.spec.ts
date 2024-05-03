import {ContractTest} from "./BetRepositoryContractTest";
import {InMemoryBetRepository} from "./InMemoryBetRepository";

describe('InMemoryBetRepository', () => {

    let  contractTest = new ContractTest(

    )

    beforeEach(async () => {

        const repository = new InMemoryBetRepository();

        contractTest.withRepo(repository)
    })


    contractTest.registerTests()

});