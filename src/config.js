import dotenv from "dotenv";

dotenv.load({silent: true});

export const MONGODB_URL = process.env.MONGODB_URL || "mongodb://localhost:27017/test";
export const ACTION_INSERT = "insert";
export const ACTION_UPDATE = "update";
export const ACTION_DELETE = "delete";

// put all your collections here
export const COLLECTIONS = [
    "emails",
    "favorite-charts",
    "groups",
    "meter-reports",
    "questions",
    "sensors",
    "user-interactions"
];
