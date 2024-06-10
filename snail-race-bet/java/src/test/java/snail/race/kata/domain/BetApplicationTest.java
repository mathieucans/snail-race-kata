package snail.race.kata.domain;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

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
        assertTrue(winners.isEmpty());
    }


}