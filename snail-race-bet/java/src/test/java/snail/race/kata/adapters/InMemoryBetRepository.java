package snail.race.kata.adapters;

import snail.race.kata.domain.Bet;
import snail.race.kata.domain.BetRepository;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.LinkedTransferQueue;

import static java.util.stream.Collectors.toList;

public class InMemoryBetRepository implements BetRepository {
    private List<Bet> inMemoryBets = new ArrayList<>();

    @Override
    public void register(Bet bet) {
       inMemoryBets.add(bet);
    }

    @Override
    public List<Bet> findByDateRange(int from, int to) {
        return inMemoryBets.stream().filter(bet -> bet.timestamp() > from && bet.timestamp() < to).toList();
    }
}
