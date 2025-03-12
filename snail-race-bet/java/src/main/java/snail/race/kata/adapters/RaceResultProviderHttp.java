package snail.race.kata.adapters;

import snail.race.kata.domain.RaceResultProvider;
import snail.race.kata.infrastructure.SnailRaceServer;
import snail.race.kata.infrastructure.SnailRaceServer.Races;

import java.io.IOException;

class RaceResultProviderHttp implements RaceResultProvider{

    public RaceResultProvider.SnailRaces races() {
        Races races;
        try {
            races = new SnailRaceServer("http://localhost:8000").invokeResultEndPoint();
        } catch (IOException | InterruptedException e) {
            throw new RuntimeException(e);
        }

        return RaceResultProviderHttpAntiCorruptionLayer.mapToDomain(races);
    }

}
