package snail.race.kata.adapters;

import org.junit.jupiter.api.Test;
import snail.race.kata.domain.RaceResultProvider.Podium;
import snail.race.kata.domain.RaceResultProvider.Snail;
import snail.race.kata.domain.RaceResultProvider.SnailRace;
import snail.race.kata.domain.RaceResultProvider.SnailRaces;
import snail.race.kata.adapters.RaceResultProviderHttprRecords.Races;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;
import static snail.race.kata.infrastructure.RaceBuilder.aRace;
import static snail.race.kata.infrastructure.SnailBuilder.aSnail;

class RaceResultProviderHttpAntiCorruptionLayerTest {

    @Test
    void convert_infrastructure_data_with_right_podium() {
        var notOnPodium = aSnail().withDuration(15.0).build();
        var third = aSnail().withDuration(12.5).build();
        var second = aSnail().withDuration(10.3).build();
        var first = aSnail().withDuration(5.0).build();
        var firstRace = aRace().withSnails(
                third,
                first,
                second,
                notOnPodium).build();
        var raceData = new Races(List.of(firstRace));

        var snailRaces = RaceResultProviderHttpAntiCorruptionLayer.mapToDomain(raceData);

        var expectedRace = new SnailRace(
                firstRace.raceId(),
                firstRace.timestamp(),
                createPodium(first, second, third));
        var expectedSnailRace = new SnailRaces(List.of(expectedRace));
        assertThat(snailRaces).isEqualTo(expectedSnailRace);
    }

    private static Podium createPodium(RaceResultProviderHttprRecords.Snail first, RaceResultProviderHttprRecords.Snail second, RaceResultProviderHttprRecords.Snail third) {
        return new Podium(
                new Snail(first.number(), first.name()),
                new Snail(second.number(), second.name()),
                new Snail(third.number(), third.name())
        );
    }

}