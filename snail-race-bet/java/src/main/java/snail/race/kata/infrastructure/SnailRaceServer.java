package snail.race.kata.infrastructure;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.ObjectMapper;

import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.util.List;

public class SnailRaceServer {
    public static Races invokeResultEndpoint() throws IOException, InterruptedException {
        HttpClient httpClient = HttpClient.newHttpClient();
        HttpRequest request = HttpRequest.newBuilder(URI.create("http://localhost:8000/results/")).build();

        return new ObjectMapper().readValue(httpClient.send(request, HttpResponse.BodyHandlers.ofString()).body(), Races.class);
    }

    public record Races(
            @JsonProperty("races") List<Race> races
    ) {
    }

    public record Race(
            @JsonProperty("raceId") int raceId,
            @JsonProperty("timestamp") long timestamp,
            @JsonProperty("snails") List<Snail> snails
    ) {
    }

    public record Snail(
            @JsonProperty("number") int number,
            @JsonProperty("name") String name,
            @JsonProperty("duration") double duration
    ) {
    }
}
