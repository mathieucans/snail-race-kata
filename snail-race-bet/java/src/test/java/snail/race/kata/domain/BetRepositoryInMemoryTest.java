package snail.race.kata.domain;

import org.junit.jupiter.api.BeforeEach;

public class BetRepositoryInMemoryTest extends BetRepositoryContract {

    private BetRepositoryInMemory repository;

    @BeforeEach
    void setup(){
        repository = new BetRepositoryInMemory();
    }
    @Override
    protected BetRepository getRepository() {
        return repository;
    }
}
