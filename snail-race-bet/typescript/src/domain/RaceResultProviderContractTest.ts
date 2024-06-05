import {RaceResultProviderHttp} from "../adapters/RaceResultProviderHttp";

export function RaceResultProviderContractTest(getProvider: () => RaceResultProviderHttp) {
    it('should should provide the domain type', async () => {
        const provider = getProvider();
        const result = await provider.races()
        expect(result.races.length).toBeGreaterThan(1)
    });
}