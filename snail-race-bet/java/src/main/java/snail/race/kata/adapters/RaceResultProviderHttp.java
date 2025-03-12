package snail.race.kata.adapters;

import com.fasterxml.jackson.databind.ObjectMapper;
import snail.race.kata.domain.RaceResultProvider;
import snail.race.kata.infrastructure.SnailRaceServer.Race;
import snail.race.kata.infrastructure.SnailRaceServer.RaceData;

import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.util.List;

class RaceResultProviderHttp implements RaceResultProvider{
    RaceData invokeResultEndpoint() throws IOException, InterruptedException {
        HttpClient httpClient = HttpClient.newHttpClient();
        HttpRequest request = HttpRequest.newBuilder(URI.create("http://localhost:8000/results/")).build();
        HttpResponse<String> response = httpClient.send(request, HttpResponse.BodyHandlers.ofString());

        return new ObjectMapper().readValue(response.body(), RaceData.class);
    }

    public RaceResultProvider.SnailRaces races() {
        RaceData races;
        try {
            races = invokeResultEndpoint();
        } catch (IOException | InterruptedException e) {
            throw new RuntimeException(e);
        }

        return RaceResultProviderHttpAntiCorruptionLayer.mapToDomain(races);
    }

    private RaceResultProvider.Podium makePodium(Race race) {
        List<RaceResultProvider.Snail> list = race.snails().stream()
                // TODO sort snails by duration
                .map(s -> new RaceResultProvider.Snail(s.number(), s.name())).toList();
        return new RaceResultProvider.Podium(list.get(0), list.get(1), list.get(2));
    }
}
