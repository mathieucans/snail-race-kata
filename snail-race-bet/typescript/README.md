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
      * registering a bet is done by providing
         * gambler name
         * [snail1, snail2, snail3] where snail1 is the number of snail expected to win, snail2 is the second and snail3 is the third
   2. The application lists the winners according to last race ran. To win a bet :
      1. The podium match exactly the race result
      2. The bet has been registered at least 3 seconds before the race timestamp
      3. A bet is valid only for the next race

## TODO

   test in step 1 rename with do not retrive bets outside date range
   step 2 : add domain shield for domain race Provider
   step 2 : facilitate http parsing to improve learner onboarding
   Anti-corruption-layer for the snail race provider
   
## Notes 3/5

- step 1 a pris 1h (donc chronophage)
- voir comment faire les tests de contrat mieux avec typescript
- galère avec fetch (ce serait pire avec java)

Step 2 : 
- Pas beaucoup de choses dans le test de contrat du provider de course
  - on pourrait rajouter dans le contrat le fait que le podium est composé de 3, snails différents
  - Pour réduire l'entropie : 
    - on pourrait tester le fait que c'est dans l'ordre chronologique inverse
    - on pourrait tester que les noms comment par un majuscule, est-ce que deux snails apparraissent avec toujours le même nom. Est-ce que le snail à toujours le ma^me id
    - Est-ce que jean-marie est toujours avec un tiret ou avec un espace ? Accents respectés ?
  - le fake n'est pas dynamique, mettre ces choses sont uniquement dans le test du fake, difficile à mettre dans le contrat
  - Comme ce n'est pas facile de stabiliser le test de contrat, on passe assez vite à des tests plus traditionnel sur le paring
  - On a mis une bonne heure avec quelques galères sur l'export