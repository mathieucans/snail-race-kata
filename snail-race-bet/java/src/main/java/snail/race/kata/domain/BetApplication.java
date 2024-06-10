package snail.race.kata.domain;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class BetApplication {
    private boolean betPlaced;

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

        this.betPlaced = true;
    }

    List<Winner> getWinnersForLastRace() {
        if (!betPlaced) {
            return List.of();
        }
        return List.of(new Winner("me"));
    }
}
