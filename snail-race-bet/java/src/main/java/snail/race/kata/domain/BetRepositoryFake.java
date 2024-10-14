package snail.race.kata.domain;

import java.util.ArrayList;
import java.util.List;

public class BetRepositoryFake implements BetRepository {
    private List<Bet> inMemoryBets = new ArrayList<>();

    @Override
    public void register(Bet bet) {
       inMemoryBets.add(bet);
    }

    @Override
    public List<Bet> findByDateRange(int from, int to) {
        return inMemoryBets.stream().filter(bet -> bet.timestamp() >= from && bet.timestamp() < to).toList();
    }
}
