import {RandomSnailRace, Snail, SnailRaceResult, participants, MIN_RACE_DURATION_IN_SECONDS} from "./RandomSnailRace";



describe('RandomSnailRace', () => {
    let randomSnailRace = new RandomSnailRace();
    test('create a random new race result', () => {
        const results = randomSnailRace.generateNewRaceResult(Date.now())

        expect(results).toBeInstanceOf(SnailRaceResult)
        expect(results.snails.length).toEqual(8) // 8 runners
        expect(results.snails.filter(snail => snail.duration < MIN_RACE_DURATION_IN_SECONDS).length).toEqual(0)
    })
})