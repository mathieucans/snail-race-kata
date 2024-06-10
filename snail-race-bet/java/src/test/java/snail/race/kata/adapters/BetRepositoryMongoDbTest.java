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
        assertThat("TODO implement BetRepositoryMongoDb").isEqualTo("to be implemented");
    }

    @Test
    void retrieve_only_bets_inside_the_time_range() {
        assertThat("TODO implement BetRepositoryMongoDb").isEqualTo("to be implemented");
    }
}
