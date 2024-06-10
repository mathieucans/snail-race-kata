package snail.race.kata.adapters;

import org.junit.jupiter.api.BeforeEach;
import snail.race.kata.domain.BetRepositoryFake;

public class BetRepositoryFakeTest extends AbstractBetRepositoryTest {
    @BeforeEach
    void setUp() {
        repository = new BetRepositoryFake();
    }

}
