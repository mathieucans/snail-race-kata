package snail.race.kata.domain;


import java.util.ArrayList;

public class RaceResultProviderFake implements RaceResultProvider {
    private SnailRaces snailRaces;

    public RaceResultProviderFake() {
        this.snailRaces = new SnailRaces(new ArrayList<>());
    }

    public RaceResultProviderFake(SnailRaces snailRaces) {
        this.snailRaces = snailRaces;
    }

    @Override
    public SnailRaces races() {
        return snailRaces;
    }

    public void simulateRaceResult(int raceId, long datetime, Podium podium) {
        this.snailRaces = SnailRaces.withAdditionalResult(this.snailRaces, raceId, datetime, podium);
    }
}

