    export class RandomSnailRace {
    generateNewRaceResult(timestamp: number): SnailRaceResult {
        const race = this.shuffle(snails);
        return new SnailRaceResult(
            Math.round(Math.random() * 1000000),
            timestamp,
            [race[0], race[1], race[2]])
    }

        private shuffle(participants:Snail[]) {
            let race = participants
                .map(value => ({ value, sort: Math.random() }))
                .sort((a, b) => a.sort - b.sort)
                .map(({ value }) => value)
            return race;
        }
    }


export class Snail {
    constructor(
        public readonly number: Number,
        public readonly name: string
    ) {
    }
}

export class SnailRaceResult {
    constructor(
        public readonly raceId: number,
        public readonly timestamp: number,
        public readonly podium: Array<Snail>
    ) {
    }
}

export const snails = [
    new Snail(1, `Gordon`),
    new Snail(2, `Man O'War`),
    new Snail(3, `Seabiscuit`),
    new Snail(4, `American Pharoah`),
    new Snail(5, `Zenyatta`),
    new Snail(6, `Black Caviar`),
    new Snail(7, `Frankel`),
    new Snail(8, `Phar Lap`),
    new Snail(9, `Northern Dancer`),
    new Snail(10, `Red Rum`),
    new Snail(11, `Ruffian`),
    new Snail(12, `Citation`),
    new Snail(13, `Seattle Slew`),
    new Snail(14, `Affirmed`),
    new Snail(15, `Cigar`),
    new Snail(16, `Desert Orchid`),
    new Snail(17, `Kincsem`),
    new Snail(18, `Makybe Diva`),
    new Snail(19, `Winx`),
    new Snail(20, `Justify`),
]