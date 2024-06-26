package snail.race.kata.domain;


import java.util.List;

public interface BetRepository {
    void register( Bet bet);

    List<Bet> findByDateRange(long from, long to);
}
