package snail.race.kata.domain;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.*;

class BetApplicationTest {

    BetApplication betApplication;
    RaceResultProviderFake raceResultProvider = new RaceResultProviderFake();

    @BeforeEach
    void setUp() {
        betApplication = new BetApplication(new BetRepositoryFake(), raceResultProvider);
    }

    @Test
    void no_winners_when_no_bet_is_placed() {
        var winners = betApplication.getWinnersForLastRace();
        assertThat(winners).isEmpty();
    }

    @Test
    void winners_when_there_is_an_exact_match() {
        betApplication.placeBet("me", 1, 9, 8, 7);
        raceResultProvider.simulateRaceResult(33, 1, new RaceResultProvider.Podium(
                new RaceResultProvider.Snail(9, "Turbo"),
                new RaceResultProvider.Snail(8, "Flash"),
                new RaceResultProvider.Snail(7, "Speedy")
        ));
        assertThat(betApplication.getWinnersForLastRace()).containsExactly(new Winner("me"));
    }
}