import {RaceResultProviderHttp} from "./RaceResultProviderHttp";
import {snailRacesContract} from "../domain/SnailRacesContract";


describe('RaceResultProviderHttp', () => {
    function getProvider() {
        return new RaceResultProviderHttp();
    }
    it('should provide races somehow', async () => {
        const response = await fetch('http://localhost:8000/results');
        expect(response.status).toEqual(200);
        let data = await response.json();
        expect(data.races.length).toBeGreaterThanOrEqual(5)
        let lastRace = data.races[5];
        expect(lastRace).toHaveProperty('raceId')
        expect(lastRace).toHaveProperty('snails')
        expect(lastRace.snails.length).toBeGreaterThan(6)
        expect(lastRace).toHaveProperty('timestamp')
    });
    snailRacesContract(getProvider);
});