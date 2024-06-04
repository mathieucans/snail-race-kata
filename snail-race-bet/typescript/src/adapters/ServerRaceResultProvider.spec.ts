import example from './example.json'
import {Podium, Snail, SnailRace, SnailRaces} from "../domain/RaceResultProvider";
import {parseResponse, ServerRaceResultProvider} from "./ServerRaceResultProvider";

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


    test('parse sample response', () => {
        const races = parseResponse(example);
        expect(races).toBeInstanceOf(SnailRaces)
        expect(races.races[1]).toEqual(new SnailRace(989376, 1716821785381, new Podium(
            new Snail(6, "Black Caviar"),
            new Snail(3, "Seabiscuit"),
            new Snail(19, "Winx"),
        )))

    })

});