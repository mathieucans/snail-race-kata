package snail.race.kata.domain;

import java.util.List;

public class RaceResultProvider {

    public record Snail(int number, String name) {}

    public record Podium(Snail first,
                         Snail second,
                         Snail third)
    {
    }

    public record SnailRace(int raceId,
                            long timestamp,
                            Podium podium)
    {
    }

    public record SnailRaces(List<SnailRace> races) {
    }
}
