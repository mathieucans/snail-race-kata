package snail.race.kata.adapters;

import com.fasterxml.jackson.databind.ObjectMapper;
import snail.race.kata.domain.RaceResultProvider;

import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

class RaceResultProviderHttp {
    Races invokeResultEndpoint() throws IOException, InterruptedException {
        HttpClient httpClient = HttpClient.newHttpClient();
        HttpRequest request = HttpRequest.newBuilder(URI.create("http://localhost:8000/results/"))
                .build();
        HttpResponse<String> response = httpClient.send(request, HttpResponse.BodyHandlers.ofString());
        assertThat(response.statusCode()).isEqualTo(200);
        assertThat(response.body()).isNotEmpty();
        System.out.println(response.body());
        Races result = new ObjectMapper().readValue(response.body(), Races.class);
        return result;
    }

    public RaceResultProvider.SnailRaces getResults() {
        Races races = null;
        try {
            races = invokeResultEndpoint();
        } catch (IOException | InterruptedException e) {
            throw new RuntimeException(e);
        }

        return null;
    }

    static class Race {
        public int raceId;
        public long timestamp;
        public List<Snail> snails;

        // getters and setters
    }

    static class Snail {
        public int number;
        public String name;
        public double duration;

        // getters and setters
    }

    static class Races {

         public List<Race> races;

    }
}
