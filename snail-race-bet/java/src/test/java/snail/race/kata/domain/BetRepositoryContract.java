package snail.race.kata.domain;

import org.junit.jupiter.api.Test;

import java.util.Arrays;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

public abstract class BetRepositoryContract {
    protected abstract BetRepository getRepository();

    @Test
    void register_a_bets() {
        getRepository().register(new Bet(
                "Mathieu",
                new PodiumPronostic(20,12,4),
                12345
        ));

        List<Bet> bets = getRepository().findByDateRange(12345, 12346);
        assertThat(bets.size()).isEqualTo(1);
        assertThat(bets.get(0)).isEqualTo(new Bet(
                "Mathieu",
                new PodiumPronostic(20,12,4),
                12345
        ));
    }

    @Test
    void retrieve_only_bets_inside_the_time_range() {
        int from = 12346;
        int to = 12370;
        registerBetAtTimestamp(from-1);
        Bet betOnFrom = registerBetAtTimestamp(from);
        Bet betAfterFrom = registerBetAtTimestamp(from+1);
        Bet betBeforeTo = registerBetAtTimestamp(to-1);
        registerBetAtTimestamp(to);
        registerBetAtTimestamp(to+1);

        List<Bet> bets = this.getRepository().findByDateRange(from, to);

        assertThat(bets).isEqualTo(Arrays.asList(
                betOnFrom,
                betAfterFrom,
                betBeforeTo
        ));
    }

    private Bet registerBetAtTimestamp(int timestamp) {
        Bet bet = new BetBuilder().withTimeStamp(timestamp).build();
        this.getRepository().register(bet);
        return bet;
    }
}
