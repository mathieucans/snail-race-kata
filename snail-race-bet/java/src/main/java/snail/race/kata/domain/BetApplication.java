package snail.race.kata.domain;

import java.util.List;

public class BetApplication {
    BetApplication(
            BetRepository betRepository,
            RaceResultProvider raceResultProvider) {
    }

    void placeBet(
             String gambler,
             int timestamp,
             int first,
             int second,
             int third) {
    }

    List<Winner> getWinnersForLastRace() {
        return null;
    }
}
