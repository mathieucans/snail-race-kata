package snail.race.kata.domain;

import org.junit.jupiter.api.BeforeEach;

public class BetRepositoryFakeTest extends BetRepositoryContract {
    @BeforeEach
    void setUp() {
        repository = new BetRepositoryFake();
    }

}
