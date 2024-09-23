Mongo DB client cheat sheet
====

This kata is configured with the [MongoDB Node.js Driver](https://www.npmjs.com/package/mongodb) 
library.

## Connection to database

The connection is already established in the [BetRepositoryMongoDb.spec.ts](./src/adapters/BetRepositoryMongoDb.spec.ts) file.
```typescript
import {MongoClient} from "mongodb";

// Connect to the database
const mongoClient = new MongoClient('mongodb://localhost:27017');
await mongoClient.connect()
const database = mongoClient.db('contract_testing');

// close connection
mongoClient.close()
```

## Insert a Single Document 

``` typescript
await database.getCollection().insertOne(myDocument);
```

**⚠️ Warning:** this driver modify the document passed in parameter to add document id if it doesn't have one.
To avoid data corruption, use a copy your object :
```typescript
await database.getCollection().insertOne({...myDomainObject});
```

For more information see [insertOne documentation](https://www.mongodb.com/docs/drivers/node/current/usage-examples/insertOne/).

## Find Multiple Documents

The following example list all vehicles with less than 4 wheels and at least 3 passengers in an ArrayList.

```typescript
 const vehicules = database.getCollection('vehicles').find({
    wheels: { $lt: 4 },
    passengers : { $gte : 3 }
 })
```

For more information see [find documentation](https://www.mongodb.com/docs/drivers/node/current/usage-examples/find/) 
