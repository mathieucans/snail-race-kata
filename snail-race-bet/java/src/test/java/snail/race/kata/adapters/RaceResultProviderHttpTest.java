package snail.race.kata.adapters;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import snail.race.kata.domain.RaceResultProvider;
import snail.race.kata.domain.RaceResultProviderContract;
import snail.race.kata.infrastructure.SnailRaceServer;

import java.io.IOException;

import static org.assertj.core.api.Assertions.assertThat;

public class RaceResultProviderHttpTest extends RaceResultProviderContract {

    private RaceResultProviderHttp raceResultProviderHttp;

    @BeforeEach
    void setUp() {
        raceResultProviderHttp = new RaceResultProviderHttp();
    }

    @Test
    void should_provide_something() throws IOException, InterruptedException {
        var result = SnailRaceServer.invokeResultEndpoint();
        assertThat(result).isNotNull();
        assertThat(result.races().size()).isGreaterThan(0);
    }


    @Override
    protected RaceResultProvider raceResultProvider() {
        return raceResultProviderHttp;
    }
}
