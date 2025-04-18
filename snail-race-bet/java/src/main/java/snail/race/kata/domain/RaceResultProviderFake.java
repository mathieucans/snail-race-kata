package snail.race.kata.domain;


import org.jetbrains.annotations.NotNull;

import java.util.ArrayList;

public class RaceResultProviderFake implements RaceResultProvider {
    private SnailRaces snailRaces;

    public RaceResultProviderFake() {
        this.snailRaces = new SnailRaces(new ArrayList<>());
    }

    public RaceResultProviderFake(SnailRaces snailRaces) {
        this.snailRaces = snailRaces;
    }

    @NotNull
    static Podium podiumWithSnails(int first, int second, int third) {
        return new Podium(
                new Snail(first, "Not nine"),
                new Snail(second, "Flash"),
                new Snail(third, "Speedy")
        );
    }

    @Override
    public SnailRaces races() {
        return snailRaces;
    }

    public void simulateRaceResult(int raceId, long datetime, Podium podium) {
        this.snailRaces = SnailRaces.withAdditionalResult(this.snailRaces, raceId, datetime, podium);
    }

    void configureRaceWithPodium(int number, int number1, int number2) {
        simulateRaceResult(33, 1, podiumWithSnails(number, number1, number2));
    }
}

