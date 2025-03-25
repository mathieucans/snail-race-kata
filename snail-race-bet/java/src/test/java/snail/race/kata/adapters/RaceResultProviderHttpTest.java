package snail.race.kata.adapters;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import snail.race.kata.domain.RaceResultProvider;
import snail.race.kata.domain.RaceResultProviderContract;

import java.io.IOException;

import static org.assertj.core.api.Assertions.assertThat;

public class RaceResultProviderHttpTest extends RaceResultProviderContract {


    private RaceResultProviderHttp raceResultProviderHttp;

    @Override
    protected RaceResultProvider raceResultProvider() {
        return raceResultProviderHttp;
    }

    @BeforeEach
    void setUp() {
        raceResultProviderHttp = new RaceResultProviderHttp();
    }

    @Test
    void should_provide_something() throws IOException, InterruptedException {
        var result = raceResultProviderHttp.invokeExternalServer();
        assertThat(result).isNotNull();
        assertThat(result.races().size()).isGreaterThan(0);
    }

}
