package snail.race.kata.adapters;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.io.IOException;

import static org.assertj.core.api.Assertions.assertThat;

public class RaceResultProviderHttpTest extends RaceResultProviderContract {

    private RaceResultProviderHttp raceResultProviderHttp;

    @BeforeEach
    void setUp() {
        RaceResultProviderHttp raceResultProvider = new RaceResultProviderHttp();
        raceResultProviderHttp = raceResultProvider;
        this.raceResultProvider = raceResultProvider;

    }

    @Test
    void should_provide_something() throws IOException, InterruptedException {
        RaceResultProviderHttp.Races result = raceResultProviderHttp.invokeResultEndpoint();
        assertThat(result).isNotNull();
        assertThat(result.races.size()).isGreaterThan(0);
    }


}
