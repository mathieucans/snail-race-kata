package snail.race.kata.adapters;

import com.mongodb.client.MongoDatabase;
import org.bson.Document;
import snail.race.kata.domain.Bet;
import snail.race.kata.domain.BetRepository;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import static com.mongodb.client.model.Filters.*;

public class BetRepositoryMongoDb implements BetRepository {
    private final MongoDatabase database;

    public BetRepositoryMongoDb(MongoDatabase database) {
        this.database = database;
    }

    @Override
    public void register(Bet bet) {
        database.getCollection("bet", Bet.class).insertOne(bet);
    }

    @Override
    public List<Bet> findByDateRange(long from, long to) {
        return database.getCollection("bet", Bet.class).find(
                and(
                        gte("timestamp", from),
                        lt("timestamp", to)
                )
        ).into(new ArrayList<>());
    }
}
