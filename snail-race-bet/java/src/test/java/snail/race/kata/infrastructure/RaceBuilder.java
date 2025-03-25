package snail.race.kata.infrastructure;

import snail.race.kata.adapters.RaceResultProviderHttprRecords;
import snail.race.kata.adapters.RaceResultProviderHttprRecords.Snail;

import java.util.Arrays;
import java.util.List;

import static snail.race.kata.infrastructure.SnailBuilder.aSnail;

public class RaceBuilder {

    private final int raceId = Math.toIntExact(Math.round(Math.random() * 10000 + 1));
    private final long timestamp = Math.round(Math.random() * 100000L * 100000L);
    private List<Snail> snails = List.of(
            aSnail().build(),
            aSnail().build(),
            aSnail().build(),
            aSnail().build()
    );

    public static RaceBuilder aRace() {
        return new RaceBuilder();
    }

    public RaceBuilder withSnails(Snail... snails) {
        this.snails = Arrays.stream(snails).toList();
        return this;
    }

    public RaceResultProviderHttprRecords.Race build() {
        return new RaceResultProviderHttprRecords.Race(
                raceId,
                timestamp,
                snails);
    }
}
