package snail.race.kata.adapters;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.List;

public class RaceResultProviderHttprRecords {
    private final String baseUrl;

    public RaceResultProviderHttprRecords(String baseUrl) {
        this.baseUrl = baseUrl;
    }

    public record Races(
            @JsonProperty("races") List<Race> races
    ) {
    }

    public record Race(
            @JsonProperty("raceId") int raceId,
            @JsonProperty("timestamp") long timestamp,
            @JsonProperty("snails") List<Snail> snails
    ) {
    }

    public record Snail(
            @JsonProperty("number") int number,
            @JsonProperty("name") String name,
            @JsonProperty("duration") double duration
    ) {
    }
}
