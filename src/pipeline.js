import {logicalDelete, upsert} from "./services/mongodb";
import {ACTION_INSERT, ACTION_UPDATE, ACTION_DELETE} from "./config";

export default async function pipeline (event, action, collection) {
    var sensor = event.data.element || {};
    const id = event.data.id;
    if (!id) {
        return null;
    }
    sensor.isDeleted = action === ACTION_DELETE;

    const now = Date.now();

    switch (action) {
    case ACTION_INSERT:
        sensor.createdDate = now;
        await upsert(collection, sensor, id);
        break;
    case ACTION_UPDATE:
        sensor.lastModifiedDate = now;
        await upsert(collection, sensor, id);
        break;
    case ACTION_DELETE:
        await logicalDelete(collection, id);
        break;
    }

    return null;
}
