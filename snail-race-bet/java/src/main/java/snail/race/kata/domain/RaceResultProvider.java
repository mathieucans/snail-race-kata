package snail.race.kata.domain;

import java.util.List;

public interface RaceResultProvider {

    record Snail(int number, String name) {
    }

    record Podium(Snail first,
                  Snail second,
                  Snail third) {
    }

    record SnailRace(int raceId,
                     long timestamp,
                     Podium podium) {
    }

    record SnailRaces(List<SnailRace> races) {
    }

    SnailRaces races();
}
