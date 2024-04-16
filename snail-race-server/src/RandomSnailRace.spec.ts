import {RandomSnailRace, Snail, SnailRaceResult, snails} from "./RandomSnailRace";



describe('RandomSnailRace', () => {
    let randomSnailRace = new RandomSnailRace();
    test('create a random new race result', () => {
        const results = randomSnailRace.generateNewRaceResult(Date.now())

        expect(results).toBeInstanceOf(SnailRaceResult)
        expect(results.podium.length).toEqual(3)
        expect(results.podium.some(e => e === undefined)).toBe(false)
    })
})