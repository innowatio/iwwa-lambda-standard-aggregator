import {MongoClient} from "mongodb";

import {MONGODB_URL} from "../config";

export const mongodb = MongoClient.connect(MONGODB_URL);

export const upsert = async function upsert (collectionName, sensor, id) {
    const db = await mongodb;
    return db.collection(collectionName).update(
        {_id: id},
        {$set: sensor},
        {upsert: true}
    );
};

export const logicalDelete = async function logicalDelete (collectionName, id) {
    const db = await mongodb;
    return db.collection(collectionName).update(
        {_id: id},
        {$set: {isDeleted: true}}
    );
};
