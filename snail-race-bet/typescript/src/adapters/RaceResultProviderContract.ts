
import {SnailRaces, RaceResultProvider} from "../domain/RaceResultProvider";
import {sortFromMoreRecentToLessRecent} from "./SortFromMoreRecentToLessRecent";

export function raceResultProviderContract(serverSnailRaceArena: RaceResultProvider) {
    test('provide snail races', async () => {

        const races = await serverSnailRaceArena.races()

        expect(races).toBeInstanceOf(SnailRaces)
    });

    test('snail races ordered by time stamp', async () => {

        const races = await serverSnailRaceArena.races()


        const sortedRaces = new Array(...races.races).sort(sortFromMoreRecentToLessRecent);
        expect(races.races).toEqual(sortedRaces)
    });

    test('a snail cannot be at different podium place', async () => {

        const races = await serverSnailRaceArena.races()

        const podium = races.races[0].podium;
        expect(podium.first).not.toEqual(podium.second)
        expect(podium.first).not.toEqual(podium.third)
        expect(podium.second).not.toEqual(podium.third)
    });
}