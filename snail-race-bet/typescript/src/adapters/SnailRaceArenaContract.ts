import {SnailRace, SnailRaces, RaceResultProvider} from "../domain/RaceResultProvider";

function sortByTimestamp(a: SnailRace, b: SnailRace) {
    return b.timestamp - a.timestamp
}

export function snailRaceArenaContract(serverSnailRaceArena: RaceResultProvider) {
    test('provide snail races', async () => {

        const races = await serverSnailRaceArena.races()

        expect(races).toBeInstanceOf(SnailRaces)
    });

    test('snail races ordered by time stamp', async () => {

        const races = await serverSnailRaceArena.races()


        const sortedRaces = new Array(...races.races).sort(sortByTimestamp);
        expect(races.races).toEqual(sortedRaces)
    });

    test('all podium snails are different', async () => {

        const races = await serverSnailRaceArena.races()

        const podium = races.races[0].podium;
        expect(podium.first).not.toEqual(podium.second)
        expect(podium.first).not.toEqual(podium.third)
        expect(podium.second).not.toEqual(podium.third)
    });
}