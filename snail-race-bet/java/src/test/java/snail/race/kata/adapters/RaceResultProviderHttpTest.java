package snail.race.kata.adapters;

import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;
import snail.race.kata.domain.RaceResultProvider;

import java.io.IOException;

import static org.assertj.core.api.Assertions.assertThat;

public class RaceResultProviderHttpTest {


    @Test
    void should_provide_something() throws IOException, InterruptedException {
        RaceResultProviderHttp.Races result = new RaceResultProviderHttp().invokeResultEndpoint();
        assertThat(result).isNotNull();
        assertThat(result.races.size()).isGreaterThan(0);
    }

    @Disabled
    void provides_snail_race_results() {
        RaceResultProvider.SnailRaces results = new RaceResultProviderHttp().getResults();
        assertThat(results).isNotNull();
        assertThat(results.races()).isNotEmpty();
    }


}
