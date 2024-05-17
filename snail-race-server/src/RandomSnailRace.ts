export const MIN_RACE_DURATION_IN_SECONDS = 300;

function createSnail(participant: Participant) {
    return new Snail(participant.number, participant.name,
        Math.floor((Math.random()*5*60 + MIN_RACE_DURATION_IN_SECONDS)*1000)/1000);
}

function alphabeticalOrder(a:Snail, b:Snail) {
    if (a.name < b.name) {
        return -1;
    }
    if (a.name > b.name) {
        return 1;
    }
    return 0;
}

export class RandomSnailRace {
    generateNewRaceResult(timestamp: number): SnailRaceResult {
        const race = this.shuffle(participants)
            .slice(0,8)
            .map(createSnail)
            .sort( alphabeticalOrder)
        return new SnailRaceResult(
            Math.round(Math.random() * 1000000),
            timestamp,
            race)
    }

    private shuffle(participants: Participant[]) {
        let race = participants
            .map(value => ({value, sort: Math.random()}))
            .sort((a, b) => a.sort - b.sort)
            .map(({value}) => value)
        return race;
    }
}


export class Snail {
    constructor(
        public readonly number: number,
        public readonly name: string,
        public readonly duration: number
    ) {
    }
}

export class SnailRaceResult {
    constructor(
        public readonly raceId: number,
        public readonly timestamp: number,
        public readonly snails: Array<Snail>
    ) {
    }
}

class Participant {
    constructor(
        public readonly number: number,
        public readonly name: string) {

    }

}

export const participants = [
    new Participant(1, `Gordon`),
    new Participant(2, `Man O'War`),
    new Participant(3, `Seabiscuit`),
    new Participant(4, `American Pharoah`),
    new Participant(5, `Zenyatta`),
    new Participant(6, `Black Caviar`),
    new Participant(7, `Frankel`),
    new Participant(8, `Phar Lap`),
    new Participant(9, `Northern Dancer`),
    new Participant(10, `Red Rum`),
    new Participant(11, `Ruffian`),
    new Participant(12, `Citation`),
    new Participant(13, `Seattle Slew`),
    new Participant(14, `Affirmed`),
    new Participant(15, `Cigar`),
    new Participant(16, `Desert Orchid`),
    new Participant(17, `Kincsem`),
    new Participant(18, `Makybe Diva`),
    new Participant(19, `Winx`),
    new Participant(20, `Justify`),
]