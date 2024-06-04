import {SnailRace} from "../domain/RaceResultProvider";

export function sortFromMoreRecentToLessRecent(a: SnailRace, b: SnailRace) {
    return b.timestamp - a.timestamp
}