import log from "services/logger";
import {logicalDelete, upsert} from "./services/mongodb";
import {ACTION_INSERT, ACTION_UPDATE, ACTION_DELETE} from "./config";

export default async function pipeline (event, action, collection) {
    log.info(event);
    var element = event.data.element || {};
    const id = event.data.id;
    if (!id) {
        return null;
    }
    element.isDeleted = action === ACTION_DELETE;

    const now = Date.now();

    switch (action) {
    case ACTION_INSERT:
        element.createdDate = now;
        await upsert(collection, element, id);
        break;
    case ACTION_UPDATE:
        element.lastModifiedDate = now;
        await upsert(collection, element, id);
        break;
    case ACTION_DELETE:
        await logicalDelete(collection, id);
        break;
    }

    return null;
}
