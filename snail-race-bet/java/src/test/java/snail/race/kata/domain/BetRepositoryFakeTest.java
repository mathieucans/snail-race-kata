package snail.race.kata.domain;

import org.junit.jupiter.api.BeforeEach;

public class BetRepositoryFakeTest extends BetRepositoryContract {
    private BetRepositoryFake repository;

    @BeforeEach
    void setUp() {
        repository = new BetRepositoryFake();
    }

    @Override
    protected BetRepository getRepository() {
        return repository;
    }
}
