class Snail {
    constructor(
        public readonly number:number,
        public readonly name:string,
    ) {
    }
}

class SnailRaceResult {
    constructor(
        public readonly raceId:number,
        public readonly timestamp:number,
        public readonly podium:Array<Snail>
    ) {
    }

}