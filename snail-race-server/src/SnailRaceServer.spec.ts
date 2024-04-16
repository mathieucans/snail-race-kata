import {SnailRaceServer} from "./SnailRaceServer";

describe('SnailRaceServer', () => {
    test('Start with 5 past races order reverse chronologically', () => {
        const races = new SnailRaceServer().races()

        expect(races.length).toEqual(5)
        let raceDates = races.map(s => s.timestamp);
        expect(raceDates).toEqual(new Array(...raceDates).sort().reverse())
    })
})