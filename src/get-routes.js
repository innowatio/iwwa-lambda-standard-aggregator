import router from "kinesis-router";
import {mergeAll, partialRight} from "ramda";

import {ACTION_INSERT, ACTION_UPDATE, ACTION_DELETE, COLLECTIONS} from "./config";

const getEventActions = (eventType) => {
    return {
        [`element inserted in collection ${eventType}`]: {
            action: ACTION_INSERT,
            collectionName: eventType
        },
        [`element replaced in collection ${eventType}`]: {
            action: ACTION_UPDATE,
            collectionName: eventType
        },
        [`element removed in collection ${eventType}`]: {
            action: ACTION_DELETE,
            collectionName: eventType
        }
    };
};

export default function getRoutes (action) {
    var allActions = mergeAll(COLLECTIONS.map(eventType => getEventActions(eventType)));

    var finalRouter = router();
    Object.keys(allActions).forEach(
        (key) => {
            const actionType = allActions[key].action;
            const collection = allActions[key].collectionName;
            finalRouter = finalRouter.on(key, partialRight(action, [actionType, collection]));
        });

    return finalRouter;
}
