package snail.race.kata.domain;

public record Bet(
        String gambler,
        PodiumPronostic pronostic,
        int timestamp
){

    public boolean isInTimeFor(RaceResultProvider.SnailRace race) {
        return timestamp > race.timestamp() - 2;
    }
}

