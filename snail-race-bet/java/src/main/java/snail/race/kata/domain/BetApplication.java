package snail.race.kata.domain;

import java.util.List;
import java.util.stream.Stream;

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
             long timestamp,
             int first,
             int second,
             int third) {
        this.betRepository.register(new Bet(gambler, new PodiumPronostic( first, second, third), timestamp));

    }

    List<Winner> getWinnersForLastRace() {
        List<Bet> bets = betRepository.findByDateRange(0, Integer.MAX_VALUE);
        var races = raceResultProvider.races();
        var winningBets = findExactMatchBets(bets, races.getLastRace());

        return winningBets.map(bet -> new Winner(bet.gambler())).toList()   ;
    }

    private Stream<Bet> findExactMatchBets(List<Bet> bets, RaceResultProvider.SnailRace race) {
        return bets.stream()
                .filter(bet -> bet.isInTimeFor(race))
                .filter(bet -> bet.betIsOn(race.podium()));
    }

}
