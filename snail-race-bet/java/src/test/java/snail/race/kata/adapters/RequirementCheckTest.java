package snail.race.kata.adapters;

import static org.assertj.core.api.BDDAssertions.then;

import java.io.IOException;
import java.util.List;

import org.junit.jupiter.api.Test;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;

import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;
import okhttp3.ResponseBody;

public class RequirementCheckTest {

    private record Snail(int number, String name, Float duration) {}

    private record SnailRaceResult(int raceId,
                                   long timestamp,
                                   List<Snail> snails)
    {
    }

    private record SnailRacesResults(List<SnailRaceResult> races) {
    }

    @Test
    public void mongo_database_is_reachable() {
        MongoClient mongoClient = MongoClients.create("mongodb://localhost:27017");
        mongoClient.listDatabaseNames().forEach(System.out::println);
        mongoClient.close();
    }

    @Test
    public void race_result_server_is_accessible() throws IOException {
        // given
        OkHttpClient client = new OkHttpClient();
        Request request = new Request.Builder()
            .url("http://localhost:8000/results")
            .build();

        // when
        try (Response response = client
            .newCall(request)
            .execute())
        {
            // then check network response
            then(response.code()).isEqualTo(200);
            ResponseBody body = response.body();
            then(body.contentType().toString()).contains("json");

            // then check JSON deserialization
            ObjectMapper objectMapper = new ObjectMapper();
            SnailRacesResults snailRacesResults = objectMapper.readValue(body.string(), SnailRacesResults.class);
            then(snailRacesResults.races).isNotEmpty();
        }
    }
}
