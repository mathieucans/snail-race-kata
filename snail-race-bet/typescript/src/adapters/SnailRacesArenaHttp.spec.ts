import {SnailRacesArenaHttp} from "./SnailRacesArenaHttp";
import {snailRacesContract} from "../domain/SnailRacesContract";


describe('SnaleRacesArenaHttp', () => {
    function getProvider() {
        return new SnailRacesArenaHttp();
    }
    it('should provide races somehow', async () => {
        const response = await fetch('http://localhost:8000/results');
        expect(response.status).toEqual(200);
        let data = await response.json();
        expect(data.races.length).toBeGreaterThan(9)
        let lastRace = data.races[9];
        expect(lastRace).toHaveProperty('raceId')
        expect(lastRace).toHaveProperty('snails')
        expect(lastRace.snails.length).toBeGreaterThan(6)
        expect(lastRace).toHaveProperty('timestamp')
    });
    snailRacesContract(getProvider);
});