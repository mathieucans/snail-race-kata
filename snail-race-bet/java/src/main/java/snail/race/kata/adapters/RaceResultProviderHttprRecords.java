package snail.race.kata.adapters;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.List;

public class RaceResultProviderHttprRecords {

    public record Races(
            List<Race> races
    ) {
    }

    public record Race(
            int raceId,
            long timestamp,
            List<Snail> snails
    ) {
    }

    public record Snail(
            int number,
            String name,
            double duration
    ) {
    }
}
