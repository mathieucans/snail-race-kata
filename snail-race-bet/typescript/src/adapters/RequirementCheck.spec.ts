import {MongoClient} from "mongodb";

describe('Requirements check', () => {
    test('mongo database is access accessible', async () => {
        const mongoClient = new MongoClient('mongodb://localhost:27017');

        await mongoClient.connect();

        await mongoClient.close()
    });

    test('race result server is accessible', async () => {
        const response = await fetch('http://localhost:8000/results');

        expect(response.status).toEqual(200)
        expect(response.json()).toBeTruthy()
    });
});