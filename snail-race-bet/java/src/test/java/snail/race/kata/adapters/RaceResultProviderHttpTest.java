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

    @Test
    void provides_snail_race_results() {
        RaceResultProvider.SnailRaces results = new RaceResultProviderHttp().getResults();
        assertThat(results).isNotNull();
        assertThat(results.races()).isNotEmpty();
        RaceResultProvider.SnailRace firstRace = results.races().get(0);
        assertThat(firstRace).isNotNull();
    }
    @Test
    void provides_snail_race_results_with_all_podium_and_timestamp() {
        RaceResultProvider.SnailRaces results = new RaceResultProviderHttp().getResults();
        RaceResultProvider.SnailRace firstRace = results.races().get(0);
        assertThat(firstRace.raceId()).isNotEqualTo(0);
        assertThat(firstRace.timestamp()).isNotEqualTo(0);
        assertThat(firstRace.podium()).isNotNull();
    }

    @Disabled
    void provides_a_sorted_podium() {

    }


}
