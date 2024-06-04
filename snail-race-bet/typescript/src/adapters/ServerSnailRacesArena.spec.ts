import {ServerRaceResultProvider} from "./ServerSnailRacesArena";
import {snailRaceArenaContract} from "./SnailRaceArenaContract";

describe('ServerSnailRacesArena', () => {
    const serverSnailRaceArena = new ServerRaceResultProvider();

    snailRaceArenaContract(serverSnailRaceArena);
});
