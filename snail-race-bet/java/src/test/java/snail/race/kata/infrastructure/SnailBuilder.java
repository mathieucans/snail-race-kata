package snail.race.kata.infrastructure;

import snail.race.kata.adapters.RaceResultProviderHttprRecords.Snail;

public class SnailBuilder {
    private final int number = Math.toIntExact(Math.round(Math.random() * 10000));
    double duration = Math.random()*1000;

    public static SnailBuilder aSnail() {
        return new SnailBuilder();
    }

    public SnailBuilder withDuration(double duration) {
        this.duration = duration;
        return this;
    }

    public Snail build() {
        return new Snail(
                number,
                String.format("Snail name %d", number),
                duration);
    }
}
