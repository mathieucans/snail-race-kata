package snail.race.kata.adapters;

import org.junit.jupiter.api.BeforeEach;

public class inMemoryBetRepositoryTest extends AbstractBetRepositoryTest {
    @BeforeEach
    void setUp() {
        repository = new InMemoryBetRepository();
    }

}
