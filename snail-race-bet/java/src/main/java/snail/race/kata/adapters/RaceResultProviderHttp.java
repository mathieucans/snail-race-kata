package snail.race.kata.adapters;

import com.fasterxml.jackson.databind.ObjectMapper;
import snail.race.kata.domain.RaceResultProvider;
import snail.race.kata.adapters.RaceResultProviderHttprRecords.Races;

import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

class RaceResultProviderHttp implements RaceResultProvider{

    public RaceResultProvider.SnailRaces races() {
        Races races = invokeExternalServer();

        return RaceResultProviderHttpAntiCorruptionLayer.mapToDomain(races);
    }

    public Races invokeExternalServer() {
        try {
            HttpClient httpClient = HttpClient.newHttpClient();
            HttpRequest request = HttpRequest.newBuilder(URI.create("http://localhost:8000" + "/results/")).build();

            return new ObjectMapper().readValue(httpClient.send(request,
                    HttpResponse.BodyHandlers.ofString()).body(), Races.class);
        } catch (IOException | InterruptedException e) {
            throw new RuntimeException(e);
        }
    }

}
