Mongo DB client cheat sheet
====

This kata is configured with the [Java Sync Driver](https://www.mongodb.com/docs/drivers/java/sync/upcoming/) and 
[PojoCodecProvider](https://www.mongodb.com/docs/drivers/java/sync/current/fundamentals/data-formats/pojo-customization/)
librairies. 

## Connection to database

The connection is already established in the [BetRepositoryMongoDbTest](./src/test/java/snail/race/kata/adapters/BetRepositoryMongoDbTest.java) file.
```java
// Create serialization codec
CodecProvider pojoCodecProvider = PojoCodecProvider.builder().automatic(true).build();
CodecRegistry pojoCodecRegistry = fromRegistries(getDefaultCodecRegistry(), fromProviders(pojoCodecProvider));

// Connect to mongo db server and access to database
MongoClient mongoClient = MongoClients.create("mongodb://localhost");
MongoDatabase database = mongoClient.getDatabase("contract_testing").withCodecRegistry(pojoCodecRegistry);

// Close the connection 
mongoClient.close();
```

## Insert a Single Document with serialization

``` java
database.getCollection("collectionName", MyPojo.class)
.insertOne(myPojo);
```
For more information see [insertOne documentation](https://www.mongodb.com/docs/drivers/java/sync/upcoming/usage-examples/insertOne/).

## Find Multiple Documents with Deserialization

The following example list all vehicles with less than 4 wheels and at least 3 passengers in an ArrayList. 

```java
import static com.mongodb.client.model.Filters.lt;
import static com.mongodb.client.model.Filters.and;
import static com.mongodb.client.model.Filters.gte;
...
List<Vehicle> vehicles = database.getCollection("vehicles", Vehicle.class)
    .find(and(
            lt("wheels", 4),
            gte("passagers", 3)
    )).into(new ArrayList<>());
```

For more information see [find documentation](https://www.mongodb.com/docs/drivers/java/sync/upcoming/usage-examples/find/) 
