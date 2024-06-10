package snail.race.kata.domain;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class BetApplicationTest {

    BetApplication betApplication;
    RaceResultProviderFake raceResultProvider = new RaceResultProviderFake();

    @BeforeEach
    void setUp() {
        betApplication = new BetApplication(new FakeBetRepository(), raceResultProvider);
    }

    @Test
    void no_winners_when_no_bet_is_placed() {
        int whateverDate = 0;
        var winners = betApplication.getWinners(whateverDate);
        assertTrue(winners.isEmpty());
    }


}