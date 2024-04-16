import {SnailRaceServer} from "./SnailRaceServer";

describe('SnailRaceServer', () => {
    test('Start with 5 past races', () => {
        const races = new SnailRaceServer().races()

        expect(races.length).toEqual(5)
    })
})