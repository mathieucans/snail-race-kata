import {SnailRacesArenaHttp} from "./SnailRacesArenaHttp";

export function snailRacesContractTest(getProvider: () => SnailRacesArenaHttp) {
    it('should should provide the domain type', async () => {
        const provider = getProvider();
        const result = await provider.races()
        expect(result.races.length).toBeGreaterThan(1)
    });
}