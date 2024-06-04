import {ServerRaceResultProvider} from "./ServerRaceResultProvider";
import {raceResultProviderContract} from "./RaceResultProviderContract";

describe('ServerRaceResultProvider', () => {
    const serverSnailRaceArena = new ServerRaceResultProvider();

    raceResultProviderContract(serverSnailRaceArena);
});
