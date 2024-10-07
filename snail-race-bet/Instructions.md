🐌 Snail Race Kata - snail race bet (java)
=====

# Domain elements

The application is about bet on snail races 🐌🏁.

The application can register bet and determine winners for the last race.
The application has two externals dependencies :
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
2. Use the same tests to implement a RaceResultProviderFake that have same behaviour

### Step 2.1 Write an exploratory test agains the http endpoint
Here we do not worry about exposing the infra

* invoke the http endpoint

```java
class ExampleInvoker {
    Object invoke() {
        var httpClient = HttpClient.newHttpClient();
        var request = HttpRequest.newBuilder(URI.create("http://localhost:8000/results"))
                .version(HttpClient.Version.HTTP_1_1).build();
        HttpResponse<String> response = httpClient.send(request, BodyHandlers.ofString());
        // ...
    }
}
```

* assert status code
* assert content
* use the string to bootstrap classes
* use object mapper to convert json to object
```java
class ExampleInvoker {
    Whatever invoke() {
        // ...
        return new ObjectMapper().readValue(response.body(), Whatever.class);
    }
}
```
* extract a method that does all the production logic
* refactor to put the method in a new class
* refactor extract the whole lot to a file
* finalize assertion

### Step 2.2 Encapsulate the infra behind an interface 
* write a new test stating that we want the domain interface
* finalize assertion
* refactor: extract the interface (or use an existing one)

### Step 2.3 Make contract test and simulator
* create the contract test (abstract test class or method)
* create an entry-point for the in-memory and make it pass

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