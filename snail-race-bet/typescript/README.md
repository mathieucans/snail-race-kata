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


# Instructions

1. Install dependencies
   ```shell
   npm install
   ```
2. Run test through your IDE or with the following command
    ```shell
    npm run test
    ``` 