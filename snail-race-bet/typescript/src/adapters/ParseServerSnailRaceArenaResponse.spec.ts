import example from "./example.json";
import {Podium, Snail, SnailRace, SnailRaces} from "../domain/RaceResultProvider";
import {parseServerSnailRaceArenaResponse} from "./ParseServerSnailRaceArenaResponse";

describe('parse Server Snail Race Arena Response', () => {
    test('parse a sample response with right values', () => {
        const races = parseServerSnailRaceArenaResponse(example);
        expect(races).toBeInstanceOf(SnailRaces)
        expect(races.races[1]).toEqual(new SnailRace(989376, 1716821785381, new Podium(
            new Snail(6, "Black Caviar"),
            new Snail(3, "Seabiscuit"),
            new Snail(19, "Winx"),
        )))

    });
});