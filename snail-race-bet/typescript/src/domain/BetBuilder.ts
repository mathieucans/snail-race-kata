import {Bet, PodiumPronostic} from "./BetRepository";


export class BetBuilder {
    private timestamp: number = Math.round(Math.random() * 1000);

    public withTimeStamp(timestamp: number): BetBuilder {
        this.timestamp = timestamp;
        return this;
    }

    public build(): Bet {
        return new Bet("mathieu", new PodiumPronostic(4, 5, 6), this.timestamp);
    }
}