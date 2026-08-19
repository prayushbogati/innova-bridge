import { MongoClient } from "mongodb";

// Connection URL
const uri = 'mongodb://localhost:27017/';
let client;
let clientPromise;

// Database Name
const dbName = 'innovaDB';

if (process.env.NODE_ENV === 'development') {
    if (!global._mongoClientPromise) {
        client = new MongoClient(uri)
        global._mongoClientPromise = client.connect()
    }
    clientPromise = global._mongoClientPromise
} else {
    client = new MongoClient(uri)
    clientPromise = client.connect()
}

export async function getDb() {
    const client = await clientPromise;
    return client.db(dbName);
}