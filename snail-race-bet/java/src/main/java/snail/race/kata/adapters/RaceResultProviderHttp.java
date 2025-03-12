package snail.race.kata.adapters;

import com.fasterxml.jackson.databind.ObjectMapper;
import snail.race.kata.domain.RaceResultProvider;
import snail.race.kata.infrastructure.SnailRaceServer.Races;

import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

class RaceResultProviderHttp implements RaceResultProvider{
    Races invokeResultEndpoint() throws IOException, InterruptedException {
        HttpClient httpClient = HttpClient.newHttpClient();
        HttpRequest request = HttpRequest.newBuilder(URI.create("http://localhost:8000/results/")).build();
        HttpResponse<String> response = httpClient.send(request, HttpResponse.BodyHandlers.ofString());

        return new ObjectMapper().readValue(response.body(), Races.class);
    }

    public RaceResultProvider.SnailRaces races() {
        Races races;
        try {
            races = invokeResultEndpoint();
        } catch (IOException | InterruptedException e) {
            throw new RuntimeException(e);
        }

        return RaceResultProviderHttpAntiCorruptionLayer.mapToDomain(races);
    }

}
