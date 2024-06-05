import {RaceResultProvider} from "./RaceResultProvider";

export function snailRacesContract(getProvider: () => RaceResultProvider) {
    it('should should provide the domain type', async () => {
        const provider = getProvider();
        const result = await provider.races()
        expect(result.races.length).toBeGreaterThan(1)
    });
}