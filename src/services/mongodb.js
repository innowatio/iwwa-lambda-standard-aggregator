import {MongoClient} from "mongodb";

import {MONGODB_URL} from "../config";

export default MongoClient.connect(MONGODB_URL);

export async function insert (collectionName, sensor, id) {
    const db = await MongoClient.connect(MONGODB_URL);
    sensor._id = id;
    return db.collection(collectionName).insert(
        sensor
    );
}

export async function update (collectionName, sensor, id) {
    const db = await MongoClient.connect(MONGODB_URL);
    return db.collection(collectionName).update(
        {_id: id},
        {$set: sensor}
    );
}

export async function logicalDelete (collectionName, id) {
    const db = await MongoClient.connect(MONGODB_URL);
    return db.collection(collectionName).update(
        {_id: id},
        {$set: {isDeleted: true}}
    );
}
