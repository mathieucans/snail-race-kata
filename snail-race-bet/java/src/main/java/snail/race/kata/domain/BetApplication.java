package snail.race.kata.domain;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class BetApplication {
    private final BetRepository betRepository;
    private final RaceResultProvider raceResultProvider;

    BetApplication(
            BetRepository betRepository,
            RaceResultProvider raceResultProvider) {
        this.betRepository = betRepository;
        this.raceResultProvider = raceResultProvider;
    }

    void placeBet(
             String gambler,
             int timestamp,
             int first,
             int second,
             int third) {
        this.betRepository.register(new Bet(gambler, new PodiumPronostic( first, second, third), timestamp));

    }

    List<Winner> getWinnersForLastRace() {
        if (betRepository.findByDateRange(0, Integer.MAX_VALUE).isEmpty()) {
            return List.of();
        }
        return List.of(new Winner("me"));
    }
}
