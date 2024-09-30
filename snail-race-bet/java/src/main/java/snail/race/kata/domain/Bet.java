package snail.race.kata.domain;

public record Bet(
        String gambler,
        PodiumPronostic pronostic,
        long timestamp
){

    public boolean isInTimeFor(RaceResultProvider.SnailRace race) {
        return timestamp > race.timestamp() - 2;
    }
}

