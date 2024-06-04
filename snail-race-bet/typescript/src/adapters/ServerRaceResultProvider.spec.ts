import {SnailRace, SnailRaces} from "../domain/RaceResultProvider";
import {ServerRaceResultProvider} from "./ServerRaceResultProvider";

function sortByTimestamp(a: SnailRace, b:SnailRace) {
    return a.timestamp - b.timestamp
}

describe('RestSnailRaceArena', () => {
    test('provide snail races', async () => {
        const serverSnailRaceArena = new ServerRaceResultProvider();

        const races= await serverSnailRaceArena.races()

        expect(races).toBeInstanceOf(SnailRaces)
    });

    test('snail races ordered by time stamp', async () => {
        const serverSnailRaceArena = new ServerRaceResultProvider();

        const races= await serverSnailRaceArena.races()

        expect(races.races).toEqual(races.races.sort(sortByTimestamp))
    });

    test('all podium snails are different', async () => {
        const serverSnailRaceArena = new ServerRaceResultProvider();

        const races= await serverSnailRaceArena.races()

        const podium = races.races[0].podium;
        expect(podium.first).not.toEqual(podium.second)
        expect(podium.first).not.toEqual(podium.third)
        expect(podium.second).not.toEqual(podium.third)
    });



});
