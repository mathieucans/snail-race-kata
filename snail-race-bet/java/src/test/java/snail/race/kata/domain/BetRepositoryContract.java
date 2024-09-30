package snail.race.kata.domain;

import org.junit.jupiter.api.Test;
import snail.race.kata.adapters.BetBuilder;

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
        Bet betBeforeFrom = new BetBuilder().withTimeStamp(12345).build();
        Bet betOnFrom = new BetBuilder().withTimeStamp(12346).build();
        Bet betAfterFrom = new BetBuilder().withTimeStamp(12347).build();
        Bet betBeforeTo = new BetBuilder().withTimeStamp(12369).build();
        Bet betOnTo = new BetBuilder().withTimeStamp(12370).build();
        Bet betAfterTo = new BetBuilder().withTimeStamp(12371).build();
        this.getRepository().register(betBeforeFrom);
        this.getRepository().register(betOnFrom);
        this.getRepository().register(betAfterFrom);
        this.getRepository().register(betBeforeTo);
        this.getRepository().register(betOnTo);
        this.getRepository().register(betAfterTo);

        List<Bet> bets = this.getRepository().findByDateRange(12346, 12370);

        assertThat(bets).isEqualTo(Arrays.asList(
                betOnFrom,
                betAfterFrom,
                betBeforeTo
        ));
    }
}
