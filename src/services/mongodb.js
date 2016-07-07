import {MongoClient} from "mongodb";

import {MONGODB_URL} from "../config";

export default MongoClient.connect(MONGODB_URL);

export async function upsert (collectionName, sensor, id) {
    const db = await MongoClient.connect(MONGODB_URL);
    return db.collection(collectionName).update(
        {_id: id},
        {$set: sensor},
        {upsert: true}
    );
}

export async function logicalDelete (collectionName, id) {
    const db = await MongoClient.connect(MONGODB_URL);
    return db.collection(collectionName).update(
        {_id: id},
        {$set: {isDeleted: true}}
    );
}
