import {RaceResultProvider, SnailRaces} from "../domain/RaceResultProvider";
import {RaceResultProviderHttpAntiCorruptionLayer} from "./RaceResultProviderHttpAntiCorruptionLayer";


export class RaceResultProviderHttp implements RaceResultProvider {
    async races(): Promise<SnailRaces> {
        const response = await fetch('http://localhost:8000/results');
        expect(response.status).toEqual(200);
        let data = await response.json();

        return RaceResultProviderHttpAntiCorruptionLayer.mapToDomain(data);
    }
}