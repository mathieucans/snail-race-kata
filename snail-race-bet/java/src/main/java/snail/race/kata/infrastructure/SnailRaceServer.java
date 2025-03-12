package snail.race.kata.infrastructure;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.List;

public class SnailRaceServer {
    public record RaceData(
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
