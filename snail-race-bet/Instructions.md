🐌 Snail Race Kata - snail race bet (java)
=====

# Domain elements

The application is about bet on snail races 🐌🏁.

The application can register bet and determine winners.
The application has two external dependencies :
- a repository where store and retrieves bets
- a race result provider

# Instructions

## Step 1: Contract test a read/write dependency

1. contract test a database
    1. Implement BetRepositoryMongoDb to pass it tests
    2. Create a BetRepositoryFake that implement the BetRepository.
2. use contract test to write in memory adapter
    1. Execute the same test for both BetRepositoryMongoDb and BetRepositoryFake 
        * [exapmple in](https://gist.github.com/martinsson/dda36b037908ced85cb11b3a866bacf2) TS 
    2. Implement the BetRepositoryFake to pass it tests

## Step 2: Contract test a readonly dependency
1. Use test to implement the RaceResultProvider interface based on the real server
2. Use the same tests to implement a FakeRaceResultProvider that have same behaviour

## Step 3: Use simulators to write application test following the business rules

You can checkout the branch `start-step3` if needed

### Business needs to implement
1. The application can register bet
    * registering a bet is done by providing
        * gambler name
        * [snail1, snail2, snail3] where snail1 is the number of snail expected to win, snail2 is the second and snail3 is the third
2. The application lists the winners according to last race ran. To win a bet :
    1. The podium match exactly the race result
    2. The bet has been registered at least 3 seconds before the race timestamp
    3. A bet is valid only for the next race

# Application diagram

![img.png](SnailRaceBetApplication.png)