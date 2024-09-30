package snail.race.kata.domain;

public class BetBuilder {

    private int timestamp = (int)Math.round(Math.random()*1000);

    public BetBuilder withTimeStamp(int timpestamp) {
        this.timestamp = timpestamp;
        return this;
    }

    public Bet build() {
        return new Bet("mathieu", new PodiumPronostic(4,5,6), timestamp);
    }
}
