import {SnailRacesArena} from "./SnailRacesArena";

export function snailRacesContractTest(getProvider: () => SnailRacesArena) {
    it('should should provide the domain type', async () => {
        const provider = getProvider();
        const result = await provider.races()
        expect(result.races.length).toBeGreaterThan(1)
    });
}