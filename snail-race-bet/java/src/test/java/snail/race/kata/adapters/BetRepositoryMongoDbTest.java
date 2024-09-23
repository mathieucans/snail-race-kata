package snail.race.kata.adapters;

import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;
import com.mongodb.client.MongoDatabase;
import org.bson.codecs.configuration.CodecProvider;
import org.bson.codecs.configuration.CodecRegistry;
import org.bson.codecs.pojo.PojoCodecProvider;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import snail.race.kata.domain.Bet;
import snail.race.kata.domain.PodiumPronostic;

import java.util.Arrays;
import java.util.List;

import static com.mongodb.MongoClientSettings.getDefaultCodecRegistry;
import static org.assertj.core.api.Assertions.assertThat;
import static org.bson.codecs.configuration.CodecRegistries.fromProviders;
import static org.bson.codecs.configuration.CodecRegistries.fromRegistries;

public class BetRepositoryMongoDbTest {
    MongoClient mongoClient;
    BetRepositoryMongoDb repository;

    @BeforeEach
    void setUp() {
        CodecProvider pojoCodecProvider = PojoCodecProvider.builder().automatic(true).build();
        CodecRegistry pojoCodecRegistry = fromRegistries(getDefaultCodecRegistry(), fromProviders(pojoCodecProvider));
        mongoClient = MongoClients.create("mongodb://localhost");
        MongoDatabase database = mongoClient.getDatabase("contract_testing").withCodecRegistry(pojoCodecRegistry);

        database.getCollection("bet", Bet.class).drop();

        repository = new BetRepositoryMongoDb(database);

    }

    @AfterEach
    void tearDown() {
        mongoClient.close();
    }

    @Test
    void register_a_bets() {
        repository.register(new Bet(
                "Mathieu",
                new PodiumPronostic(20,12,4),
                12345
        ));

        List<Bet> bets = repository.findByDateRange(12345, 12346);
        assertThat(bets.size()).isEqualTo(1);
        assertThat(bets.get(0)).isEqualTo(new Bet(
                "Mathieu",
                new PodiumPronostic(20,12,4),
                12345
        ));
    }

    @Test
    void retrieve_only_bets_inside_the_time_range() {
        Bet betBeforeFrom = new Bet(
                "Mathieu",
                new PodiumPronostic(20, 12, 4),
                12345
        );
        Bet betOnFrom = new Bet(
                "Mathieu",
                new PodiumPronostic(20, 12, 4),
                12346
        );
        Bet betAfterFrom = new Bet(
                "Mathieu",
                new PodiumPronostic(20, 12, 4),
                12347
        );
        Bet betBeforeTo = new Bet(
                "Mathieu",
                new PodiumPronostic(20, 12, 4),
                12369
        );
        Bet betOnTo = new Bet(
                "Mathieu",
                new PodiumPronostic(20, 12, 4),
                12370
        );
        Bet betAfterTo = new Bet(
                "Mathieu",
                new PodiumPronostic(20, 12, 4),
                12371
        );
        repository.register(betBeforeFrom);
        repository.register(betOnFrom);
        repository.register(betAfterFrom);
        repository.register(betBeforeTo);
        repository.register(betOnTo);
        repository.register(betAfterTo);

        List<Bet> bets = repository.findByDateRange(12346, 12370);

        assertThat(bets).isEqualTo(Arrays.asList(
                betOnFrom,
                betAfterFrom,
                betBeforeTo
        ));
    }
}
