package snail.race.kata.adapters;

import org.junit.jupiter.api.BeforeEach;
import snail.race.kata.domain.RaceResultProvider;
import snail.race.kata.domain.RaceResultProviderContract;

public class RaceResultProviderHttpTest extends RaceResultProviderContract {

    private RaceResultProviderHttp raceResultProviderHttp;

    @BeforeEach
    void setUp() {
        raceResultProviderHttp = new RaceResultProviderHttp();
    }

    @Override
    protected RaceResultProvider raceResultProvider() {
        return raceResultProviderHttp;
    }
}
