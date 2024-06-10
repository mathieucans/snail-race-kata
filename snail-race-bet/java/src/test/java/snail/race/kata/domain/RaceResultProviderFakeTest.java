package snail.race.kata.domain;

import org.junit.jupiter.api.BeforeEach;

import static org.junit.jupiter.api.Assertions.*;

class RaceResultProviderFakeTest extends RaceResultProviderContract {

    @BeforeEach
    void setUp() {
        RaceResultProviderFake fake = new RaceResultProviderFake();
        RaceResultProvider.Podium podium = new RaceResultProvider.Podium(
                new RaceResultProvider.Snail(1, "Turbo"),
                new RaceResultProvider.Snail(2, "Flash"),
                new RaceResultProvider.Snail(3, "Speedy"));
        fake.simulateRaceResult(1, 1, podium);
        raceResultProvider = fake;

    }

}