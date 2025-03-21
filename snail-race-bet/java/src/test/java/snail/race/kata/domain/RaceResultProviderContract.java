package snail.race.kata.domain;

import org.assertj.core.util.Sets;
import org.junit.jupiter.api.Test;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

public abstract class RaceResultProviderContract {
    protected abstract RaceResultProvider raceResultProvider();


    @Test
    void provides_snail_race_results() {
        RaceResultProvider.SnailRaces results = raceResultProvider().races();
        assertThat(results).isNotNull();
        assertThat(results.races()).isNotEmpty();
        RaceResultProvider.SnailRace firstRace = results.races().get(0);
        assertThat(firstRace).isNotNull();
    }

    @Test
    void provides_snail_race_results_with_all_podium_and_timestamp() {
        RaceResultProvider.SnailRaces results = raceResultProvider().races();
        RaceResultProvider.SnailRace firstRace = results.races().get(0);
        assertThat(firstRace.raceId()).isNotEqualTo(0);
        assertThat(firstRace.timestamp()).isNotEqualTo(0);
        assertThat(firstRace.podium()).isNotNull();
    }

    @Test
    public void provides_results_without_same_snail_number_in_podium() {
        RaceResultProvider.SnailRaces races = raceResultProvider().races();

        assertThat(races.races()).allSatisfy(race -> {
            var podiumNumbers = List.of(
                    race.podium().first().number(),
                    race.podium().second().number(),
                    race.podium().third().number());
            var uniquePodiumNumbers = Sets.newHashSet(podiumNumbers).stream().toList();

            assertThat(podiumNumbers).containsExactlyInAnyOrderElementsOf(uniquePodiumNumbers);
        });
    }

    @Test
    public void provides_unique_race_id_results() {
        RaceResultProvider.SnailRaces races = raceResultProvider().races();

        var raceIds = races.races().stream().map(r -> r.raceId()).toList();
        var uniqueRaceIds = Sets.newHashSet(raceIds);

        assertThat(raceIds).containsExactlyInAnyOrderElementsOf(uniqueRaceIds);
    }

}
