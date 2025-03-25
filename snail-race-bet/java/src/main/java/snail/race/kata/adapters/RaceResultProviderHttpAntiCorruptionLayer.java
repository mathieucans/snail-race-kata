package snail.race.kata.adapters;

import snail.race.kata.domain.RaceResultProvider;

import java.util.Comparator;
import java.util.List;

public class RaceResultProviderHttpAntiCorruptionLayer {
    static RaceResultProvider.SnailRaces mapToDomain(RaceResultProviderHttprRecords.Races races) {
        return new RaceResultProvider.SnailRaces(races.races().stream()
                .map(r -> new RaceResultProvider.SnailRace(
                        r.raceId(),
                        r.timestamp(),
                        createPodium(r.snails()))).toList());
    }

    private static RaceResultProvider.Podium createPodium(List<RaceResultProviderHttprRecords.Snail> snails) {
        List<RaceResultProvider.Snail> snailsOnPodium = snails.stream()
                .sorted(Comparator.comparingDouble(RaceResultProviderHttprRecords.Snail::duration))
                .limit(3)
                .map(s -> new RaceResultProvider.Snail(s.number(), s.name()))
                .toList();

        return new RaceResultProvider.Podium(
                snailsOnPodium.get(0),
                snailsOnPodium.get(1),
                snailsOnPodium.get(2)
        );
    }

}
