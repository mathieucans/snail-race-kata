package snail.race.kata.adapters;

import org.junit.jupiter.api.Test;
import snail.race.kata.domain.Bet;
import snail.race.kata.domain.BetRepository;
import snail.race.kata.domain.PodiumPronostic;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

public abstract class AbstractBetRepositoryTest {
    BetRepository repository;

    @Test
    void register_a_bets() {
        var bet = new Bet("1", new PodiumPronostic(1, 2, 3), 42);

        repository.register(bet);

        List<Bet> byDateRange = repository.findByDateRange(0, 100);
        assertThat(byDateRange).containsExactly(bet);
    }

    @Test
    void retrieve_only_bets_inside_the_time_range() {
        var bet = new Bet("1", new PodiumPronostic(1, 2, 3), 42000);

        repository.register(bet);

        List<Bet> byDateRange = repository.findByDateRange(0, 100);
        assertThat(byDateRange).isEmpty();
    }
}
