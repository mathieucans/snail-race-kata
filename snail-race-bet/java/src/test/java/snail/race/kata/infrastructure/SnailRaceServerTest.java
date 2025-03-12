package snail.race.kata.infrastructure;

import org.junit.jupiter.api.Test;

import java.io.IOException;

import static org.assertj.core.api.Assertions.assertThat;

class SnailRaceServerTest {
    @Test
    void should_provide_something() throws IOException, InterruptedException {
        var result = new SnailRaceServer("http://localhost:8000").invokeResultEndPoint();
        assertThat(result).isNotNull();
        assertThat(result.races().size()).isGreaterThan(0);
    }
}