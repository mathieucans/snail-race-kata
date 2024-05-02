🐌 Snail Race Kata - snail race bet (typescript)
=====

# Requirement setup

1. Start mongodb locally

```shell
    docker run --rm -p 27017:27017 --name mongo_contract_testing -d mongo
```

2. Start the snail race server locally

Run the docker hub image 
```shell
   docker run --rm -d -p8000:8000 --name snail-race-server mathieucans/snail-race-server:1.0
```

Verify the race server status
```shell
   curl localhost:8000/results
```

3. Install dependencies
   ```shell
   npm install
   ```
4. Run test through your IDE or with the following command
    ```shell
    npm run test
    ``` 
5. Check that MongoDbBetRepository fails

# Instructions

1. Contract test a database repository
   1. Implement MongoDbBetRepository to pass it tests
   2. Create a InMemoryBetRepository that implement the BetRepository.
   3. Execute the same test for both MongoDbBetRepository and InMemoryBetRepository
   4. Implement the InMemoryBetRepository to pass it tests
2. Contract test a readonly provider
   1. Use test to implement a ServerSnailRaceProvider based on the real server
   2. Use the same tests to implement a InMemorySnailRaceProvider 
3. Use simulators to write application test following the business rules
   1. The application can register bet
   2. The application lists the winners according to last race ran. To win a bet :
      1. The podium match exactly the race result
      2. The bet has been registered at least 3 seconds before the race timestamp
      3. A bet is valid only for the next race